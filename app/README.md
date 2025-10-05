root (StackLayout)
└── absLayout (AbsoluteLayout)   ← Player principal
    ├── video (Video)
    ├── centerPlayBtn (Button ▶/❚❚) [botão de play central estilo YouTube]
    ├── settingsMenu (StackLayout) [menu lateral de configurações]
    │   ├── closeBtn (Text "✕")
    │   ├── legendTitle (Text "Legenda")
    │   ├── legendItem (StackLayout) → ✔ + "Desativada"
    │   ├── audioTitle (Text "Áudio")
    │   └── audioItem (StackLayout) → ✔ + "Português"
    └── controlsOverlay (StackLayout) [overlay dos controles, auto-hide]
        └── controlsContainer (StackLayout)
            ├── progressBarContainer (AbsoluteLayout)
            │   ├── progressTrack (StackLayout)  [trilho cinza]
            │   ├── progressFill (StackLayout)   [barra branca]
            │   ├── progressThumb (StackLayout)  [círculo]
            │   └── progressSlider (Slider)      [slider invisível sobreposto]
            └── controlsBar (StackLayout)
                ├── leftControlsGroup (StackLayout)
                │   ├── playPauseBtn (Button ▶/❚❚)
                │   └── timeContainer (StackLayout) → current/duration
                └── controlsGroup (StackLayout)
                    ├── volumeBtn (Button 🔊)
                    ├── volumeSlider (Slider) [inicialmente oculto]
                    ├── settingsBtn (Button ⚙)
                    └── fullscreenBtn (Button ⛶)
