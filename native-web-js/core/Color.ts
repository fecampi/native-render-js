export class Color {
  private _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get value(): string {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
  }

  toString(): string {
    return this._value;
  }

  valueOf(): string {
    return this._value;
  }

  // Retorna hexadecimal
  toHex(): string {
    if (this._value.startsWith("#")) return this._value;
    const rgbMatch = this._value.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (rgbMatch) {
      const r = parseInt(rgbMatch[1]).toString(16).padStart(2, "0");
      const g = parseInt(rgbMatch[2]).toString(16).padStart(2, "0");
      const b = parseInt(rgbMatch[3]).toString(16).padStart(2, "0");
      return `#${r}${g}${b}`;
    }
    return this._value;
  }

  // Retorna rgb
  toRgb(): string {
    if (this._value.startsWith("#")) {
      let hex = this._value.slice(1);
      if (hex.length === 3) hex = hex.split("").map(x => x + x).join("");
      const num = parseInt(hex, 16);
      const r = (num >> 16) & 255;
      const g = (num >> 8) & 255;
      const b = num & 255;
      return `rgb(${r}, ${g}, ${b})`;
    }
    return this._value;
  }

  // Validação simples
  isValid(): boolean {
    return /^#([0-9A-Fa-f]{3}){1,2}$/.test(this._value) ||
           /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.test(this._value) ||
           /^[a-zA-Z]+$/.test(this._value);
  }
}
