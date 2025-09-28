import { Button } from "@native-render/core";

export class PlayPauseButton {
  public mediaControl: any;

  constructor(mediaControl: any) {
    this.mediaControl = mediaControl;
    this.create();
  }

  create() {
    const playPause = new Button("Play/Pause");
    playPause.style.backgroundColor = "rgba(255,255,255,0.15)";
    playPause.style.color = "#fff";
    playPause.style.borderRadius = "50%";
    playPause.style.width = "72px";
    playPause.style.height = "72px";
    playPause.style.fontSize = "28px";
    playPause.style.padding = "0";
    this.mediaControl.bottomRegion.add(playPause);
  }
}
