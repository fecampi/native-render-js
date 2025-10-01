import { Button } from "native-render-core";

export class PlayPauseButton {
  public mediaControl: any;

  constructor(mediaControl: any) {
    this.mediaControl = mediaControl;
    this.create();
  }

  create() {
    const playPause = new Button("Play/Pause");
    playPause.style.backgroundColor = "rgba(0,0,0,0.6)";
    playPause.style.color = "#fff";
    playPause.style.borderRadius = "1.5em";
    playPause.style.fontSize = "1.4rem";
    playPause.style.padding = "1em 2.5em";
    this.mediaControl.bottomRegion.add(playPause);
  }
}
