import { DisplayObject } from "./DisplayObject";

export class Image extends DisplayObject {
  constructor(src: string, alt = "") {
    super("img");
    const img = this.el as HTMLImageElement;
    img.src = src;
    img.alt = alt;
  }
}
