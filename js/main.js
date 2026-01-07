const playerEl = document.body.querySelector("#player");
const worldEl = document.body.querySelector("#world");

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

  requestAnimationFrame(handleAnimationFrame);
};

// TODO: Refactor to not create new elements, but shift around existing ones
setInterval(() => {
  for (let i = 0; i < 5; i++) {
    const bubbleEl = document.createElement("p");

    bubbleEl.style.top = `calc(${
      (Math.random() - 0.5) * 200
    }% + ${-playerPosition.y}px)`;
    bubbleEl.style.left = `calc(${(Math.random() - 0.5) * 200}% + ${
      playerPosition.x
    }px)`;
    bubbleEl.textContent = Math.random() > 0.5 ? "0" : "1";
    bubbleEl.classList.add("bubble");

    worldEl.appendChild(bubbleEl);

    setTimeout(() => bubbleEl.remove(), 1000);
  }
}, 200);

// test
createMessageElement("holy shit, a message", 200, 550);

requestAnimationFrame(handleAnimationFrame);
