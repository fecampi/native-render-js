import { View } from "./View";

export class Page extends View {
  private _content?: View;
  private _actionBar?: View;

  constructor(title: string = "NativeScript Web Page") {
    super("div");
    document.title = title;
    this.element.classList.add("page");

    // ===== Estilo fixo para 720p =====
    this.style.width = "1280px";
    this.style.height = "720px";
    this.style.flexShrink = "0"; // não encolhe
    this.style.backgroundColor = "#fff"; // fundo da página
    this.style.overflow = "hidden"; // evita scroll interno


        // ===== Configuração do html =====
    const html = document.documentElement;
    html.style.margin = "0";
    html.style.padding = "0";
    html.style.width = "100%";
    html.style.height = "100%";
    html.style.display = "flex";
    html.style.justifyContent = "center";
    html.style.alignItems = "center";
    html.style.overflow = "hidden";
    html.style.backgroundColor = "#000";
    html.style.margin = "32px";
  }

  // ===== ActionBar =====
  set actionBar(bar: View) {
    if (this._actionBar) {
      this.element.removeChild(this._actionBar.element);
    }
    this._actionBar = bar;
    bar.element.classList.add("action-bar");
    this.element.prepend(bar.element);
  }

  get actionBar(): View | undefined {
    return this._actionBar;
  }

  // ===== Title =====
  set title(value: string) {
    document.title = value;
  }

  get title(): string {
    return document.title;
  }

  // ===== Content =====
  set content(child: View) {
    if (this._content) {
      this.element.removeChild(this._content.element);
    }
    this._content = child;
    child.element.classList.add("page-content");
    this.element.appendChild(child.element);
  }

  get content(): View | undefined {
    return this._content;
  }

  // ===== Estilo global =====
  addGlobalStyle(css: string) {
    const styleEl = document.createElement("style");
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
  }
}
