# Native Render JS

Este projeto é um estudo para a criação de uma biblioteca de UI inspirada no NativeScript, com ideias e conceitos também vindos do Phaser e do CreateJS.

O objetivo é explorar padrões modernos de composição de componentes, layout flexível e integração de controles visuais, focando em modularidade e facilidade de uso para interfaces ricas em TypeScript/JavaScript.

## Principais características
- Padrão de componentes inspirado no NativeScript
- Layouts flexíveis e responsivos
- Modularização e composição explícita
- Inspiração em engines como Phaser e CreateJS para manipulação visual

## Aviso
Este repositório é experimental e serve para aprendizado e prototipação.

---


## Instalação

Por enquanto, clone este repositório:
```sh
git clone git@github.com:fecampi/native-render-js.git
```

## Uso Básico

## Exemplos de uso

```typescript
import { Application, Page, StackLayout, Text, Button, Slider, Video }  from "native-render-core";

// Layout vertical simples
const layout = new StackLayout();
layout.orientation = "vertical";
layout.addChild(new Text("Bem-vindo!"));
layout.addChild(new Button("Clique aqui"));

// Player de vídeo com controles sobrepostos
const absLayout = new AbsoluteLayout();
absLayout.element.style.width = "1280px";
absLayout.element.style.height = "720px";
absLayout.element.style.background = "#000";

const video = new Video();
video.src = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
video.style.width = "1280px";
video.style.height = "720px";
AbsoluteLayout.setLeft(video, "0");
AbsoluteLayout.setTop(video, "0");
absLayout.addChild(video);

const controls = new StackLayout();
controls.orientation = "horizontal";
AbsoluteLayout.setLeft(controls, "50%");
AbsoluteLayout.setTop(controls, "640px");
controls.element.style.transform = "translateX(-50%)";
controls.addChild(new Button("▶"));
controls.addChild(new Slider());
absLayout.addChild(controls);

const page = new Page();
page.content = absLayout.element;
Application.run({ create: () => page });
```

## Componentes disponíveis

- StackLayout
- AbsoluteLayout
- Text
- Button
- Slider
- Video


## Licença
MIT
