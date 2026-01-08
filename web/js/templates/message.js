/**
 * @param {string} content
 * @param {number} xPosition
 * @param {number} yPosition
 */
const createMessageElement = (content, xPosition, yPosition) => {
  const messageEl = document.createElement("p");

  messageEl.textContent = content;
  messageEl.classList.add("message");

  messageEl.style.top = `${yPosition}px`;
  messageEl.style.left = `${xPosition}px`;

  worldEl.appendChild(messageEl);
};
