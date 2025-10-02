import {
  Application,
  Page,
  StackLayout,
  Text,
  Button,
  Slider,
  Video,
  AbsoluteLayout,
} from "../../src/index";

// Instancia o AbsoluteLayout
const absLayout = new AbsoluteLayout();
absLayout.element.style.width = "1280px";
absLayout.element.style.height = "720px";
absLayout.element.style.background = "#000";
absLayout.element.style.position = "absolute";
absLayout.element.style.left = "50%";
absLayout.element.style.top = "50%";
absLayout.element.style.transform = "translate(-50%, -50%)";

// Componente de vídeo (ocupa todo o layout)
const video = new Video();
video.src =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
video.autoplay = false;
video.controls = false;
video.style.width = "1280px";
video.style.height = "720px";
AbsoluteLayout.setLeft(video, "0");
AbsoluteLayout.setTop(video, "0");
absLayout.addChild(video);

// Barra de controles (StackLayout horizontal)
const controlsBar = new StackLayout();
controlsBar.orientation = "horizontal";
controlsBar.style.backgroundColor = "rgba(0,0,0,0.7)";
controlsBar.style.borderRadius = "1em";
controlsBar.style.padding = "1em 2em";
controlsBar.style.gap = "24px";
controlsBar.style.alignItems = "center";
controlsBar.style.width = "auto";
controlsBar.style.height = "auto";
AbsoluteLayout.setLeft(controlsBar, "50%");
AbsoluteLayout.setTop(controlsBar, "640px");
controlsBar.element.style.transform = "translateX(-50%)";

// Texto do player
const playerText = new Text("Player de Vídeo");
playerText.style.color = "#fff";
playerText.style.fontSize = "1.1rem";
controlsBar.addChild(playerText);

// Botão de play
const playButton = new Button("▶");
playButton.style.backgroundColor = "#007bff";
playButton.style.color = "#fff";
playButton.style.border = "none";
playButton.style.borderRadius = "50%";
playButton.style.width = "48px";
playButton.style.height = "48px";
playButton.style.fontSize = "1.5rem";
playButton.on("tap", () => {
  video.play();
});
controlsBar.addChild(playButton);

// Slider de volume
const volumeSlider = new Slider();
volumeSlider.minValue = 0;
volumeSlider.maxValue = 1;
volumeSlider.value = 0.5;
volumeSlider.step = 0.01;
volumeSlider.style.width = "120px";
controlsBar.addChild(volumeSlider);

// Texto do volume
const volumeText = new Text(`Vol: ${volumeSlider.value}`);
volumeText.style.color = "#fff";
controlsBar.addChild(volumeText);

// Atualiza volume do vídeo e texto
volumeSlider.on("valueChange", (val) => {
  const value = val.object.value;
  const safeValue = Math.max(0, Math.min(1, value));
  (video.element as HTMLVideoElement).volume = safeValue;
  volumeText.text = `Vol: ${safeValue.toFixed(2)}`;
});

// Adiciona a barra de controles sobre o vídeo
absLayout.addChild(controlsBar);

// Cria uma página e adiciona o AbsoluteLayout
const page = new Page();
page.content = { element: absLayout.element } as any;

// Inicializa o app corretamente
Application.run({ create: () => page });
