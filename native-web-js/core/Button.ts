import { View} from "./View"

export class Button extends View {
  private _text: string = "";
  private _textWrap: boolean = false;
  private _isEnabled: boolean = true;
  private _isUserInteractionEnabled: boolean = true;

  constructor(text?: string) {
    super("button");
    this.element.classList.add("ns-button");

    if (text) {
      this.text = text;
    }
  }

  private applyDefaultStyles(): void {
    // Só aplica estilos padrão se o botão tiver apenas a classe "ns-button"
    if (this.element.className === "ns-button") {
      console.log("[Button] Aplicando estilos padrão", this.element);
      const style = this.element.style;
      style.padding = "12px 16px";
      style.border = "none";
      style.borderRadius = "4px";
      style.backgroundColor = "#2196F3";
      style.color = "white";
      style.fontSize = "16px";
      style.cursor = "pointer";
      style.fontFamily = "system-ui, -apple-system, sans-serif";
      style.fontWeight = "500";
      style.textAlign = "center";

      // ⚡️ igual NativeScript: tamanho baseado no conteúdo
      style.display = "inline-block";
      style.width = "auto";
      style.height = "auto";

      style.minWidth = "64px"; // mesmo padrão do NS em Android Material
      style.transition = "all 0.2s ease";
    }
  }

  // ---- Propriedades (API NS) ----

  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
    this.element.textContent = value ?? "";
  }

  get textWrap(): boolean {
    return this._textWrap;
  }
  set textWrap(value: boolean) {
    this._textWrap = value;
    this.element.style.whiteSpace = value ? "normal" : "nowrap";
    this.element.style.wordWrap = value ? "break-word" : "normal";
  }

  get isEnabled(): boolean {
    return this._isEnabled;
  }
  set isEnabled(value: boolean) {
    this._isEnabled = value;
    const buttonElement = this.element as HTMLButtonElement;
    buttonElement.disabled = !value;

    if (value) {
      this.element.style.opacity = "1";
      this.element.style.cursor = "pointer";
    } else {
      this.element.style.opacity = "0.6";
      this.element.style.cursor = "not-allowed";
    }
  }

  get isUserInteractionEnabled(): boolean {
    return this._isUserInteractionEnabled;
  }
  set isUserInteractionEnabled(value: boolean) {
    this._isUserInteractionEnabled = value;
    this.element.style.pointerEvents = value ? "auto" : "none";
  }

  // ---- Métodos de conveniência para estilização ----

  setBackgroundColor(color: string): Button {
    this.style.backgroundColor = color;
    return this;
  }

  setTextColor(color: string): Button {
    this.element.style.color = color;
    return this;
  }

  setBorderRadius(radius: number | string): Button {
    this.element.style.borderRadius =
      typeof radius === "number" ? `${radius}px` : radius;
    return this;
  }

  setPadding(padding: number | string): Button {
    this.element.style.padding =
      typeof padding === "number" ? `${padding}px` : padding;
    return this;
  }

  setFontSize(size: number | string): Button {
    this.element.style.fontSize = typeof size === "number" ? `${size}px` : size;
    return this;
  }

  // ---- Eventos (API NS) ----

  on(eventNames: string, callback: (data?: any) => void, thisArg?: any): void {
    const events = eventNames.split(",").map((e) => e.trim());

    events.forEach((eventName) => {
      // Mapear eventos NS → HTML
      let htmlEvent = eventName;
      if (eventName === "tap") {
        htmlEvent = "click";
      }

      const wrappedCallback = (event: Event) => {
        if (this._isEnabled && this._isUserInteractionEnabled) {
          const eventData = {
            eventName: eventName,
            object: this,
            originalEvent: event,
          };
          callback.call(thisArg || this, eventData);
        }
      };

      this.element.addEventListener(htmlEvent, wrappedCallback);
    });
  }

  off(eventNames: string, callback?: (data?: any) => void): void {
    const events = eventNames.split(",").map((e) => e.trim());

    events.forEach((eventName) => {
      let htmlEvent = eventName;
      if (eventName === "tap") {
        htmlEvent = "click";
      }

      if (callback) {
        this.element.removeEventListener(htmlEvent, callback as EventListener);
      }
    });
  }

  // ---- Métodos (API NS) ----

  tap(): void {
    if (this._isEnabled && this._isUserInteractionEnabled) {
      const clickEvent = new Event("click", { bubbles: true });
      this.element.dispatchEvent(clickEvent);
    }
  }

  focus(): void {
    (this.element as HTMLButtonElement).focus();
  }

  blur(): void {
    (this.element as HTMLButtonElement).blur();
  }

  get nativeView(): HTMLButtonElement {
    // Aplicar estilos padrão similar ao NativeScript
    this.applyDefaultStyles();
    return this.element as HTMLButtonElement;
  }
}
