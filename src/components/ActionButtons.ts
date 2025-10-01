import { StackLayout, Button } from "native-render-core";

export class ActionButtons {
  #layout: StackLayout | undefined;
  #created = false;
  private mediaControl: any;

  constructor(mediaControl: any) {
    this.mediaControl = mediaControl;
    this.create();
  }

  create() {
    if (this.#created) return;
    const layout = new StackLayout();
    layout.orientation = "horizontal";
    layout.spacing = 16;
    layout.style.height = "60px";
    const skipIntro = new Button("Skip Intro");
    skipIntro.style.backgroundColor = "rgba(0,0,0,0.6)";
    skipIntro.style.color = "#fff";
    skipIntro.style.borderRadius = "1.5em";
    skipIntro.style.fontSize = "1.4rem";
    skipIntro.style.padding = "1em 2.5em";
    layout.add(skipIntro);

    // Novo botão: Next Episode
    const nextEpisode = new Button("Next Episode");
    nextEpisode.style.backgroundColor = "rgba(0,0,0,0.6)";
    nextEpisode.style.color = "#fff";
    nextEpisode.style.borderRadius = "1.5em";
    nextEpisode.style.fontSize = "1.4rem";
    nextEpisode.style.padding = "1em 2.5em";
    layout.add(nextEpisode);

    this.mediaControl.middleRegion.add(layout);
    this.#created = true;
  }
}
