# Native Render Core

Biblioteca de UI moderna inspirada em NativeScript, com conceitos de Phaser e CreateJS, focando em composição de componentes e manipulação visual declarativa em TypeScript/JavaScript.

## Características principais

- **Padrão de componentes inspirado em NativeScript** - Componentes reutilizáveis e modulares
- **Layouts flexíveis** - StackLayout (fluxo vertical/horizontal) e AbsoluteLayout (posicionamento livre)
- **Modularização explícita** - Cada componente é uma classe independente
- **API intuitiva** - Método de encadeamento (fluent API) para construção de interfaces
- **Totalmente em TypeScript** - Type-safe desde o início
- **Sem dependências externas** - Apenas HTML5 e CSS

## Instalação

Clone o repositório:

```sh
git clone https://github.com/fecampi/native-render-js.git
cd native-render-js
npm install
# ou
yarn install
```

## Uso Básico

### Importar componentes

```typescript
import {
  Application,
  StackLayout,
  AbsoluteLayout,
  Label,
  Button,
  Image,
  Video,
  Link
} from "native-render-core";
```

### Criar um layout simples

```typescript
import { StackLayout, Label, Button, Application } from "native-render-core";

const app = new Application();
const root = new StackLayout("vertical");

const title = new Label("Bem-vindo!");
title.style.fontSize = "2em";
title.style.marginBottom = "1rem";

const btn = new Button("Clique aqui");
btn.class("button-primary");
btn.onClick(() => {
  alert("Botão clicado!");
});

root.add(title);
root.add(btn);
app.mount(root);
```

### Exemplo completo com Vite + TypeScript

```typescript
import {
  Application,
  StackLayout,
  Label,
  Button,
  Image,
  Video,
  Link
} from "native-render-core";

// Inicializar aplicação
const app = new Application();
const root = new StackLayout(); // vertical por padrão
app.mount(root);

// Header com logos em layout horizontal
const header = new StackLayout("horizontal");

const viteLogoImg = new Image("/vite.svg", "Vite logo");
viteLogoImg.class("image-logo");
viteLogoImg.style.height = "6em";
viteLogoImg.style.padding = "1.5em";
viteLogoImg.onHover(() => {
  viteLogoImg.style.filter = "drop-shadow(0 0 2em #646cffaa)";
});
viteLogoImg.onHoverOut(() => {
  viteLogoImg.style.filter = "";
});

const viteLink = new Link("https://vite.dev", "_blank");
viteLink.add(viteLogoImg);
viteLink.style.color = "#646cff";

const tsLogoImg = new Image("/typescript.svg", "TypeScript logo");
tsLogoImg.class("image-logo image-logo-vanilla");
tsLogoImg.style.height = "6em";
tsLogoImg.style.padding = "1.5em";
tsLogoImg.onHover(() => {
  tsLogoImg.style.filter = "drop-shadow(0 0 2em #3178c6aa)";
});
tsLogoImg.onHoverOut(() => {
  tsLogoImg.style.filter = "";
});

const tsLink = new Link("https://www.typescriptlang.org/", "_blank");
tsLink.add(tsLogoImg);
tsLink.style.color = "#646cff";

header.add(viteLink);
header.add(tsLink);

// Título
const title = new Label("Vite + TypeScript");
title.style.fontSize = "3.2em";
title.style.lineHeight = "1.1";

// Vídeo
const video = new Video("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
video.style.marginTop = "2rem";

// Botão com contador (estado)
let count = 0;
const counterBtn = new Button("count is 0");
counterBtn.class("button-primary");
counterBtn.onClick(() => {
  count++;
  counterBtn.text(`count is ${count}`);
});

const card = new StackLayout();
card.class("card");
card.add(counterBtn);

// Footer
const footer = new StackLayout();
footer.class("text-muted");
footer.text("Click on the Vite and TypeScript logos to learn more");

// Montar tudo na raiz
root.add(header);
root.add(title);
root.add(video);
root.add(card);
root.add(footer);
```### Eventos e interação

```typescript
import { Button, Label } from "native-render-core";

const btn = new Button("Clique aqui");
btn.onClick(() => console.log("Clicado!"));
btn.onFocus(() => console.log("Focado"));
btn.onBlur(() => console.log("Saiu do foco"));

const text = new Label("Passe o mouse");
text.onHover(() => console.log("Mouse sobre"));
text.onHoverOut(() => console.log("Mouse saiu"));
```

## Componentes disponíveis

### DisplayObject (base)

Classe base para todos os componentes com métodos comuns:

**Métodos de manipulação:**
- `.class(name)` - Define classe CSS
- `.text(value)` - Define conteúdo de texto
- `.add(child)` - Adiciona componente filho
- `.mount(parent)` - Monta em elemento pai
- `.style` - Acesso direto ao estilo inline

**Métodos de eventos (padrão NativeScript):**
- `.on(eventType, callback)` - Adiciona event listener genérico
- `.onClick(callback)` - Event listener para clique
- `.onHover(callback)` - Event listener para mouseover
- `.onHoverOut(callback)` - Event listener para mouseout
- `.onFocus(callback)` - Event listener para focus
- `.onBlur(callback)` - Event listener para blur

### StackLayout

Layout que organiza filhos em linha (horizontal) ou coluna (vertical):

```typescript
const stack = new StackLayout("vertical"); // ou "horizontal"
stack.add(new Label("Item 1"));
stack.add(new Label("Item 2"));
```

### AbsoluteLayout

Layout com posicionamento absoluto (padrão NativeScript):

```typescript
const abs = new AbsoluteLayout();
const child = new Label("Posicionado");

AbsoluteLayout.setLeft(child, "10px");
AbsoluteLayout.setTop(child, "20px");

abs.add(child);
```

### Label

Texto simples (renderiza como `<span>`):

```typescript
const label = new Label("Texto aqui");
label.style.fontSize = "1.2em";
```

### Button

Botão com evento de clique:

```typescript
const btn = new Button("Clique");
btn.class("button-primary");
btn.onClick(() => console.log("Clicado!"));
```

### Image

Exibe imagens:

```typescript
const img = new Image("/path/to/image.jpg", "Alt text");
img.style.width = "200px";
img.style.height = "200px";
```

### Video

Player de vídeo HTML5:

```typescript
const video = new Video("https://example.com/video.mp4");
video.play();
video.pause();
video.setAutoplay(true);
```

### Link

Componente de link que renderiza como `<a>` com suporte a atributos padrão:

```typescript
const link = new Link("https://exemplo.com", "_blank");
link.text("Clique aqui");
link.style.color = "#646cff";
link.onHover(() => {
  link.style.color = "#535bf2";
});
```

### Application

Gerenciador principal da aplicação:

```typescript
const app = new Application();
const root = new StackLayout();
app.mount(root);
```

## Desenvolvimento

### Build da biblioteca

```sh
npm run build:lib
# Gera arquivos em dist/
```

### Executar em desenvolvimento

```sh
npm run dev
# Inicia servidor de desenvolvimento
```

## Estrutura do projeto

```
src/
├── components/        # Componentes da lib
│   ├── DisplayObject.ts
│   ├── StackLayout.ts
│   ├── AbsoluteLayout.ts
│   ├── Label.ts
│   ├── Button.ts
│   ├── Image.ts
│   ├── Video.ts
│   ├── Link.ts
│   └── Application.ts
├── index.ts          # Ponto de entrada da lib
├── main.ts           # Exemplo de uso
└── style.css         # Estilos globais
```

## Classes de Estilo

Estilos predefinidos para uso rápido:

- `.button-primary` - Botão primário
- `.image-logo` - Estilo para logos
- `.image-logo-vanilla` - Variante vanilla do logo
- `.card` - Container de card
- `.text-muted` - Texto secundário

## Exemplos

Veja o arquivo `src/main.ts` para um exemplo completo incluindo:
- Header com layouts horizontal e imagens interativas
- Links HTML5
- Player de vídeo
- Botão com contador (estado)
- Eventos hover, focus, blur com métodos simples
- Footer com texto

## Padrão de Eventos

Os componentes seguem o padrão NativeScript com métodos de eventos simples:

```typescript
component.onClick(callback)     // Clique
component.onHover(callback)     // Mouse sobre
component.onHoverOut(callback)  // Mouse sai
component.onFocus(callback)     // Elemento recebe foco
component.onBlur(callback)      // Elemento perde foco
component.on(eventType, callback) // Genérico para qualquer evento
```

## Padrão de Design

A biblioteca segue princípios de:

1. **Composição** - Componentes simples combinados
2. **Fluent API** - Métodos retornam `this` para encadeamento
3. **Isolamento** - Cada componente gerencia seu próprio estado
4. **Flexibilidade** - Estilos inline e CSS classes podem ser usados juntos
5. **NativeScript-like** - API semelhante ao padrão NativeScript adaptada para web

## Licença

MIT

## Aviso

Este projeto é experimental e em desenvolvimento ativo. APIs podem mudar.
