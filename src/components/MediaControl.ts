import { StackLayout } from "@native-render/core";
import { TopRegion } from "./TopRegion";
import { MiddleRegion } from "./MiddleRegion";
import { BottomRegion } from "./BottomRegion";

export class MediaControl extends StackLayout {
  public topRegion: TopRegion;
  public middleRegion: MiddleRegion;
  public bottomRegion: BottomRegion;

  constructor() {
    super();
    this.orientation = "vertical";
    this.horizontalAlignment = "center";
    this.verticalAlignment = "center";
    this.spacing = 24;
    this.padding = 32;
    this.style.backgroundColor = "#111";
    this.style.borderRadius = "16px";
    this.style.width = "1280px";
    this.style.height = "720px";
    this.style.minHeight = "100vh";
    this.style.justifyContent = "center";
    this.style.alignItems = "center";

    this.topRegion = new TopRegion();
    this.middleRegion = new MiddleRegion();
    this.bottomRegion = new BottomRegion();

    this.add(this.topRegion);
    this.add(this.middleRegion);
    this.add(this.bottomRegion);
  }
}
