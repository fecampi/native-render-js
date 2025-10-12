import { DisplayObject } from "./DisplayObject";

export class Button extends DisplayObject {
  constructor(text?: string) {
    super("button");
    if (text) this.text(text);
  }

  onClick(fn: () => void) {
    this.el.addEventListener("click", fn);
    return this;
  }
}
