# Native Render JS

Uma biblioteca de UI inspirada no NativeScript, feita para JavaScript/TypeScript puro e web!

## Instalação

Por enquanto, clone este repositório:
```sh
git clone <url-do-seu-repo>
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

---

> Projeto experimental inspirado no NativeScript, mas 100% web e JS puro. Sinta-se livre para contribuir!
