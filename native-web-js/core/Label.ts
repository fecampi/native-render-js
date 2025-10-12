import { View } from "./View";
import { Style } from "./styles/Style";
import { Color } from "./Color";

export class Label extends View {
  public style: Style; // nosso objeto de estilo
  private _textAlignment: "left" | "center" | "right" = "left";
  private _textWrap: boolean = false;

  constructor(text: string = "") {
    super("span"); // span para texto inline
    this.style = new Style(this.element);

    this.text = text;
    this.applyTextAlignment();
    this.applyTextWrap();
  }

  // ===== Texto =====
  set text(value: string) {
    this.element.textContent = value;
  }
  get text(): string {
    return this.element.textContent || "";
  }

  // ===== textAlignment =====
  set textAlignment(value: "left" | "center" | "right") {
    this._textAlignment = value;
    this.applyTextAlignment();
  }
  get textAlignment(): "left" | "center" | "right" {
    return this._textAlignment;
  }
  private applyTextAlignment() {
    this.style.textAlign = this._textAlignment;
  }

  // ===== textWrap =====
  set textWrap(value: boolean) {
    this._textWrap = value;
    this.applyTextWrap();
  }
  get textWrap(): boolean {
    return this._textWrap;
  }
  private applyTextWrap() {
    this.style.whiteSpace = this._textWrap ? "normal" : "nowrap";
  }

  // ===== Máximo de linhas =====
  set maxLines(value: number) {
    if (!this._textWrap) return;
    this.style.display = "-webkit-box";
    (this.element.style as any).webkitBoxOrient = "vertical";
    this.style.overflow = "hidden";
    (this.element.style as any).webkitLineClamp = value.toString();
  }
  get maxLines(): number {
    return parseInt(this.element.style.webkitLineClamp || "0");
  }

  // ===== Fonte e cor =====
  set color(value: Color) {
    this.style.color = value;
  }
  get color(): Color {
    return this.style.color;
  }

  set fontSize(value: string | number) {
    this.style.fontSize = value;
  }
  get fontSize(): string {
    const value = this.style.fontSize;
    return typeof value === "number" ? value.toString() : value;
  }

  set fontWeight(value: string | number) {
    this.style.fontWeight = value;
  }
  get fontWeight(): string {
    const value = this.style.fontWeight;
    return typeof value === "number" ? value.toString() : value;
  }

  set fontStyle(value: string) {
    this.style.fontStyle = value;
  }
  get fontStyle(): string {
    return this.style.fontStyle;
  }

  set lineHeight(value: string | number) {
    this.style.lineHeight = typeof value === "number" ? `${value}px` : value;
  }
  get lineHeight(): string {
    const value = this.style.lineHeight;
    return typeof value === "number" ? `${value}px` : value;
  }

  set letterSpacing(value: string | number) {
    this.style.letterSpacing = typeof value === "number" ? `${value}px` : value;
  }
  get letterSpacing(): string {
    const value = this.style.letterSpacing;
    return typeof value === "number" ? `${value}px` : value;
  }
}
