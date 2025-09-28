import { StackLayout } from "@native-render/core";
import { InfoLayout } from "./InfoLayout";

export class TopRegion extends StackLayout {
  public infoLayout: InfoLayout;

  constructor() {
    super();
    this.orientation = "vertical";
    this.horizontalAlignment = "left";
    this.style.width = "100%";

    this.infoLayout = new InfoLayout();
    this.add(this.infoLayout);
  }
}
