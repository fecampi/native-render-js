import { StackLayout, Button } from "@native-render/core";

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
  const skipIntro = new Button("Skip Intro");
  skipIntro.style.backgroundColor = "rgba(0,0,0,0.6)";
  skipIntro.style.color = "#fff";
  skipIntro.style.borderRadius = "24px";
  skipIntro.style.fontSize = "22px";
  skipIntro.style.padding = "16px 40px";
  layout.add(skipIntro);

  // Novo botão: Next Episode
  const nextEpisode = new Button("Next Episode");
  nextEpisode.style.backgroundColor = "rgba(0,0,0,0.6)";
  nextEpisode.style.color = "#fff";
  nextEpisode.style.borderRadius = "24px";
  nextEpisode.style.fontSize = "22px";
  nextEpisode.style.padding = "16px 40px";
  layout.add(nextEpisode);
    
    this.mediaControl.middleRegion.add(layout);
    this.#created = true;
  }
}
