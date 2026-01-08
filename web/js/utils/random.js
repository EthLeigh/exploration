const randomlyPositionElement = (element) => {
  element.style.top = `calc(${Math.random() * 100}% + ${-playerPosition.y}px)`;
  element.style.left = `calc(${Math.random() * 100}% + ${playerPosition.x}px)`;
};
