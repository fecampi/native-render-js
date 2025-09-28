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

```typescript
import { App, Page, StackLayout, Text, Button } from "./src/core";

const page = new Page();
const layout = new StackLayout({ spacing: 16, padding: 24 });
const title = new Text("Hello NativeRenderJS!");
const button = new Button("Clique aqui");

button.on("tap", () => alert("Você clicou!"));
layout.add(title);
layout.add(button);
page.setContent(layout);
App.start(page);
```

## Componentes
- `App`
- `Page`
- `StackLayout` (vertical/horizontal, spacing, padding, alinhamento)
- `Text`
- `Button` (eventos, estilo, acessibilidade)

## Licença
MIT

