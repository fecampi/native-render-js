import { StackLayout } from "@native-render/core";

export class MediaControl {
  static #instance: MediaControl;
  #layout!: StackLayout;
  #created = false;
  topRegion!: StackLayout;
  middleRegion!: StackLayout;
  bottomRegion!: StackLayout;

  private constructor() {
    this.create();
  }

  static getInstance() {
    if (!MediaControl.#instance) {
      MediaControl.#instance = new MediaControl();
    }
    return MediaControl.#instance;
  }

  create() {
    if (this.#created) return;
    this.#layout = new StackLayout();
    this.#layout.orientation = "vertical";
    this.#layout.horizontalAlignment = "center";
    this.#layout.verticalAlignment = "center";
    this.#layout.spacing = 16;
    this.#layout.padding = 16;
    this.#layout.style.backgroundColor = "#111";
    this.#layout.style.justifyContent = "center";
    this.#layout.style.alignItems = "center";
    this.#layout.style.width = "100%";
    this.#layout.style.height = "100%";
    this.#layout.style.minHeight = "100%";

    // Top Region
    this.topRegion = new StackLayout();
    this.topRegion.orientation = "vertical";
    this.topRegion.horizontalAlignment = "left";
    this.topRegion.style.width = "100%";
    this.topRegion.style.height = "25%";
    this.#layout.add(this.topRegion);

    // Middle Region
    this.middleRegion = new StackLayout();
    this.middleRegion.orientation = "vertical";
    this.middleRegion.style.width = "100%";
    this.middleRegion.style.height = "50%";
    this.#layout.add(this.middleRegion);

    // Bottom Region
    this.bottomRegion = new StackLayout();
    this.bottomRegion.orientation = "horizontal";
    this.bottomRegion.style.width = "100%";
    this.bottomRegion.style.height = "25%";
    this.bottomRegion.horizontalAlignment = "left";
    this.#layout.add(this.bottomRegion);

    this.#created = true;
  }

  getStackLayout() {
    return this.#layout;
  }

  public add(child: any) {
    this.#layout.add(child);
  }
}
