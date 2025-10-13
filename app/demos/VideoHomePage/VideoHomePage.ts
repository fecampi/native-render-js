import {
  StackLayout,
  Label,
  Button,
  Slider,
  Video,
  AbsoluteLayout,
  Page,
} from "@native-web-js/core";
import  "./VideoDemoPage.css"

export class VideoDemoPage {
  create(): Page {
    const title = new Label();
    title.text = "Título do vídeo";
    title.className = "title";
    const page = new Page();
    const layout = new StackLayout();
    layout.className = "home-page page-layout";
    layout.backgroundColor = "#f0f2f5";

    // Dimensões do player
    const PLAYER_WIDTH = 1280;
    const PLAYER_HEIGHT = 720;

    // Componente de vídeo (filho direto do root)
    const video = new Video();
    video.src =
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    video.autoplay = false;
    video.controls = false;
    video.className = "video";
    video.width = PLAYER_WIDTH;
    video.height = PLAYER_HEIGHT;

    // Layout absoluto para os controles (mediaControl)
    const mediaControl = new AbsoluteLayout();
    mediaControl.width = PLAYER_WIDTH;
    mediaControl.height = PLAYER_HEIGHT;
    mediaControl.className = "media-control";

    // Botão de play centralizado estilo YouTube
    const centerPlayBtn = new Button("▶");
    centerPlayBtn.className = "center-play-btn";
    centerPlayBtn.element.setAttribute("draggable", "false");

    centerPlayBtn.on("tap", togglePlay);
    mediaControl.addChild(centerPlayBtn);

    // Menu mockado ocupando toda a altura
    const settingsMenu = new StackLayout();
    settingsMenu.orientation = "vertical";
    settingsMenu.className = "mock-settings-menu";

    // Botão fechar (X)
    const closeBtn = new Label("✕");
    closeBtn.className = "mock-close-btn";
    closeBtn.element.onclick = () => {
      settingsMenu.element.style.display = "none";
      if (!mediaControl.element.contains(controlsOverlay.element)) {
        mediaControl.addChild(controlsOverlay);
      }
      if (mediaControl.element.contains(settingsMenu.element)) {
        mediaControl.element.removeChild(settingsMenu.element);
      }
    };
    settingsMenu.addChild(closeBtn);

    // Legenda
    const legendTitle = new Label("Legenda");
    legendTitle.className = "mock-menu-title";
    settingsMenu.addChild(legendTitle);

    const legendItem = new StackLayout();
    legendItem.orientation = "horizontal";
    legendItem.className = "mock-menu-item";
    const legendCheck = new Label("✔");
    legendCheck.className = "mock-menu-check";
    legendItem.addChild(legendCheck);
    const legendLabel = new Label();
    legendLabel.text = "Desativada";
    legendLabel.className = "mock-menu-label";
    legendItem.addChild(legendLabel);
    settingsMenu.addChild(legendItem);

    // Áudio
    const audioTitle = new Label();
    audioTitle.text = "Áudio";
    audioTitle.className = "mock-menu-title";
    settingsMenu.addChild(audioTitle);

    const audioItem = new StackLayout();
    audioItem.orientation = "horizontal";
    audioItem.className = "mock-menu-item";
    const audioCheck = new Label();
    audioCheck.text = "✔";
    audioCheck.className = "mock-menu-check";
    audioItem.addChild(audioCheck);
    const audioLabel = new Label();
    audioLabel.text = "Português";
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

    // Container principal dos controles (barra + progresso)
    const controlsContainer = new StackLayout();
    controlsContainer.orientation = "vertical";
    controlsContainer.className = "controls-container";

    // Barra de progresso visual (fina + grossa)
    const progressBarContainer = new AbsoluteLayout();
    progressBarContainer.className = "progress-bar-container";
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
    progressTrack.element.style.background = "#f5f5f5";
    progressTrack.element.style.borderRadius = "4px";
    progressTrack.element.style.zIndex = "1";

    progressBarContainer.addChild(progressTrack);

    // Barra de progresso grossa branca
    const progressFill = new StackLayout();
    progressFill.className = "progress-fill";

    progressBarContainer.addChild(progressFill);

    // Thumb visual (círculo)
    const progressThumb = new StackLayout();
    progressThumb.className = "progress-thumb";

    progressBarContainer.addChild(progressThumb);

    // Slider transparente por cima
    progressSlider.className += " progress-slider-overlay";
    progressBarContainer.addChild(progressSlider);

    controlsContainer.addChild(progressBarContainer);

    // Barra de controles
    const controlsBar = new StackLayout();
    controlsBar.orientation = "horizontal";
    controlsBar.className = "controls-bar";
    controlsContainer.addChild(controlsBar);

    // Grupo de controles à esquerda (play + tempo)
    const leftControlsGroup = new StackLayout();
    leftControlsGroup.orientation = "horizontal";
    leftControlsGroup.className = "controls-group left-controls-group";

    const playPauseBtn = new Button();
    playPauseBtn.text = "▶";
    playPauseBtn.className = "play-pause-btn";
    playPauseBtn.element.setAttribute("draggable", "false");

    leftControlsGroup.addChild(playPauseBtn);

    const timeContainer = new StackLayout();
    timeContainer.orientation = "horizontal";
    timeContainer.className = "time-container";

    const currentTimeLabel = new Label();
    currentTimeLabel.text = "0:00";
    currentTimeLabel.className = "time-Label";
    timeContainer.addChild(currentTimeLabel);

    const sepLabel = new Label();
    sepLabel.text = "  /  ";
    sepLabel.className = "time-Label";
    timeContainer.addChild(sepLabel);

    const durationLabel = new Label();
    durationLabel.text = "00:00";
    durationLabel.className = "time-Label";
    timeContainer.addChild(durationLabel);

    leftControlsGroup.addChild(timeContainer);
    controlsBar.addChild(leftControlsGroup);

    // Botão de volume
    const volumeBtn = new Button(); // FontAwesome: volume-up
    volumeBtn.text = "\uf028";
    volumeBtn.className = "volume-btn icon-fa";
    volumeBtn.element.setAttribute("draggable", "false");
    volumeBtn.element.style.userSelect = "none";
    volumeBtn.element.style.pointerEvents = "auto";

    // Slider de volume (inicialmente oculto)
    const volumeSlider = new Slider();
    volumeSlider.minValue = 0;
    volumeSlider.maxValue = 1;
    volumeSlider.value = 1;
    volumeSlider.step = 0.01;
    volumeSlider.className = "volume-slider oculto";
    // Atualiza volume do vídeo e barra visual ao alterar o slider
    volumeSlider.on("valueChange", () => {
      const vid = video.element as HTMLVideoElement;
      vid.volume = volumeSlider.value;
      // Atualiza a largura da barra branca
      const percent = Math.round(volumeSlider.value * 100);
      (volumeSlider.element as HTMLElement).style.setProperty(
        "--progress",
        percent + "%"
      );
    });
    // Inicializa barra visual do volume
    (volumeSlider.element as HTMLElement).style.setProperty(
      "--progress",
      "100%"
    );

    // Agrupador para botões à direita
    const controlsGroup = new StackLayout();
    controlsGroup.orientation = "horizontal";
    controlsGroup.className = "controls-group";
    controlsGroup.addChild(volumeBtn);
    controlsGroup.addChild(volumeSlider);

    // Botão de configurações
    const settingsBtn = new Button(); // FontAwesome: cog
    settingsBtn.text = "\uf013";
    settingsBtn.className = "settings-btn icon-fa";
    settingsBtn.element.setAttribute("draggable", "false");
    // Botão de tela cheia
    const fullscreenBtn = new Button(); // FontAwesome: expand
    fullscreenBtn.text = "\uf065";
    fullscreenBtn.className = "fullscreen-btn icon-fa";
    fullscreenBtn.element.setAttribute("draggable", "false");
    fullscreenBtn.element.setAttribute("draggable", "false");

    controlsGroup.addChild(settingsBtn);
    controlsGroup.addChild(fullscreenBtn);
    controlsBar.addChild(controlsGroup);

    controlsOverlay.addChild(controlsContainer);
    mediaControl.addChild(controlsOverlay);

    // Estado do player
    let isPlaying = false;

    function updateCenterPlayBtn() {
      if (isPlaying) {
        centerPlayBtn.element.style.display = "none";
        playPauseBtn.element.style.display = "flex";
        // Garante que os controles estão na árvore
        if (!mediaControl.element.contains(controlsOverlay.element)) {
          mediaControl.addChild(controlsOverlay);
        }
      } else {
        centerPlayBtn.element.style.display = "flex";
        playPauseBtn.element.style.display = "none";
        // Remove os controles da árvore
        if (mediaControl.element.contains(controlsOverlay.element)) {
          mediaControl.element.removeChild(controlsOverlay.element);
        }
      }
    }

    // Formatar tempo
    function formatTime(seconds: number): string {
      const min = Math.floor(seconds / 60);
      const sec = Math.floor(seconds % 60);
      return `${min}:${sec.toString().padStart(2, "0")}`;
    }

    // Atualizar UI
    function updatePlayUI() {
      playPauseBtn.text = isPlaying ? "❚❚" : "▶";
      centerPlayBtn.text = isPlaying ? "❚❚" : "▶";
      updateCenterPlayBtn();
    }

    function updateProgressUI() {
      const vid = video.element as HTMLVideoElement;
      const cur = vid.currentTime || 0;
      const dur = vid.duration || 0;
      progressSlider.value = dur ? (cur / dur) * 100 : 0;
      currentTimeLabel.text = formatTime(cur);
      durationLabel.text = formatTime(dur);

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
      if (mediaControl.element.contains(controlsOverlay.element)) {
        mediaControl.element.removeChild(controlsOverlay.element);
      }
      if (!mediaControl.element.contains(settingsMenu.element)) {
        mediaControl.addChild(settingsMenu);
      }
      (settingsMenu.element as HTMLElement).style.display = "flex";
    }

    // Função para alternar tela cheia e ajustar tamanho do player
    function setPlayerFullscreen(isFullscreen: boolean) {
      if (isFullscreen) {
        root.width = window.innerWidth;
        root.height = window.innerHeight;
        root.element.style.width = "100vw";
        root.element.style.height = "100vh";
        mediaControl.width = window.innerWidth;
        mediaControl.height = window.innerHeight;
        mediaControl.element.style.width = "100vw";
        mediaControl.element.style.height = "100vh";
        video.element.style.width = "100vw";
        video.element.style.height = "100vh";
        fullscreenBtn.text = "\uf066"; // fa-compress
      } else {
        root.width = PLAYER_WIDTH;
        root.height = PLAYER_HEIGHT;
        root.element.style.width = PLAYER_WIDTH + "px";
        root.element.style.height = PLAYER_HEIGHT + "px";
        mediaControl.width = PLAYER_WIDTH;
        mediaControl.height = PLAYER_HEIGHT;
        mediaControl.element.style.width = PLAYER_WIDTH + "px";
        mediaControl.element.style.height = PLAYER_HEIGHT + "px";
        video.element.style.width = PLAYER_WIDTH + "px";
        video.element.style.height = PLAYER_HEIGHT + "px";
        fullscreenBtn.text= "\uf065"; // fa-expand
      }
    }

    document.addEventListener("fullscreenchange", () => {
      const isFull = !!document.fullscreenElement;
      setPlayerFullscreen(isFull);
      if (!isFull) {
        // Força reflow para garantir que o layout volte ao normal
        mediaControl.element.offsetHeight;
      }
    });

    // Eventos
    playPauseBtn.on("tap", togglePlay);
    settingsBtn.on("tap", openSettings);

    fullscreenBtn.on("tap", () => {
      const elem = root.element as HTMLElement;
      if (!document.fullscreenElement) {
        elem.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    });

    progressSlider.on("valueChange", (val: { object: { value: any; }; }) => {
      const vid = video.element as HTMLVideoElement;
      const sliderValue = val.object.value;
      // Atualiza barra visual e thumb imediatamente
      progressFill.element.style.width = sliderValue + "%";
      progressThumb.element.style.left = `calc(${sliderValue}% - 9px)`;
      if (vid.duration) {
        vid.currentTime = (sliderValue / 100) * vid.duration;
        // updateProgressUI(); // Não chame aqui, pois já atualizamos visualmente
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
    // Inicializa visibilidade do botão central
    updateCenterPlayBtn();

    // Mostra/oculta slider ao clicar no botão de volume
    let volumeSliderVisible = false;
    volumeBtn.on("tap", () => {
      volumeSliderVisible = !volumeSliderVisible;
      if (volumeSliderVisible) {
        volumeSlider.className = "volume-slider";
      } else {
        volumeSlider.className = "volume-slider oculto";
      }
    });

    // Esconde slider ao clicar fora dele
    window.addEventListener("mousedown", (e) => {
      if (
        volumeSliderVisible &&
        !volumeSlider.element.contains(e.target as Node) &&
        !volumeBtn.element.contains(e.target as Node)
      ) {
        volumeSlider.className = "volume-slider oculto";
        volumeSliderVisible = false;
      }
    });

    // Auto-hide controles
    let hideControlsTimeout: any;
    mediaControl.element?.addEventListener("mousemove", () => {
      (controlsOverlay.element as HTMLElement).style.opacity = "1";
      clearTimeout(hideControlsTimeout);
      hideControlsTimeout = setTimeout(() => {
        if (isPlaying) {
          (controlsOverlay.element as HTMLElement).style.opacity = "0";
        }
      }, 3000);
    });

    // ROOT - AbsoluteLayout para sobrepor os elementos
    const root = new AbsoluteLayout();
    root.className = "root";
    root.width = PLAYER_WIDTH;
    root.height = PLAYER_HEIGHT;
    root.backgroundColor = "#000";
    root.addChild(video);
    root.addChild(mediaControl);

    // Botão de configurações abre o menu
    settingsBtn.on("tap", openSettings);

    layout.addChild(title);
    page.addCssFile("~/demos/VideoDemoPage/VideoDemoPage.css.css");
    page.content = root;
    return page;
  }
}
