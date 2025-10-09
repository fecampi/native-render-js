export type Color = string;

export class BaseStyle {
  protected element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  // Cor e fundo
  set color(value: Color) {
    this.element.style.color = value;
  }
  set backgroundColor(value: Color) {
    this.element.style.backgroundColor = value;
  }

  // Texto comum
  set fontSize(value: string | number) {
    this.element.style.fontSize =
      typeof value === "number" ? `${value}px` : value;
  }
  set fontWeight(value: string | number) {
    this.element.style.fontWeight = value.toString();
  }

  // Layout comum
  set width(value: string | number) {
    this.element.style.width = typeof value === "number" ? `${value}px` : value;
  }
  set height(value: string | number) {
    this.element.style.height =
      typeof value === "number" ? `${value}px` : value;
  }
  set margin(value: string | number) {
    this.element.style.margin =
      typeof value === "number" ? `${value}px` : value;
  }
  set padding(value: string | number) {
    this.element.style.padding =
      typeof value === "number" ? `${value}px` : value;
  }
  set borderRadius(value: string | number) {
    this.element.style.borderRadius =
      typeof value === "number" ? `${value}px` : value;
  }
  set opacity(value: number) {
    this.element.style.opacity = value.toString();
  }
  set zIndex(value: number) {
    this.element.style.zIndex = value.toString();
  }

  // Alinhamento comum
  set textAlign(value: "left" | "right" | "center" | "justify") {
    this.element.style.textAlign = value;
  }
}
