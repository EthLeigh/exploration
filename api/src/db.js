import { createClient } from "@libsql/client";

import { AREA_RANGE } from "./config.js";

const database = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const fetchMessagesInArea = async (x, y) => {
  const [minX, maxX] = [x - AREA_RANGE, x + AREA_RANGE];
  const [minY, maxY] = [y - AREA_RANGE, y + AREA_RANGE];

  const messagesResponse = await database.execute({
    sql: "SELECT * FROM messages WHERE position_x BETWEEN ? AND ? AND position_y BETWEEN ? AND ?",
    args: [minX, maxX, minY, maxY],
  });

  return messagesResponse.rows;
};

export const saveMessage = async (userName, message, x, y) => {
  await database.execute({
    sql: "INSERT INTO messages (user_name, message, position_x, position_y) VALUES (?, ?, ?, ?)",
    args: [userName, message, x, y],
  });
};
