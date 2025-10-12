import { View } from "./View";

export type Orientation = "vertical" | "horizontal";

export interface StackLayoutOptions {
  orientation?: Orientation;
  spacing?: number;
  padding?: number | string;
  margin?: number | string;
  width?: number | string;
  height?: number | string;
  backgroundColor?: string;
  horizontalAlignment?: "left" | "center" | "right" | "stretch";
  verticalAlignment?: "top" | "center" | "bottom" | "stretch";
  id?: string;
  cssClass?: string;
}

export class StackLayout extends View {
  private _orientation: Orientation = "vertical";
  private _spacing: number = 0;
  private _children: View[] = [];
  private _isLoaded: boolean = false;

  constructor(options?: StackLayoutOptions) {
    super("div");

    // Instancia style

    // Configurações base
    this.style.display = "flex";
    this.element.style.position = "relative"; // posição ainda precisa direto
    this.element.style.boxSizing = "border-box";

    // ID e classes
    if (options?.id) this.element.id = options.id;
    if (options?.cssClass) this.element.className = options.cssClass;

    // Aplicar opções se fornecidas
    if (options) this.applyOptions(options);
    else this.orientation = this._orientation;

    this._isLoaded = true;

  }

  private applyOptions(options: StackLayoutOptions) {
    if (options.orientation !== undefined)
      this.orientation = options.orientation;
    if (options.spacing !== undefined) this.spacing = options.spacing;
    if (options.padding !== undefined) this.style.padding = options.padding;
    if (options.margin !== undefined) this.style.margin = options.margin;
    if (options.width !== undefined) this.style.width = options.width;
    if (options.height !== undefined) this.style.height = options.height;
    if (options.backgroundColor !== undefined)
      this.style.backgroundColor = options.backgroundColor;
    if (options.horizontalAlignment !== undefined)
      this.horizontalAlignment = options.horizontalAlignment;
    if (options.verticalAlignment !== undefined)
      this.verticalAlignment = options.verticalAlignment;
  }

  // ===== Orientation =====
  get orientation(): Orientation {
    return this._orientation;
  }
  set orientation(value: Orientation) {
    this._orientation = value;
    this.style.flexDirection = value === "vertical" ? "column" : "row";
    this.updateSpacing();
  }

  // ===== Spacing =====
  get spacing(): number {
    return this._spacing;
  }
  set spacing(value: number) {
    this.setSpacing(value);
  }
  setSpacing(value: number) {
    this._spacing = value;
    this.updateSpacing();
    return this;
  }
  private updateSpacing() {
    this.element.style.gap = this._spacing > 0 ? `${this._spacing}px` : "0";
  }

  // ===== Padding / Margin / Size / Background via Style =====
  get padding(): string {
    return typeof this.style.padding === "number"
      ? this.style.padding.toString()
      : this.style.padding;
  }
  set padding(value: string | number) {
    this.style.padding = value;
  }


  // ===== Alignments =====
  set horizontalAlignment(value: "left" | "center" | "right" | "stretch") {
    const map = {
      left: "flex-start",
      center: "center",
      right: "flex-end",
      stretch: "stretch",
    };
    this.style.alignItems = map[value];
  }

  set verticalAlignment(value: "top" | "center" | "bottom" | "stretch") {
    const map = {
      top: "flex-start",
      center: "center",
      bottom: "flex-end",
      stretch: "stretch",
    };
    this.style.justifyContent = map[value];
  }

  // ===== Filhos =====
  addChild(child: View) {
    this._children.push(child);
    this.element.appendChild(child.element);
    return this;
  }

  insertChild(child: View, index: number) {
    if (index < 0 || index > this._children.length)
      index = this._children.length;
    this._children.splice(index, 0, child);
    if (index === this.element.children.length)
      this.element.appendChild(child.element);
    else this.element.insertBefore(child.element, this.element.children[index]);
    return this;
  }

  removeChild(child: View) {
    const index = this._children.indexOf(child);
    if (index > -1) {
      this._children.splice(index, 1);
      this.element.removeChild(child.element);
    }
    return this;
  }

  removeChildAt(index: number) {
    if (index >= 0 && index < this._children.length) {
      const child = this._children[index];
      this._children.splice(index, 1);
      this.element.removeChild(child.element);
    }
    return this;
  }

  removeChildren() {
    this._children.forEach((child) => this.element.removeChild(child.element));
    this._children = [];
    return this;
  }

  eachChild(callback: (child: View) => boolean | void) {
    for (const child of this._children) {
      if (callback(child) === true) break;
    }
  }

  getChildAt(index: number): View | undefined {
    return this._children[index];
  }
  getChildIndex(child: View): number {
    return this._children.indexOf(child);
  }
  getChildById(id: string): View | undefined {
    return this._children.find((c) => c.element.id === id);
  }
  get childrenCount(): number {
    return this._children.length;
  }

  getActualSize() {
    const rect = this.element.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  }

  get isLoaded(): boolean {
    return this._isLoaded;
  }

  configure(callback: (layout: StackLayout) => void): StackLayout {
    callback(this);
    return this;
  }
}
