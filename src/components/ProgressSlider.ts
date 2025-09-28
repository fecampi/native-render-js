import { Slider, StackLayout, Text } from "@native-render/core";

export class ProgressSlider {
  public mediaControl: any;

  constructor(mediaControl: any) {
    this.mediaControl = mediaControl;
    this.create();
  }

  create() {
    const layout = new StackLayout();
    layout.orientation = "horizontal";
    layout.spacing = 16;
    layout.style.alignItems = "center";

    const progressSlider = this.createSlider();
    const currentTime = this.createTimeText();
    const remainingTime = this.createTimeText(true);

    progressSlider.on("valueChange", (percent) => {
      this.updateTimes(percent, currentTime, remainingTime);
    });

    layout.add(currentTime);
    layout.add(remainingTime);
    layout.add(progressSlider);

    this.mediaControl.bottomRegion.add(layout);
  }

  createSlider() {
    const slider = new Slider();
    slider.minValue = 0;
    slider.maxValue = 100;
    slider.value = 50;
    slider.style.width = "900px";
    slider.style.height = 10;
    slider.style.borderRadius = 5;
    slider.style.accentColor = "#FF0000";
    slider.style.background = "#444";
    return slider;
  }

  createTimeText(isRemaining = false) {
    const text = new Text(isRemaining ? "-60:00" : "00:00");
    text.style.color = "#fff";
    text.style.fontSize = "20px";
    return text;
  }

  updateTimes(percent: number, currentTime: any, remainingTime: any) {
    const totalSeconds = 60 * 60; // 1 hora
    const currentSeconds = Math.round((percent / 100) * totalSeconds);
    const remainingSeconds = totalSeconds - currentSeconds;
    const pad = (n: number) => n.toString().padStart(2, "0");
    const curMin = Math.floor(currentSeconds / 60);
    const curSec = currentSeconds % 60;
    const remMin = Math.floor(remainingSeconds / 60);
    const remSec = remainingSeconds % 60;
    currentTime.text = `${pad(curMin)}:${pad(curSec)}`;
    remainingTime.text = `-${pad(remMin)}:${pad(remSec)}`;
  }
}
