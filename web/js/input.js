class Input {
  activeKeys = new Set();

  constructor() {
    document.addEventListener("keydown", (evt) => this.activeKeys.add(evt.key));

    document.addEventListener("keyup", (evt) =>
      this.activeKeys.delete(evt.key)
    );

    document.addEventListener("blur", () => this.activeKeys.clear());
  }

  isKeyActive(key) {
    return this.activeKeys.has(key);
  }
}
