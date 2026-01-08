const positionEl = document.body.querySelector("#position");
const playerEl = document.body.querySelector("#player");
const worldEl = document.body.querySelector("#world");

const loadMessages = async () => {
  const messages = await getMessages(playerPosition.x, playerPosition.y);

  document.body
    .querySelectorAll(".message")
    .forEach((messageEl) => messageEl.remove());

  messages.forEach((message) => {
    createMessageElement(
      message.message,
      message["user_name"],
      message["position_x"],
      message["position_y"]
    );
  });
};

loadMessages();
setInterval(loadMessages, 10000);
