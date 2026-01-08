let playerAngle = 0;
let playerPosition = { x: 0, y: 0 };

const input = new Input();

const handlePlayerMovement = () => {
  let rotationMagnitude = 0;
  if (input.isKeyActive("d") || input.isKeyActive("ArrowRight")) {
    rotationMagnitude = 1;
  } else if (input.isKeyActive("a") || input.isKeyActive("ArrowLeft")) {
    rotationMagnitude = -1;
  }

  playerAngle += PLAYER_ROTATION_SPEED * rotationMagnitude;

  let movementMagnitude = 0;
  if (input.isKeyActive("w") || input.isKeyActive("ArrowUp")) {
    movementMagnitude = 1;
  } else if (input.isKeyActive("s") || input.isKeyActive("ArrowDown")) {
    movementMagnitude = -1;
  }

  const radAngle = playerAngle * (Math.PI / 180);
  playerPosition.x += Math.sin(radAngle) * PLAYER_SPEED * movementMagnitude;
  playerPosition.y += Math.cos(radAngle) * PLAYER_SPEED * movementMagnitude;
};

const handleAnimationFrame = () => {
  handlePlayerMovement();

  playerEl.style.transform = `translate(-50%, -50%) rotate(${playerAngle}deg)`;
  worldEl.style.transform = `translate(${-playerPosition.x}px, ${
    playerPosition.y
  }px)`;

  positionEl.textContent = `{ ${Math.round(playerPosition.x)}, ${Math.round(
    playerPosition.y
  )} }`;

  requestAnimationFrame(handleAnimationFrame);
};

requestAnimationFrame(handleAnimationFrame);
