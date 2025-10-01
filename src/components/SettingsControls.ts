import { Button } from "native-render-core";

export class Settings {
  public mediaControl: any;

  constructor(mediaControl: any) {
    this.mediaControl = mediaControl;
    this.create();
  }

  create() {
    const volumeBtn = new Button("Volume");
    volumeBtn.style.backgroundColor = "rgba(0,0,0,0.6)";
    volumeBtn.style.color = "#fff";
    volumeBtn.style.borderRadius = "1.5em";
    volumeBtn.style.fontSize = "1.4rem";
    volumeBtn.style.padding = "1em 2.5em";
    this.mediaControl.bottomRegion.add(volumeBtn);
  }
}
