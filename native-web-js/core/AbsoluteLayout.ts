
import { View} from "./View";


export class AbsoluteLayout extends View {
  constructor() {
    super("div");
    this.element.style.position = "relative";
    this.element.style.overflow = "hidden";
    this.element.style.width = "1280px";
    this.element.style.height = "720px";
    console.log('[AbsoluteLayout] construtor: width inicial =', this.element.style.width, 'height inicial =', this.element.style.height);
  }

  // ---- Métodos estáticos para posicionar filhos ----
  static setLeft(child: HTMLElement | { element: HTMLElement }, value: string) {
    const el = child instanceof HTMLElement ? child : child.element;
    el.style.left = value;
  }

  static setTop(child: HTMLElement | { element: HTMLElement }, value: string) {
    const el = child instanceof HTMLElement ? child : child.element;
    el.style.top = value;
  }

  // ---- Manipulação de filhos ----
  addChild(child: HTMLElement | { element: HTMLElement }) {
    const el = child instanceof HTMLElement ? child : child.element;
    el.style.position = "absolute"; // ✅ garante posição apenas 1 vez
    this.element.appendChild(el);
  }

  // ---- Setters estilo NativeScript ----
  set width(value: number | string) {
  this.element.style.width = typeof value === "number" ? `${value}px` : value;
  console.log('[AbsoluteLayout] setter width:', value, '->', this.element.style.width);
  }

  set height(value: number | string) {
  this.element.style.height = typeof value === "number" ? `${value}px` : value;
  console.log('[AbsoluteLayout] setter height:', value, '->', this.element.style.height);
  }

  set backgroundColor(value: string) {
    this.element.style.backgroundColor = value;
  }
}
