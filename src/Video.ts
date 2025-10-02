import { Component } from "./Component";

export class Video extends Component {
  private _src: string = "";
  private _autoplay: boolean = false;
  private _controls: boolean = true;
  private _loop: boolean = false;
  private _muted: boolean = false;

  constructor(src: string = "") {
    super("video");
    console.log("[Video] Elemento <video> criado", this.element);
    this.src = src;
    this.setStyle("display", "block"); // Exemplo de estilo padrão
  }

  // ✅ Fonte do vídeo
  get src(): string {
    return this._src;
  }
  set src(value: string) {
    this._src = value;
    (this.element as HTMLVideoElement).src = value;
    console.log("[Video] src definido:", value);
  }

  // ✅ autoplay
  get autoplay(): boolean {
    return this._autoplay;
  }
  set autoplay(value: boolean) {
    this._autoplay = value;
    (this.element as HTMLVideoElement).autoplay = value;
    console.log("[Video] autoplay:", value);
  }

  // ✅ controles
  get controls(): boolean {
    return this._controls;
  }
  set controls(value: boolean) {
    this._controls = value;
    (this.element as HTMLVideoElement).controls = value;
    console.log("[Video] controls:", value);
  }

  // ✅ loop
  get loop(): boolean {
    return this._loop;
  }
  set loop(value: boolean) {
    this._loop = value;
    (this.element as HTMLVideoElement).loop = value;
    console.log("[Video] loop:", value);
  }

  // ✅ muted
  get muted(): boolean {
    return this._muted;
  }
  set muted(value: boolean) {
    this._muted = value;
    (this.element as HTMLVideoElement).muted = value;
    console.log("[Video] muted:", value);
  }

  // ✅ Métodos estilo NativeScript
  play() {
    console.log("[Video] play chamado");
    (this.element as HTMLVideoElement).play();
    return this;
  }

  pause() {
    console.log("[Video] pause chamado");
    (this.element as HTMLVideoElement).pause();
    return this;
  }
}
