import "dotenv/config";
import express from "express";
import cors from "cors";

import { fetchMessagesInArea, saveMessage } from "./db.js";

const app = express();
app.use(
  cors({
    methods: ["POST", "GET", "OPTIONS"],
  })
);
app.use(express.json());

app.get("/api/messages", async (req, res) => {
  const x = Number.parseInt(req.query.x) ?? 0;
  const y = Number.parseInt(req.query.y) ?? 0;

  let messages;
  try {
    messages = await fetchMessagesInArea(x, y);
  } catch (err) {
    console.error(err);

    return res.status(500).json({ message: "Failed to retrieve messages." });
  }

  const formattedMessages = messages.map((message) => ({
    userName: message["user_name"],
    message: message.message,
    x: message["position_x"],
    y: message["position_y"],
  }));

  return res.json(formattedMessages);
});

app.post("/api/messages", async (req, res) => {
  const { userName, message, x, y } = req.body;

  try {
    await saveMessage(userName, message, x, y);
  } catch (err) {
    console.error(err);

    return res.status(500).json({ message: "Failed to create message." });
  }

  return res.status(201).json({
    message: "Message created",
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
