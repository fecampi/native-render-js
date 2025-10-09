export type Color = string;

export class Style {
  private element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  // --- Cor e fundo ---
  set color(value: Color | string) {
    this.element.style.color = value;
  }
  set backgroundColor(value: Color | string) {
    this.element.style.backgroundColor = value;
  }

  // --- Texto ---
  set fontSize(value: string | number) {
    this.element.style.fontSize =
      typeof value === "number" ? `${value}px` : value;
  }
  set fontWeight(value: string | number) {
    this.element.style.fontWeight = value.toString();
  }
  set textAlign(value: "left" | "right" | "center" | "justify") {
    this.element.style.textAlign = value;
  }
  set textDecoration(value: string) {
    this.element.style.textDecoration = value;
  }
  set textTransform(value: "none" | "capitalize" | "uppercase" | "lowercase") {
    this.element.style.textTransform = value;
  }
  set textShadow(value: string) {
    this.element.style.textShadow = value;
  }

  // --- Layout ---
  set width(value: string | number) {
    this.element.style.width = typeof value === "number" ? `${value}px` : value;
  }
  set height(value: string | number) {
    this.element.style.height =
      typeof value === "number" ? `${value}px` : value;
  }
  set padding(value: string | number) {
    this.element.style.padding =
      typeof value === "number" ? `${value}px` : value;
  }
  set margin(value: string | number) {
    this.element.style.margin =
      typeof value === "number" ? `${value}px` : value;
  }
  set borderRadius(value: string | number) {
    this.element.style.borderRadius =
      typeof value === "number" ? `${value}px` : value;
  }
  set opacity(value: number | string) {
    this.element.style.opacity = value.toString();
  }
  set zIndex(value: number | string) {
    this.element.style.zIndex = value.toString();
  }

  // --- Display / cursor ---
  set display(value: string) {
    this.element.style.display = value;
  }
  set cursor(value: string) {
    this.element.style.cursor = value;
  }
}
