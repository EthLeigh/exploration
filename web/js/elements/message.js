/**
 * @param {string} content
 * @param {string} userName
 * @param {number} xPosition
 * @param {number} yPosition
 */
const createMessageElement = (content, userName, xPosition, yPosition) => {
  const messageEl = document.createElement("div");
  const messageContentEl = document.createElement("p");
  const messageUserNameEl = document.createElement("p");

  messageContentEl.textContent = content;
  messageUserNameEl.textContent = userName;
  messageEl.classList.add("message");
  messageUserNameEl.classList.add("message-user-name");

  messageEl.style.top = `${yPosition}px`;
  messageEl.style.left = `${xPosition}px`;

  messageEl.appendChild(messageContentEl);
  messageEl.appendChild(messageUserNameEl);
  worldEl.appendChild(messageEl);
};
