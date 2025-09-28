import { StackLayout } from "@native-render/core";

export class MiddleRegion extends StackLayout {
  constructor() {
    super();
    this.orientation = "vertical";
    this.style.width = "100%";
    this.style.height = "50%";
  }
}
