import { StackLayout, Button } from "@native-render/core";

export class ActionButtons extends StackLayout {
  public skipIntro: Button;

  constructor() {
    super();
    this.orientation = "horizontal";
    this.spacing = 16;

    this.skipIntro = new Button("Skip Intro");
    this.skipIntro.style.backgroundColor = "rgba(0,0,0,0.6)";
    this.skipIntro.style.color = "#fff";
    this.skipIntro.style.borderRadius = "24px";
    this.skipIntro.style.fontSize = "22px";
    this.skipIntro.style.padding = "16px 40px";

    this.add(this.skipIntro);
  }
}
