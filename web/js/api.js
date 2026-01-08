/**
 * @param {number} x
 * @param {number} y
 * @returns {Promise<Object[]>}
 */
const getMessages = async (x, y) => {
  const response = await fetch(
    API_URL + API_MESSAGES_PATH + `?x=${Math.round(x)}&y=${Math.round(y)}`,
    {
      method: "GET",
      mode: "cors",
    }
  );

  return await response.json();
};

/**
 * @param {string} userName
 * @param {string} message
 * @param {number} x
 * @param {number} y
 */
const createMessage = async (userName, message, x, y) => {
  await fetch(API_URL + API_MESSAGES_PATH, {
    method: "POST",
    mode: "no-cors",
    body: {
      userName,
      message,
      x,
      y,
    },
  });
};
