// import { Application } from "@nativescript/core";
// import { Frame } from "@nativescript/core/ui/frame";
// import type { NavigationEntry } from "@nativescript/core/ui/frame";
// import { HomePage } from "./demos/HomePage/HomePage";

// // ===== INICIALIZAÇÃO DO APP =====
// Application.run({
//   create: () => {
//     const frame = new Frame();
//     const entry: NavigationEntry = {
//       create: () => new HomePage().create() as any,
//       animated: false,
//     };
//     frame.navigate(entry);
//     return frame as any;
//   },
// });


import { Application, Page, StackLayout, Label, Button } from "@nativescript/core";
import { Frame } from "@nativescript/core/ui/frame";
import type { NavigationEntry } from "@nativescript/core/ui/frame";

function createPage(): Page {
    const page = new Page();
    const layout = new StackLayout();

    // Configurando estilo do layout
    layout.style.padding = 20;
    layout.style.spacing = 15;

    // Label
    const label = new Label("");
    label.text = "Olá, NativeScript!";

    // Setando propriedades de style individualmente
    label.style.color = "white";
    label.style.backgroundColor = "blue";
    label.style.fontSize = 24;
    label.style.textAlignment = "center";
    label.style.padding = 10;
    label.style.margin = 10;
    label.style.borderRadius = 4;

    layout.addChild(label);

    // Botão
    const button = new Button();
    button.text = "Clique aqui";

    // Setando propriedades de style individualmente
    button.style.color = "white";
    button.style.backgroundColor = "green";
    button.style.fontSize = 20;
    button.style.padding = 12;
    button.style.marginTop = 20;
    button.style.borderRadius = 8;

    button.on("tap", () => {
        label.text = "Você clicou no botão!";
    });

    layout.addChild(button);

    page.content = layout;
    return page;
}

// Exemplo simples de Frame: crie um Frame e navegue para a Page
Application.run({
  create: () => {
    const frame = new Frame();
    const entry: NavigationEntry = {
      create: () => createPage() as any,
      animated: false,
    };
    frame.navigate(entry);
    return frame as any;
  },
});
