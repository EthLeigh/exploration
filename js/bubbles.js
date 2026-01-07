const setupBubbles = () => {
  for (let i = 0; i < 10; i++) {
    const bubbleEl = document.createElement("p");

    bubbleEl.textContent = Math.random() >= 0.5 ? "0" : "1";
    bubbleEl.classList.add("bubble");
    bubbleEl.style.animationDelay = `${Math.random() * 500}ms`;

    bubbleEl.addEventListener("animationiteration", () =>
      randomlyPositionElement(bubbleEl)
    );

    randomlyPositionElement(bubbleEl);

    worldEl.appendChild(bubbleEl);
  }
};

setupBubbles();
