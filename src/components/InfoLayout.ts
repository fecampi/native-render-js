import { StackLayout, Text } from "@native-render/core";

export class MediaControlPlugin {
  protected mediaControl: any;
  constructor(mediaControl: any) {
    this.mediaControl = mediaControl;
    this.create();
  }
  create() {
    // Implementação base ou abstrata
  }

}

export class InfoLayout extends MediaControlPlugin {
  constructor(mediaControl: any) {
    super(mediaControl);
  }

  create() {
    const layout =  new StackLayout()
    layout.orientation = "vertical";
    layout.spacing = 4;
    layout.horizontalAlignment = "left";
    layout.style.width = "auto";

    const seasonInfo = new Text("Season 6, Episode 1");
    seasonInfo.style.color = "#eee";
    seasonInfo.style.fontSize = "22px";
    seasonInfo.style.textAlign = "left";

    const showTitle = new Text("The Office");
    showTitle.style.color = "#fff";
    showTitle.style.fontSize = "38px";
    showTitle.style.fontWeight = "bold";
    showTitle.style.textAlign = "left";
    layout.add(seasonInfo);
    layout.add(showTitle);
    this.mediaControl.topRegion.add(layout);
  }
}
