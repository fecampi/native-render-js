import { DisplayObject } from "./DisplayObject";

export class StackLayout extends DisplayObject {
  constructor(orientation: "vertical" | "horizontal" = "vertical") {
    super("div");
    this.el.style.display = "flex";
    this.el.style.flexDirection = orientation === "vertical" ? "column" : "row";
    this.el.style.gap = "0.5rem";
  }
}
