import { StackLayout, Button, Slider, Text } from "@native-render/core";

export class PlayerControls extends StackLayout {
  public playPause: Button;
  public progressSlider: Slider;
  public currentTime: Text;
  public remainingTime: Text;
  public volumeBtn: Button;

  constructor() {
    super();
    this.orientation = "horizontal";
    this.spacing = 16;
    this.style.alignItems = "center";

    this.playPause = new Button("Play/Pause");
    this.playPause.style.backgroundColor = "rgba(255,255,255,0.15)";
    this.playPause.style.color = "#fff";
    this.playPause.style.borderRadius = "50%";
    this.playPause.style.width = "72px";
    this.playPause.style.height = "72px";
    this.playPause.style.fontSize = "28px";
    this.playPause.style.padding = "0";

    this.progressSlider = new Slider();
    this.progressSlider.minValue = 0;
    this.progressSlider.maxValue = 3020;
    this.progressSlider.value = 1268;
    this.progressSlider.style.width = "600px";
    this.progressSlider.style.height = 10;
    this.progressSlider.style.borderRadius = 5;
    this.progressSlider.style.accentColor = "#FF0000";
    this.progressSlider.style.background = "#444";

    this.currentTime = new Text("21:08");
    this.currentTime.style.color = "#fff";
    this.currentTime.style.fontSize = "20px";

    this.remainingTime = new Text("-29:12");
    this.remainingTime.style.color = "#fff";
    this.remainingTime.style.fontSize = "20px";

    this.volumeBtn = new Button("Volume");
    this.volumeBtn.style.backgroundColor = "transparent";
    this.volumeBtn.style.color = "#fff";
    this.volumeBtn.style.fontSize = "22px";
    this.volumeBtn.style.borderRadius = "50%";
    this.volumeBtn.style.width = "56px";
    this.volumeBtn.style.height = "56px";
    this.volumeBtn.style.padding = "0";

    this.add(this.playPause);
    this.add(this.currentTime);
    this.add(this.progressSlider);
    this.add(this.remainingTime);
    this.add(this.volumeBtn);
  }
}
