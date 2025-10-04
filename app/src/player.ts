import {
  StackLayout,
  Text,
  Button,
  Slider,
  Video,
  AbsoluteLayout,
  Application,
  Page
} from "../../src/index";

// Carrega o CSS global igual NativeScript
Application.addCssFile("../app.css");

// Dimensões do player
const PLAYER_WIDTH = 1280;
const PLAYER_HEIGHT = 720;

// Layout absoluto principal
const absLayout = new AbsoluteLayout();
absLayout.width = PLAYER_WIDTH;
absLayout.height = PLAYER_HEIGHT;
absLayout.backgroundColor = "#000";

// Componente de vídeo
const video = new Video();
video.src = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
video.autoplay = false;
video.controls = false;
video.className = "video";
absLayout.addChild(video);



// Menu mockado ocupando toda a altura
const settingsMenu = new StackLayout();
settingsMenu.orientation = "vertical";
settingsMenu.className = "mock-settings-menu";


// Botão fechar (X)
const closeBtn = new Text("✕");
closeBtn.className = "mock-close-btn";
closeBtn.element.onclick = () => {
  settingsMenu.element.style.display = "none";
  if (!absLayout.element.contains(controlsOverlay.element)) {
    absLayout.addChild(controlsOverlay);
  }
  if (absLayout.element.contains(settingsMenu.element)) {
    absLayout.element.removeChild(settingsMenu.element);
  }
};
settingsMenu.addChild(closeBtn);


// Legenda
const legendTitle = new Text("Legenda");
legendTitle.className = "mock-menu-title";
settingsMenu.addChild(legendTitle);

const legendItem = new StackLayout();
legendItem.orientation = "horizontal";
legendItem.className = "mock-menu-item";
const legendCheck = new Text("✔");
legendCheck.className = "mock-menu-check";
legendItem.addChild(legendCheck);
const legendLabel = new Text("Desativada");
legendLabel.className = "mock-menu-label";
legendItem.addChild(legendLabel);
settingsMenu.addChild(legendItem);


// Áudio
const audioTitle = new Text("Áudio");
audioTitle.className = "mock-menu-title";
settingsMenu.addChild(audioTitle);

const audioItem = new StackLayout();
audioItem.orientation = "horizontal";
audioItem.className = "mock-menu-item";
const audioCheck = new Text("✔");
audioCheck.className = "mock-menu-check";
audioItem.addChild(audioCheck);
const audioLabel = new Text("Português");
audioLabel.className = "mock-menu-label";
audioItem.addChild(audioLabel);
settingsMenu.addChild(audioItem);



// Overlay de controles
const controlsOverlay = new StackLayout();
controlsOverlay.orientation = "vertical";
controlsOverlay.className = "controls-overlay";

// Barra de progresso
const progressSlider = new Slider();
progressSlider.minValue = 0;
progressSlider.maxValue = 100;
progressSlider.value = 0;
progressSlider.step = 0.1;
progressSlider.className = "progress-slider";

// Barra de progresso visual (fina + grossa)
const progressBarContainer = new AbsoluteLayout();
progressBarContainer.element.style.width = "100%";
progressBarContainer.element.style.height = "16px";
progressBarContainer.element.style.position = "relative";
progressBarContainer.element.style.marginBottom = "8px";

// Trilho fino cinza claro
const progressTrack = new StackLayout();
progressTrack.className = "progress-track";
progressTrack.element.style.position = "absolute";
progressTrack.element.style.left = "0";
progressTrack.element.style.top = "50%";
progressTrack.element.style.transform = "translateY(-50%)";
progressTrack.element.style.width = "100%";
progressTrack.element.style.height = "3px";
progressBarContainer.addChild(progressTrack);

// Barra de progresso grossa branca
const progressFill = new StackLayout();
progressFill.className = "progress-fill";
progressFill.element.style.position = "absolute";
progressFill.element.style.left = "0";
progressFill.element.style.top = "50%";
progressFill.element.style.transform = "translateY(-50%)";
progressFill.element.style.height = "8px";
progressFill.element.style.width = "0%";
progressBarContainer.addChild(progressFill);

// Thumb visual (círculo)
const progressThumb = new StackLayout();
progressThumb.className = "progress-thumb";
progressThumb.element.style.position = "absolute";
progressThumb.element.style.top = "50%";
progressThumb.element.style.transform = "translateY(-50%)";
progressThumb.element.style.width = "18px";
progressThumb.element.style.height = "18px";
progressThumb.element.style.borderRadius = "50%";
progressThumb.element.style.background = "#fff";
progressThumb.element.style.boxShadow = "0 1px 4px rgba(0,0,0,0.15)";
progressThumb.element.style.border = "2px solid #fff";
progressThumb.element.style.zIndex = "3";
progressBarContainer.addChild(progressThumb);

// Slider transparente por cima
progressSlider.className += " progress-slider-overlay";
progressBarContainer.addChild(progressSlider);

controlsOverlay.addChild(progressBarContainer);

// Barra de controles
const controlsBar = new StackLayout();
controlsBar.orientation = "horizontal";
controlsBar.className = "controls-bar";

// Botão play/pause
const playPauseBtn = new Button("▶");
playPauseBtn.className = "play-pause-btn";
controlsBar.addChild(playPauseBtn);

// Container de tempo
const timeContainer = new StackLayout();
timeContainer.orientation = "horizontal";
timeContainer.className = "time-container";

const currentTimeText = new Text("0:01");
currentTimeText.className = "time-text";
timeContainer.addChild(currentTimeText);

const sepText = new Text("/");
sepText.className = "time-text";
timeContainer.addChild(sepText);

const durationText = new Text("11:21");
durationText.className = "time-text";
timeContainer.addChild(durationText);

controlsBar.addChild(timeContainer);

// Botão de volume
const volumeBtn = new Button("\uf028"); // FontAwesome: volume-up
volumeBtn.className = "volume-btn icon-fa";
controlsBar.addChild(volumeBtn);

// Slider de volume (inicialmente oculto)
const volumeSlider = new Slider();
volumeSlider.minValue = 0;
volumeSlider.maxValue = 1;
volumeSlider.value = 0.5;
volumeSlider.step = 0.01;
volumeSlider.className = "volume-slider";
volumeSlider.element.style.display = "none";
controlsBar.addChild(volumeSlider);

// Mostra/oculta slider ao clicar no botão de volume
let volumeSliderVisible = false;
volumeBtn.on("tap", () => {
  volumeSliderVisible = !volumeSliderVisible;
  volumeSlider.element.style.display = volumeSliderVisible ? "inline-block" : "none";
});

// Esconde slider ao clicar fora dele
window.addEventListener("mousedown", (e) => {
  if (
    volumeSliderVisible &&
    !volumeSlider.element.contains(e.target as Node) &&
    !volumeBtn.element.contains(e.target as Node)
  ) {
    volumeSlider.element.style.display = "none";
    volumeSliderVisible = false;
  }
});

// Atualiza volume do vídeo e ícone
volumeSlider.on("valueChange", (val) => {
  const value = Math.max(0, Math.min(1, val.object.value));
  (video.element as HTMLVideoElement).volume = value;
  volumeBtn.text = value === 0 ? "\uf026" : "\uf028"; // fa-volume-mute : fa-volume-up
});

// Inicializa volume
(video.element as HTMLVideoElement).volume = 0.5;

// Botão de configurações
const settingsBtn = new Button("\uf013"); // FontAwesome: cog
settingsBtn.className = "settings-btn icon-fa";
controlsBar.addChild(settingsBtn);

// Botão de tela cheia
const fullscreenBtn = new Button("\uf065"); // FontAwesome: expand
fullscreenBtn.className = "fullscreen-btn icon-fa";
controlsBar.addChild(fullscreenBtn);

controlsOverlay.addChild(controlsBar);
absLayout.addChild(controlsOverlay);

// Estado do player
let isPlaying = false;


// Formatar tempo
function formatTime(seconds: number): string {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

// Atualizar UI
function updatePlayUI() {
  playPauseBtn.text = isPlaying ? "❚❚" : "▶";
}

function updateProgressUI() {
  const vid = video.element as HTMLVideoElement;
  const cur = vid.currentTime || 0;
  const dur = vid.duration || 0;
  progressSlider.value = dur ? (cur / dur) * 100 : 0;
  currentTimeText.text = formatTime(cur);
  durationText.text = formatTime(dur);

  // Atualiza barra visual
  progressFill.element.style.width = progressSlider.value + "%";
  // Atualiza posição do thumb
  progressThumb.element.style.left = `calc(${progressSlider.value}% - 9px)`;
}

// Toggle play/pause
function togglePlay() {
  const vid = video.element as HTMLVideoElement;
  if (vid.paused) {
    vid.play();
    isPlaying = true;
  } else {
    vid.pause();
    isPlaying = false;
  }
  updatePlayUI();
}


// Função para abrir o menu de configurações
function openSettings() {
  if (absLayout.element.contains(controlsOverlay.element)) {
    absLayout.element.removeChild(controlsOverlay.element);
  }
  if (!absLayout.element.contains(settingsMenu.element)) {
    absLayout.addChild(settingsMenu);
  }
  (settingsMenu.element as HTMLElement).style.display = "flex";
}

// Eventos
playPauseBtn.on("tap", togglePlay);
settingsBtn.on("tap", openSettings);

fullscreenBtn.on("tap", () => {
  const elem = absLayout.element as HTMLElement;
  if (!document.fullscreenElement) {
    elem.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

progressSlider.on("valueChange", (val) => {
  const vid = video.element as HTMLVideoElement;
  if (vid.duration) {
    vid.currentTime = (val.object.value / 100) * vid.duration;
    updateProgressUI();
  }
});

// Eventos do vídeo
const vidEl = video.element as HTMLVideoElement;
vidEl.addEventListener("timeupdate", updateProgressUI);
vidEl.addEventListener("loadedmetadata", updateProgressUI);
vidEl.addEventListener("play", () => {
  isPlaying = true;
  updatePlayUI();
});
vidEl.addEventListener("pause", () => {
  isPlaying = false;
  updatePlayUI();
});

// Auto-hide controles
let hideControlsTimeout: any;
absLayout.element?.addEventListener("mousemove", () => {
  (controlsOverlay.element as HTMLElement).style.opacity = "1";
  clearTimeout(hideControlsTimeout);
  hideControlsTimeout = setTimeout(() => {
    if (isPlaying) {
      (controlsOverlay.element as HTMLElement).style.opacity = "0";
    }
  }, 3000);
});

// ROOT
const root = new StackLayout();
root.className = "root";
root.addChild(absLayout);



// Botão de configurações abre o menu
settingsBtn.on("tap", openSettings);

// Página
const page = new Page();
page.content = { element: root.element } as any;

// Iniciar app
Application.run({ create: () => page });
