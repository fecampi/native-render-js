import { DisplayObject } from "./DisplayObject";

export class AbsoluteLayout extends DisplayObject {
  constructor() {
    super("div");
    this.el.style.position = "relative";
  }

  /**
   * Define a posição left de um componente
   */
  static setLeft(child: DisplayObject, value: string) {
    child.el.style.position = "absolute";
    child.el.style.left = value;
  }

  /**
   * Define a posição top de um componente
   */
  static setTop(child: DisplayObject, value: string) {
    child.el.style.position = "absolute";
    child.el.style.top = value;
  }

  /**
   * Define a posição right de um componente
   */
  static setRight(child: DisplayObject, value: string) {
    child.el.style.position = "absolute";
    child.el.style.right = value;
  }

  /**
   * Define a posição bottom de um componente
   */
  static setBottom(child: DisplayObject, value: string) {
    child.el.style.position = "absolute";
    child.el.style.bottom = value;
  }
}
