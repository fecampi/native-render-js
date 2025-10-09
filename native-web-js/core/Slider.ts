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
  private _onValueChange?: (args: { object: { value: number } }) => void;

  constructor(options?: SliderOptions) {
    super("input");
    const inputElement = this.element as HTMLInputElement;
    inputElement.setAttribute("type", "range");

    // Definir valores padrão no elemento HTML
    inputElement.setAttribute("min", "0");
    inputElement.setAttribute("max", "100");
    inputElement.setAttribute("step", "1");
    inputElement.value = "0";

    // Aplicar opções se fornecidas
    if (options) {
      if (options.minValue !== undefined) this.minValue = options.minValue;
      if (options.maxValue !== undefined) this.maxValue = options.maxValue;
      if (options.step !== undefined) this.step = options.step;
      if (options.value !== undefined) {
        console.log("🔧 Setting initial value to:", options.value);
        this.value = options.value;
      }
      if (options.width !== undefined) this.style.width = options.width;
    }


    // Emite valueChange em tempo real (input)
    inputElement.addEventListener("input", () => {
      this._value = Number(inputElement.value);
      this.emit("valueChange");
    });

    // Estilo padrão
    this.style.width = "100%";
    this.style.cursor = "pointer";
  }

  get minValue(): number {
    return this._minValue;
  }
  set minValue(value: number) {
    this._minValue = value;
    this.element.setAttribute("min", String(value));
  }

  get maxValue(): number {
    return this._maxValue;
  }
  set maxValue(value: number) {
    this._maxValue = value;
    this.element.setAttribute("max", String(value));
  }

  get value(): number {
    return this._value;
  }
  set value(val: number) {;
    this._value = val;
    (this.element as HTMLInputElement).value = String(val);
  }

  get step(): number {
    return this._step;
  }
  set step(val: number) {
    this._step = val;
    this.element.setAttribute("step", String(val));
  }

  on(
    eventName: "valueChange",
    callback: (args: { object: { value: number } }) => void
  ): void {
    if (eventName === "valueChange") {
      this._onValueChange = callback;
    }
  }

  private emit(eventName: string): void {
    if (eventName === "valueChange" && this._onValueChange) {
      const args = { object: { value: this._value } };
      this._onValueChange(args);
    }
  }
}
