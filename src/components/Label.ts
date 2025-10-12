import { DisplayObject } from "./DisplayObject";

export class Label extends DisplayObject {
  constructor(text?: string) {
    super("span");
    if (text) this.text(text);
  }

  set textContent(value: string) {
    this.text(value);
  }

  get textContent(): string {
    return this.el.textContent || "";
  }
}
