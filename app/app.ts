import {
  Application,
  Page,
  StackLayout,
  Button,
  Label,
} from "@nativescript/core";

function createPage() {
  const page = new Page();

  const layout = new StackLayout();
  layout.padding = 20;

  // Label inicial
  const label = new Label("oi");
  label.text = "Aguardando clique...";
  label.style.marginTop = 10;

  // Botão
  const button = new Button();
  button.text = "Clique em mim";
  button.style.fontSize = 18;
  button.style.padding = 12;
  button.style.borderRadius = 6;

  // Evento de clique
  button.on("tap", function () {
    button.text = "Clicado!";
    label.text = "Você clicou no botão ✨";
  });

  layout.addChild(button);
  layout.addChild(label);

  page.content = layout;

  return page;
}

Application.run({ create: createPage });
