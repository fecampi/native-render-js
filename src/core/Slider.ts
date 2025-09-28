import { Component } from "./Component";

export interface SliderOptions {
  minValue?: number;
  maxValue?: number;
  value?: number;
  step?: number;
  width?: string | number;
}

export class Slider extends Component {
  private _minValue: number = 0;
  private _maxValue: number = 100;
  private _value: number = 0;
  private _step: number = 1;

  constructor(options?: SliderOptions) {
    super("input");
    this.element.setAttribute("type", "range"); // HTML range

    // Aplicar opções se fornecidas
    if (options) {
      if (options.minValue !== undefined) this.minValue = options.minValue;
      if (options.maxValue !== undefined) this.maxValue = options.maxValue;
      if (options.value !== undefined) this.value = options.value;
      if (options.step !== undefined) this.step = options.step;
      if (options.width !== undefined) this.style.width = options.width;
    }

    // Evento nativo similar ao NativeScript "valueChange"
    this.element.addEventListener("input", (event: Event) => {
      const input = event.target as HTMLInputElement;
      this._value = Number(input.value);
      if (this._onValueChange) {
        this._onValueChange(this._value);
      }
    });

    // Estilo padrão parecido com NativeScript
    this.style.width = "100%";
    this.style.cursor = "pointer";
  }

  // Getter/Setter para minValue
  get minValue(): number {
    return this._minValue;
  }
  set minValue(value: number) {
    this._minValue = value;
    this.element.setAttribute("min", String(value));
  }

  // Getter/Setter para maxValue
  get maxValue(): number {
    return this._maxValue;
  }
  set maxValue(value: number) {
    this._maxValue = value;
    this.element.setAttribute("max", String(value));
  }

  // Getter/Setter para value
  get value(): number {
    return this._value;
  }
  set value(val: number) {
    this._value = val;
    (this.element as HTMLInputElement).value = String(val);
  }

  // Getter/Setter para step
  get step(): number {
    return this._step;
  }
  set step(val: number) {
    this._step = val;
    this.element.setAttribute("step", String(val));
  }

  // Evento valueChange
  private _onValueChange?: (value: number) => void;
  on(eventName: "valueChange", callback: (value: number) => void) {
    if (eventName === "valueChange") {
      this._onValueChange = callback;
    }
  }
}
