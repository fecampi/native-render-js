import { DisplayObject } from "./DisplayObject";

export class Link extends DisplayObject {
  constructor(href: string, target: string = "_self") {
    super("a");
    const link = this.el as HTMLAnchorElement;
    link.href = href;
    link.target = target;
  }
}
