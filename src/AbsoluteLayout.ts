export class AbsoluteLayout {
  element: HTMLDivElement;
  static setLeft(child: { element: HTMLElement }, value: string) {
    child.element.style.left = value;
    child.element.style.position = "absolute";
  }
  static setTop(child: { element: HTMLElement }, value: string) {
    child.element.style.top = value;
    child.element.style.position = "absolute";
  }
  constructor() {
    this.element = document.createElement("div");
    this.element.style.position = "relative";
    this.element.style.overflow = "hidden";
  }
  addChild(child: { element: HTMLElement }) {
    this.element.appendChild(child.element);
  }
}