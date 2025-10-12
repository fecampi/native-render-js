export class DisplayObject {
  el: HTMLElement;

  constructor(tag: string) {
    this.el = document.createElement(tag);
    this.el.style.position = "relative";
  }

  get style() {
    return this.el.style;
  }

  class(name: string) {
    this.el.className = name;
    return this;
  }

  text(value: string) {
    this.el.textContent = value;
    return this;
  }

  add(child: DisplayObject) {
    this.el.appendChild(child.el);
    return this;
  }

  mount(parent: HTMLElement) {
    parent.appendChild(this.el);
    return this;
  }

  /**
   * Adiciona event listener com tipos comuns
   */
  on(eventType: string, callback: (event?: Event) => void): this {
    switch (eventType) {
      case "tap":
      case "click":
        this.el.addEventListener("click", callback);
        break;
      case "hover":
        this.el.addEventListener("mouseover", callback);
        break;
      case "hoverOut":
        this.el.addEventListener("mouseout", callback);
        break;
      case "focus":
        this.el.addEventListener("focus", callback);
        break;
      case "blur":
        this.el.addEventListener("blur", callback);
        break;
      default:
        this.el.addEventListener(eventType, callback);
    }
    return this;
  }

  /**
   * Shortcut para evento click/tap
   */
  onClick(callback: (event?: Event) => void): this {
    return this.on("click", callback);
  }

  /**
   * Shortcut para evento hover (mouseover)
   */
  onHover(callback: (event?: Event) => void): this {
    return this.on("hover", callback);
  }

  /**
   * Shortcut para evento hoverOut (mouseout)
   */
  onHoverOut(callback: (event?: Event) => void): this {
    return this.on("hoverOut", callback);
  }

  /**
   * Shortcut para evento focus
   */
  onFocus(callback: (event?: Event) => void): this {
    return this.on("focus", callback);
  }

  /**
   * Shortcut para evento blur
   */
  onBlur(callback: (event?: Event) => void): this {
    return this.on("blur", callback);
  }
}
