import { StackLayout, Text } from "@native-render/core";

export class InfoLayout extends StackLayout {
  private seasonInfo: Text;
  private showTitle: Text;

  constructor() {
    super();
    this.orientation = "vertical";
    this.spacing = 4;
    this.horizontalAlignment = "left";
    this.style.width = "auto";

    this.seasonInfo = new Text("Season 6, Episode 1");
    this.seasonInfo.style.color = "#eee";
    this.seasonInfo.style.fontSize = "22px";
    this.seasonInfo.style.textAlign = "left";

    this.showTitle = new Text("The Office");
    this.showTitle.style.color = "#fff";
    this.showTitle.style.fontSize = "38px";
    this.showTitle.style.fontWeight = "bold";
    this.showTitle.style.textAlign = "left";

    this.add(this.seasonInfo);
    this.add(this.showTitle);
  }

  // Texts are now set only via constructor
}
