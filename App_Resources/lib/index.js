// core/web/Component.ts
var Component = class {
  element;
  _customBackgroundColor = null;
  // Para armazenar cor personalizada
  constructor(tag) {
    this.element = document.createElement(tag);
  }
  // Adiciona o componente a um elemento pai
  appendTo(parent) {
    parent.appendChild(this.element);
  }
  // ✅ Definir um único estilo CSS
  setStyle(property, value) {
    this.element.style[property] = typeof value === "number" ? `${value}px` : value;
    return this;
  }
  // ✅ Definir múltiplos estilos de uma vez usando chave-valor
  setStyles(styles) {
    for (const key in styles) {
      this.setStyle(key, styles[key]);
    }
    return this;
  }
  // Permite usar component.className = "minha-classe"
  get className() {
    return this.element.className;
  }
  set className(value) {
    this.element.className = value;
  }
  // ✅ style dinâmico estilo NativeScript
  get style() {
    const elStyle = this.element.style;
    const self = this;
    return new Proxy(elStyle, {
      get(target, prop) {
        return target[prop];
      },
      set(target, prop, value) {
        if (prop === "backgroundColor") {
          self._customBackgroundColor = typeof value === "number" ? `${value}px` : value;
        }
        target[prop] = typeof value === "number" ? `${value}px` : value;
        return true;
      }
    });
  }
};

// core/web/focusTreeUtils.ts
var focusTreeService = {
  setup(rootLayout) {
    console.log("setup recebeu:", rootLayout);
  },
  enableFocusNavigation() {
    console.log("enableFocusNavigation foi chamado");
  }
};

// core/web/Page.ts
var Page = class extends Component {
  constructor() {
    super("div");
    this.element.classList.add("page");
  }
  set content(child) {
    this.element.appendChild(child.element);
    focusTreeService.setup(child.element);
  }
};

// core/web/Application.ts
var Application = class _Application {
  static width;
  static height;
  static start(page) {
    document.body.innerHTML = "";
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    document.body.style.background = "#000";
    if (_Application.width)
      document.body.style.width = typeof _Application.width === "number" ? `${_Application.width}px` : _Application.width;
    if (_Application.height)
      document.body.style.height = typeof _Application.height === "number" ? `${_Application.height}px` : _Application.height;
    page.element.style.width = _Application.width ? typeof _Application.width === "number" ? `${_Application.width}px` : _Application.width : "100vw";
    page.element.style.height = _Application.height ? typeof _Application.height === "number" ? `${_Application.height}px` : _Application.height : "100vh";
    document.body.appendChild(page.element);
  }
  // Carrega um arquivo CSS externo dinamicamente
  static addCssFile(path) {
    console.log(`Carregando CSS: ${path}`);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = path;
    link.onload = () => console.log(`CSS carregado com sucesso: ${path}`);
    link.onerror = () => console.error(`Erro ao carregar CSS: ${path}`);
    document.head.appendChild(link);
  }
  static run({ create }) {
    const page = create();
    this.start(page);
  }
};

// core/web/StackLayout.ts
var StackLayout = class extends Component {
  _orientation = "vertical";
  _spacing = 0;
  _children = [];
  constructor(options) {
    super("div");
    this.element.style.display = "flex";
    this.element.style.position = "relative";
    this.element.style.boxSizing = "border-box";
    if (options) {
      this.applyOptions(options);
    } else {
      this.orientation = this._orientation;
    }
  }
  applyOptions(options) {
    if (options.orientation !== void 0) {
      this.orientation = options.orientation;
    }
    if (options.spacing !== void 0) {
      this.spacing = options.spacing;
    }
    if (options.padding !== void 0) {
      this.padding = options.padding;
    }
    if (options.margin !== void 0) {
      this.setMargin(options.margin);
    }
    if (options.width !== void 0) {
      this.setWidth(options.width);
    }
    if (options.height !== void 0) {
      this.setHeight(options.height);
    }
    if (options.backgroundColor !== void 0) {
      this.backgroundColor = options.backgroundColor;
    }
    if (options.horizontalAlignment !== void 0) {
      this.horizontalAlignment = options.horizontalAlignment;
    }
    if (options.verticalAlignment !== void 0) {
      this.verticalAlignment = options.verticalAlignment;
    }
  }
  // Propriedade orientation
  get orientation() {
    return this._orientation;
  }
  set orientation(value) {
    this._orientation = value;
    this.element.style.flexDirection = value === "vertical" ? "column" : "row";
    this.updateSpacing();
  }
  // Propriedade spacing
  get spacing() {
    return this._spacing;
  }
  set spacing(value) {
    this.setSpacing(value);
  }
  setSpacing(value) {
    this._spacing = value;
    this.updateSpacing();
    return this;
  }
  updateSpacing() {
    if (this._spacing > 0) {
      this.element.style.gap = `${this._spacing}px`;
    } else {
      this.element.style.gap = "0";
    }
  }
  // Propriedades de padding e margin
  get padding() {
    return this.element.style.padding;
  }
  set padding(value) {
    this.setPadding(value);
  }
  setPadding(value) {
    const paddingValue = typeof value === "number" ? `${value}px` : value;
    this.element.style.padding = paddingValue;
    return this;
  }
  get margin() {
    return this.element.style.margin;
  }
  set margin(value) {
    this.setMargin(value);
  }
  setMargin(value) {
    const marginValue = typeof value === "number" ? `${value}px` : value;
    this.element.style.margin = marginValue;
    return this;
  }
  // Propriedades de tamanho
  get width() {
    return this.element.style.width;
  }
  set width(value) {
    this.setWidth(value);
  }
  setWidth(value) {
    const widthValue = typeof value === "number" ? `${value}px` : value;
    this.element.style.width = widthValue;
    return this;
  }
  get height() {
    return this.element.style.height;
  }
  set height(value) {
    this.setHeight(value);
  }
  setHeight(value) {
    const heightValue = typeof value === "number" ? `${value}px` : value;
    this.element.style.height = heightValue;
    return this;
  }
  // Propriedade backgroundColor
  get backgroundColor() {
    return this.element.style.backgroundColor;
  }
  set backgroundColor(color) {
    this.element.style.backgroundColor = color;
  }
  // Alinhamentos
  set horizontalAlignment(alignment) {
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
  set verticalAlignment(alignment) {
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
  addChild(child) {
    this._children.push(child);
    this.element.appendChild(child.element);
    return this;
  }
  removeChild(child) {
    const index = this._children.indexOf(child);
    if (index > -1) {
      this._children.splice(index, 1);
      this.element.removeChild(child.element);
    }
    return this;
  }
  removeChildAt(index) {
    if (index >= 0 && index < this._children.length) {
      const child = this._children[index];
      this._children.splice(index, 1);
      this.element.removeChild(child.element);
    }
    return this;
  }
  getChildAt(index) {
    return this._children[index];
  }
  get childrenCount() {
    return this._children.length;
  }
  clear() {
    this._children.forEach((child) => {
      this.element.removeChild(child.element);
    });
    this._children = [];
    return this;
  }
  // Método de conveniência para configuração em cadeia
  configure(callback) {
    callback(this);
    return this;
  }
};

// core/web/Label.ts
var Label = class extends Component {
  constructor(text) {
    super("span");
    this.text = text;
  }
  get text() {
    return this.element.textContent || "";
  }
  set text(value) {
    this.element.textContent = value;
  }
};

// core/web/Button.ts
var Button = class extends Component {
  _text = "";
  _textWrap = false;
  _isEnabled = true;
  _isUserInteractionEnabled = true;
  constructor(text) {
    super("button");
    this.element.classList.add("ns-button");
    if (text) {
      this.text = text;
    }
  }
  applyDefaultStyles() {
    if (this.element.className === "ns-button") {
      console.log("[Button] Aplicando estilos padr\xE3o", this.element);
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
      style.display = "inline-block";
      style.width = "auto";
      style.height = "auto";
      style.minWidth = "64px";
      style.transition = "all 0.2s ease";
    }
  }
  // ---- Propriedades (API NS) ----
  get text() {
    return this._text;
  }
  set text(value) {
    this._text = value;
    this.element.textContent = value ?? "";
  }
  get textWrap() {
    return this._textWrap;
  }
  set textWrap(value) {
    this._textWrap = value;
    this.element.style.whiteSpace = value ? "normal" : "nowrap";
    this.element.style.wordWrap = value ? "break-word" : "normal";
  }
  get isEnabled() {
    return this._isEnabled;
  }
  set isEnabled(value) {
    this._isEnabled = value;
    const buttonElement = this.element;
    buttonElement.disabled = !value;
    if (value) {
      this.element.style.opacity = "1";
      this.element.style.cursor = "pointer";
    } else {
      this.element.style.opacity = "0.6";
      this.element.style.cursor = "not-allowed";
    }
  }
  get isUserInteractionEnabled() {
    return this._isUserInteractionEnabled;
  }
  set isUserInteractionEnabled(value) {
    this._isUserInteractionEnabled = value;
    this.element.style.pointerEvents = value ? "auto" : "none";
  }
  // ---- Métodos de conveniência para estilização ----
  setBackgroundColor(color) {
    this.style.backgroundColor = color;
    return this;
  }
  setTextColor(color) {
    this.element.style.color = color;
    return this;
  }
  setBorderRadius(radius) {
    this.element.style.borderRadius = typeof radius === "number" ? `${radius}px` : radius;
    return this;
  }
  setPadding(padding) {
    this.element.style.padding = typeof padding === "number" ? `${padding}px` : padding;
    return this;
  }
  setFontSize(size) {
    this.element.style.fontSize = typeof size === "number" ? `${size}px` : size;
    return this;
  }
  // ---- Eventos (API NS) ----
  on(eventNames, callback, thisArg) {
    const events = eventNames.split(",").map((e) => e.trim());
    events.forEach((eventName) => {
      let htmlEvent = eventName;
      if (eventName === "tap") {
        htmlEvent = "click";
      }
      const wrappedCallback = (event) => {
        if (this._isEnabled && this._isUserInteractionEnabled) {
          const eventData = {
            eventName,
            object: this,
            originalEvent: event
          };
          callback.call(thisArg || this, eventData);
        }
      };
      this.element.addEventListener(htmlEvent, wrappedCallback);
    });
  }
  off(eventNames, callback) {
    const events = eventNames.split(",").map((e) => e.trim());
    events.forEach((eventName) => {
      let htmlEvent = eventName;
      if (eventName === "tap") {
        htmlEvent = "click";
      }
      if (callback) {
        this.element.removeEventListener(htmlEvent, callback);
      }
    });
  }
  // ---- Métodos (API NS) ----
  tap() {
    if (this._isEnabled && this._isUserInteractionEnabled) {
      const clickEvent = new Event("click", { bubbles: true });
      this.element.dispatchEvent(clickEvent);
    }
  }
  focus() {
    this.element.focus();
  }
  blur() {
    this.element.blur();
  }
  get nativeView() {
    this.applyDefaultStyles();
    return this.element;
  }
};

// core/web/Slider.ts
var Slider = class extends Component {
  _minValue = 0;
  _maxValue = 100;
  _value = 0;
  _step = 1;
  _onValueChange;
  constructor(options) {
    super("input");
    const inputElement = this.element;
    inputElement.setAttribute("type", "range");
    inputElement.setAttribute("min", "0");
    inputElement.setAttribute("max", "100");
    inputElement.setAttribute("step", "1");
    inputElement.value = "0";
    if (options) {
      if (options.minValue !== void 0) this.minValue = options.minValue;
      if (options.maxValue !== void 0) this.maxValue = options.maxValue;
      if (options.step !== void 0) this.step = options.step;
      if (options.value !== void 0) {
        console.log("\u{1F527} Setting initial value to:", options.value);
        this.value = options.value;
      }
      if (options.width !== void 0) this.style.width = options.width;
    }
    inputElement.addEventListener("input", () => {
      this._value = Number(inputElement.value);
      this.emit("valueChange");
    });
    this.style.width = "100%";
    this.style.cursor = "pointer";
  }
  get minValue() {
    return this._minValue;
  }
  set minValue(value) {
    this._minValue = value;
    this.element.setAttribute("min", String(value));
  }
  get maxValue() {
    return this._maxValue;
  }
  set maxValue(value) {
    this._maxValue = value;
    this.element.setAttribute("max", String(value));
  }
  get value() {
    return this._value;
  }
  set value(val) {
    ;
    this._value = val;
    this.element.value = String(val);
  }
  get step() {
    return this._step;
  }
  set step(val) {
    this._step = val;
    this.element.setAttribute("step", String(val));
  }
  on(eventName, callback) {
    if (eventName === "valueChange") {
      this._onValueChange = callback;
    }
  }
  emit(eventName) {
    if (eventName === "valueChange" && this._onValueChange) {
      const args = { object: { value: this._value } };
      this._onValueChange(args);
    }
  }
};

// core/web/Video.ts
var Video = class extends Component {
  _src = "";
  _autoplay = false;
  _controls = true;
  _loop = false;
  _muted = false;
  _width = "auto";
  _height = "auto";
  constructor(src = "") {
    super("video");
    console.log("[Video] Elemento <video> criado", this.element);
    this.src = src;
    this.setStyle("display", "block");
  }
  // ✅ Fonte do vídeo
  get src() {
    return this._src;
  }
  set src(value) {
    this._src = value;
    this.element.src = value;
    console.log("[Video] src definido:", value);
  }
  // ✅ autoplay
  get autoplay() {
    return this._autoplay;
  }
  set autoplay(value) {
    this._autoplay = value;
    this.element.autoplay = value;
    console.log("[Video] autoplay:", value);
  }
  // ✅ controles
  get controls() {
    return this._controls;
  }
  set controls(value) {
    this._controls = value;
    this.element.controls = value;
    console.log("[Video] controls:", value);
  }
  // ✅ loop
  get loop() {
    return this._loop;
  }
  set loop(value) {
    this._loop = value;
    this.element.loop = value;
    console.log("[Video] loop:", value);
  }
  // ✅ muted
  get muted() {
    return this._muted;
  }
  set muted(value) {
    this._muted = value;
    this.element.muted = value;
    console.log("[Video] muted:", value);
  }
  // ✅ Largura
  get width() {
    return this._width;
  }
  set width(value) {
    this._width = value;
    this.setStyle("width", typeof value === "number" ? `${value}px` : value);
    console.log("[Video] width definido:", value);
  }
  // ✅ Altura
  get height() {
    return this._height;
  }
  set height(value) {
    this._height = value;
    this.setStyle("height", typeof value === "number" ? `${value}px` : value);
    console.log("[Video] height definido:", value);
  }
  // ✅ Métodos estilo NativeScript
  play() {
    console.log("[Video] play chamado");
    this.element.play();
    return this;
  }
  pause() {
    console.log("[Video] pause chamado");
    this.element.pause();
    return this;
  }
};

// core/web/AbsoluteLayout.ts
var AbsoluteLayout = class extends Component {
  constructor() {
    super("div");
    this.element.style.position = "relative";
    this.element.style.overflow = "hidden";
    this.element.style.width = "1280px";
    this.element.style.height = "720px";
    console.log("[AbsoluteLayout] construtor: width inicial =", this.element.style.width, "height inicial =", this.element.style.height);
  }
  // ---- Métodos estáticos para posicionar filhos ----
  static setLeft(child, value) {
    const el = child instanceof HTMLElement ? child : child.element;
    el.style.left = value;
  }
  static setTop(child, value) {
    const el = child instanceof HTMLElement ? child : child.element;
    el.style.top = value;
  }
  // ---- Manipulação de filhos ----
  addChild(child) {
    const el = child instanceof HTMLElement ? child : child.element;
    el.style.position = "absolute";
    this.element.appendChild(el);
  }
  // ---- Setters estilo NativeScript ----
  set width(value) {
    this.element.style.width = typeof value === "number" ? `${value}px` : value;
    console.log("[AbsoluteLayout] setter width:", value, "->", this.element.style.width);
  }
  set height(value) {
    this.element.style.height = typeof value === "number" ? `${value}px` : value;
    console.log("[AbsoluteLayout] setter height:", value, "->", this.element.style.height);
  }
  set backgroundColor(value) {
    this.element.style.backgroundColor = value;
  }
};
export {
  AbsoluteLayout,
  Application,
  Button,
  Label,
  Page,
  Slider,
  StackLayout,
  Video
};
//# sourceMappingURL=index.js.map
