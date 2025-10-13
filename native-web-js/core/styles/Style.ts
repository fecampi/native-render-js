import { Color } from "../Color";

export class Style {
  private element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  // --- Texto / Layout ---
  set whiteSpace(value: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line") {
    this.element.style.whiteSpace = value;
  }
  get whiteSpace(): string {
    return this.element.style.whiteSpace || "normal";
  }

  // --- Cor e fundo ---
  set color(value: Color | string) {
    this.element.style.color =
      typeof value === "string" ? value : value.toString();
  }
  set backgroundColor(value: Color | string) {
    this.element.style.backgroundColor =
      typeof value === "string" ? value : value.toString();
  }

  // --- Texto ---
  set fontSize(value: string | number) {
    this.element.style.fontSize =
      typeof value === "number" ? `${value}px` : value;
  }
  set fontWeight(value: string | number) {
    this.element.style.fontWeight = value.toString();
  }
  set fontStyle(value: "normal" | "italic" | "oblique" | string) {
    this.element.style.fontStyle = value;
  }
  set lineHeight(value: string | number) {
    this.element.style.lineHeight =
      typeof value === "number" ? `${value}px` : value;
  }
  set letterSpacing(value: string | number) {
    this.element.style.letterSpacing =
      typeof value === "number" ? `${value}px` : value;
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
  set marginBottom(value: string | number) {
    this.element.style.marginBottom =
      typeof value === "number" ? `${value}px` : value;
  }
  set textAlignment(value: "left" | "right" | "center" | "justify") {
    this.element.style.textAlign = value;
  }
  //
  set spacing(value: string | number) {
    const spacingValue = typeof value === "number" ? `${value}px` : value;
    this.element.style.padding = spacingValue;
    this.element.style.margin = spacingValue;
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
  set overflow(value: "visible" | "hidden" | "scroll" | "auto") {
    this.element.style.overflow = value;
  }
  get overflow(): string {
    return this.element.style.overflow;
  }

  // --- Flex Layout ---
  set flexDirection(value: string) {
    this.element.style.flexDirection = value;
  }
  set alignItems(value: string) {
    this.element.style.alignItems = value;
  }
  set justifyContent(value: string) {
    this.element.style.justifyContent = value;
  }

  get flexShrink(): string {
    return this.element.style.flexShrink;
  }
  set flexShrink(value: string) {
    this.element.style.flexShrink = value;
  }
}
