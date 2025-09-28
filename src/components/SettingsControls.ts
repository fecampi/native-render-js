import { Button } from "@native-render/core";

export class Settings {
  public mediaControl: any;

  constructor(mediaControl: any) {
    this.mediaControl = mediaControl;
    this.create();
  }

  create() {
    const volumeBtn = new Button("Volume");
    volumeBtn.style.backgroundColor = "transparent";
    volumeBtn.style.color = "#fff";
    volumeBtn.style.fontSize = "22px";
    volumeBtn.style.borderRadius = "50%";
    volumeBtn.style.width = "56px";
    volumeBtn.style.height = "56px";
    volumeBtn.style.padding = "0";
    this.mediaControl.bottomRegion.add(volumeBtn);
  }
}
