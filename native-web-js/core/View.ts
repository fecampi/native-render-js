import { Style } from "./styles/Style";

type Visibility = "visible" | "hidden" | "collapsed";

type GestureEvent =
  | "tap"
  | "longPress"
  | "doubleTap"
  | "touch"
  | "loaded"
  | "unloaded"
  | "valueChange";

export abstract class View {
  css: string = "";
  public style: Style;
  element: HTMLElement;
  parent?: View;
  bindingContext: any = null;

  private _customBackgroundColor: string | null = null;
  private _listeners: Map<GestureEvent, Function[]> = new Map();

  constructor(tag: string) {
    this.element = document.createElement(tag);
    this.applyNativeLikeEvents();
    this.style = new Style(this.element);
  }

  private _cssLink: HTMLLinkElement | null = null;

  addCssFile(cssPath: string) {
    console.log("[addCssFile] Iniciando importação do CSS:", cssPath);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssPath;
    link.onload = () =>
      console.log("[addCssFile] CSS carregado com sucesso:", cssPath);
    link.onerror = () =>
      console.error("[addCssFile] Falha ao carregar CSS:", cssPath);
    document.head.appendChild(link);
    console.log("[addCssFile] <link> inserido no head:", link);
  }

  // ===== ÁRVORE =====
  appendTo(parent: HTMLElement | View) {
    if (parent instanceof View) {
      parent.element.appendChild(this.element);
      this.parent = parent;
    } else {
      parent.appendChild(this.element);
    }
    this.notify("loaded");
    return this;
  }

  removeFromParent() {
    if (this.element.parentElement) {
      this.element.parentElement.removeChild(this.element);
      // Remove o <link> do head referente ao CSS deste View
      if (this._cssLink && document.head.contains(this._cssLink)) {
        document.head.removeChild(this._cssLink);
        this._cssLink = null;
      }
      this.notify("unloaded");
    }
    return this;
  }

  // ===== ID / CLASSES =====
  get id(): string {
    return this.element.id;
  }
  set id(v: string) {
    this.element.id = v;
  }

  get className(): string {
    return this.element.className;
  }
  set className(v: string) {
    this.element.className = v;
  }

  addClass(c: string) {
    this.element.classList.add(c);
    return this;
  }
  removeClass(c: string) {
    this.element.classList.remove(c);
    return this;
  }

  // ===== ESTILO DIRETO =====
  setStyle(prop: string, val: string | number) {
    (this.element.style as any)[prop] =
      typeof val === "number" ? `${val}px` : val;
    return this;
  }
  setStyles(styles: { [k: string]: string | number }) {
    Object.assign(this.element.style, styles);
    return this;
  }

  // ===== PROPRIEDADES VISUAIS =====
  set backgroundColor(v: string | null) {
    this._customBackgroundColor = v;
    this.element.style.backgroundColor = v || "";
  }
  get backgroundColor() {
    return this._customBackgroundColor;
  }

  set backgroundImage(v: string) {
    this.element.style.backgroundImage = v;
  }
  get backgroundImage() {
    return this.element.style.backgroundImage;
  }

  set borderColor(v: string) {
    this.element.style.borderColor = v;
  }
  get borderColor() {
    return this.element.style.borderColor;
  }

  set borderWidth(v: number | string) {
    this.element.style.borderWidth = typeof v === "number" ? `${v}px` : v;
  }
  get borderWidth() {
    return this.element.style.borderWidth;
  }

  set borderRadius(v: number | string) {
    this.element.style.borderRadius = typeof v === "number" ? `${v}px` : v;
  }
  get borderRadius() {
    return this.element.style.borderRadius;
  }

  set width(v: number | string) {
    this.element.style.width = typeof v === "number" ? `${v}px` : v;
  }
  get width() {
    return this.element.style.width;
  }

  set height(v: number | string) {
    this.element.style.height = typeof v === "number" ? `${v}px` : v;
  }
  get height() {
    return this.element.style.height;
  }

  set opacity(v: number) {
    this.element.style.opacity = String(v);
  }
  get opacity() {
    return parseFloat(this.element.style.opacity || "1");
  }

  set visibility(v: Visibility) {
    if (v === "collapsed") {
      this.element.style.display = "none";
    } else {
      this.element.style.display = "";
      this.element.style.visibility = v === "hidden" ? "hidden" : "visible";
    }
  }
  get visibility(): Visibility {
    if (this.element.style.display === "none") return "collapsed";
    return (this.element.style.visibility as Visibility) || "visible";
  }

  set isUserInteractionEnabled(v: boolean) {
    this.element.style.pointerEvents = v ? "" : "none";
  }
  get isUserInteractionEnabled() {
    return this.element.style.pointerEvents !== "none";
  }

  set clipToBounds(v: boolean) {
    this.element.style.overflow = v ? "hidden" : "";
  }
  get clipToBounds() {
    return this.element.style.overflow === "hidden";
  }

  // ===== TRANSFORMAÇÕES =====
  private _transform = {
    rotate: 0,
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    originX: 0,
    originY: 0,
    perspective: null as number | null,
  };

  private applyTransform() {
    const t = this._transform;
    let str = `rotate(${t.rotate}deg) scale(${t.scaleX}, ${t.scaleY}) translate(${t.translateX}px, ${t.translateY}px)`;
    this.element.style.transform = str;
  }
  private applyOrigin() {
    this.element.style.transformOrigin = `${this._transform.originX}px ${this._transform.originY}px`;
  }
  private applyPerspective() {
    this.element.style.perspective = this._transform.perspective
      ? `${this._transform.perspective}px`
      : "";
  }

  set rotate(v: number) {
    this._transform.rotate = v;
    this.applyTransform();
  }
  get rotate() {
    return this._transform.rotate;
  }

  set scaleX(v: number) {
    this._transform.scaleX = v;
    this.applyTransform();
  }
  get scaleX() {
    return this._transform.scaleX;
  }

  set scaleY(v: number) {
    this._transform.scaleY = v;
    this.applyTransform();
  }
  get scaleY() {
    return this._transform.scaleY;
  }

  set translateX(v: number) {
    this._transform.translateX = v;
    this.applyTransform();
  }
  get translateX() {
    return this._transform.translateX;
  }

  set translateY(v: number) {
    this._transform.translateY = v;
    this.applyTransform();
  }
  get translateY() {
    return this._transform.translateY;
  }

  set originX(v: number) {
    this._transform.originX = v;
    this.applyOrigin();
  }
  get originX() {
    return this._transform.originX;
  }

  set originY(v: number) {
    this._transform.originY = v;
    this.applyOrigin();
  }
  get originY() {
    return this._transform.originY;
  }

  set perspective(v: number | null) {
    this._transform.perspective = v;
    this.applyPerspective();
  }
  get perspective() {
    return this._transform.perspective;
  }

  // ===== EVENTOS =====
  on(event: GestureEvent, cb: Function) {
    if (!this._listeners.has(event)) this._listeners.set(event, []);
    this._listeners.get(event)!.push(cb);
  }

  off(event: GestureEvent, cb?: Function) {
    if (cb) {
      const arr = this._listeners.get(event) || [];
      this._listeners.set(
        event,
        arr.filter((fn) => fn !== cb)
      );
    } else {
      this._listeners.delete(event);
    }
  }

  private notify(event: GestureEvent, data: any = {}) {
    const arr = this._listeners.get(event) || [];
    arr.forEach((fn) =>
      fn.call(this, { eventName: event, object: this, ...data })
    );
  }

  private applyNativeLikeEvents() {
    this.element.addEventListener("click", () => this.notify("tap"));
    this.element.addEventListener("dblclick", () => this.notify("doubleTap"));
    this.element.addEventListener("mousedown", () => this.notify("longPress"));
    this.element.addEventListener("touchstart", (e) =>
      this.notify("touch", { touch: e })
    );
  }

  // ===== ACESSIBILIDADE =====
  set automationText(v: string) {
    this.element.setAttribute("data-automation-text", v);
  }
  get automationText(): string {
    return this.element.getAttribute("data-automation-text") ?? "";
  }
}
