const positionEl = document.body.querySelector("#position");
const playerEl = document.body.querySelector("#player");
const worldEl = document.body.querySelector("#world");

const submitMessage = async () => {
  const userNameField = document.body.querySelector(
    "#create-message-name-input"
  );
  const messageField = document.body.querySelector(
    "#create-message-content-input"
  );

  await createMessage(
    userNameField.value,
    messageField.value,
    playerPosition.x,
    -playerPosition.y // Inverted idk
  );

  createMessageElement(
    messageField.value,
    userNameField.value,
    playerPosition.x,
    -playerPosition.y // Inverted idk
  );

  const createMessageEl = document.body.querySelector(
    "#create-message-container"
  );

  createMessageEl.style.opacity = 0;
  createMessageEl.style.pointerEvents = "none";
};

const loadMessages = async () => {
  const messages = await getMessages(playerPosition.x, playerPosition.y);

  document.body
    .querySelectorAll(".message")
    .forEach((messageEl) => messageEl.remove());

  messages.forEach((message) => {
    createMessageElement(
      message.message,
      message.userName,
      message.x,
      message.y
    );
  });
};

loadMessages();
setInterval(loadMessages, 10000);
