import { Component } from "./Component";

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
}

export class StackLayout extends Component {
  private _orientation: Orientation = "vertical";
  private _spacing: number = 0;
  private _children: Component[] = [];

  constructor(options?: StackLayoutOptions) {
    super("div");
    
    // Configurações base
    this.element.style.display = "flex";
    this.element.style.position = "relative";
    this.element.style.boxSizing = "border-box";
    
    // Aplicar opções se fornecidas
    if (options) {
      this.applyOptions(options);
    } else {
      this.orientation = this._orientation;
    }
  }

  private applyOptions(options: StackLayoutOptions) {
    if (options.orientation !== undefined) {
      this.orientation = options.orientation;
    }
    
    if (options.spacing !== undefined) {
      this.spacing = options.spacing;
    }
    
    if (options.padding !== undefined) {
      this.padding = options.padding;
    }
    
    if (options.margin !== undefined) {
      this.setMargin(options.margin);
    }
    
    if (options.width !== undefined) {
      this.setWidth(options.width);
    }
    
    if (options.height !== undefined) {
      this.setHeight(options.height);
    }
    
    if (options.backgroundColor !== undefined) {
      this.backgroundColor = options.backgroundColor;
    }
    
    if (options.horizontalAlignment !== undefined) {
      this.horizontalAlignment = options.horizontalAlignment;
    }
    
    if (options.verticalAlignment !== undefined) {
      this.verticalAlignment = options.verticalAlignment;
    }
  }

  // Propriedade orientation
  get orientation(): Orientation {
    return this._orientation;
  }



  set orientation(value: Orientation) {
    this._orientation = value;
    this.element.style.flexDirection = value === "vertical" ? "column" : "row";
    this.updateSpacing();

  }

  // Propriedade spacing
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
    if (this._spacing > 0) {
      this.element.style.gap = `${this._spacing}px`;
    } else {
      this.element.style.gap = "0";
    }
  }

  // Propriedades de padding e margin
  get padding(): string {
    return this.element.style.padding;
  }

  set padding(value: number | string) {
    this.setPadding(value);
  }

  setPadding(value: number | string) {
    const paddingValue = typeof value === "number" ? `${value}px` : value;
    this.element.style.padding = paddingValue;
    return this;
  }

  get margin(): string {
    return this.element.style.margin;
  }

  set margin(value: number | string) {
    this.setMargin(value);
  }

  setMargin(value: number | string) {
    const marginValue = typeof value === "number" ? `${value}px` : value;
    this.element.style.margin = marginValue;
    return this;
  }

  // Propriedades de tamanho
  get width(): string {
    return this.element.style.width;
  }

  set width(value: number | string) {
    this.setWidth(value);
  }

  setWidth(value: number | string) {
    const widthValue = typeof value === "number" ? `${value}px` : value;
    this.element.style.width = widthValue;
    return this;
  }

  get height(): string {
    return this.element.style.height;
  }

  set height(value: number | string) {
    this.setHeight(value);
  }

  setHeight(value: number | string) {
    const heightValue = typeof value === "number" ? `${value}px` : value;
    this.element.style.height = heightValue;
    return this;
  }

  // Propriedade backgroundColor
  get backgroundColor(): string {
    return this.element.style.backgroundColor;
  }


  set backgroundColor(color: string) {
    this.element.style.backgroundColor = color;
  }

  // Alinhamentos
  set horizontalAlignment(alignment: "left" | "center" | "right" | "stretch") {
    switch (alignment) {
      case "left":
        this.element.style.alignItems = "flex-start";
        break;
      case "center":
        this.element.style.alignItems = "center";
        break;
      case "right":
        this.element.style.alignItems = "flex-end";
        break;
      case "stretch":
        this.element.style.alignItems = "stretch";
        break;
    }
  }

  set verticalAlignment(alignment: "top" | "center" | "bottom" | "stretch") {
    switch (alignment) {
      case "top":
        this.element.style.justifyContent = "flex-start";
        break;
      case "center":
        this.element.style.justifyContent = "center";
        break;
      case "bottom":
        this.element.style.justifyContent = "flex-end";
        break;
      case "stretch":
        this.element.style.justifyContent = "stretch";
        break;
    }
  }

  // Métodos para gerenciar filhos
  add(child: Component) {
    this._children.push(child);
    this.element.appendChild(child.element);
    return this;
  }

  removeChild(child: Component) {
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

  getChildAt(index: number): Component | undefined {
    return this._children[index];
  }

  get childrenCount(): number {
    return this._children.length;
  }

  clear() {
    this._children.forEach(child => {
      this.element.removeChild(child.element);
    });
    this._children = [];
    return this;
  }

  // Método de conveniência para configuração em cadeia
  configure(callback: (layout: StackLayout) => void): StackLayout {
    callback(this);
    return this;
  }
}