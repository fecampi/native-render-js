import { DisplayObject } from "./DisplayObject";

export class Video extends DisplayObject {
  constructor(src: string, autoplay: boolean = false) {
    super("video");
    const video = this.el as HTMLVideoElement;
    video.src = src;
    video.autoplay = autoplay;
    video.controls = true;
    video.style.width = "100%";
    video.style.maxWidth = "100%";
  }

  play() {
    (this.el as HTMLVideoElement).play();
    return this;
  }

  pause() {
    (this.el as HTMLVideoElement).pause();
    return this;
  }

  setAutoplay(value: boolean) {
    (this.el as HTMLVideoElement).autoplay = value;
    return this;
  }
}
