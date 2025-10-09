import { Page, Button, Label, StackLayout } from "@nativescript/core";
import { Frame } from "@nativescript/core/ui/frame";
import type { NavigationEntry } from "@nativescript/core/ui/frame";
import {LabelExamplePage } from "../LabelDemoPage/LabelDemoPage";
import { ButtonExamplePage } from "../ButtonDemoPage/ButtonDemoPage";

export class HomePage {
  create(): Page {
    const page = new Page();
    const layout = new StackLayout();
    layout.style.padding = "20";
    layout.style.backgroundColor = "#f0f0f0";

    const title = new Label("Exemplos de Componentes");
    title.style.fontSize = "24";
    title.style.fontWeight = "bold";
    title.style.color = "#333";
    title.style.marginBottom = "20";
    title.style.textAlignment = "center";

    const subtitle = new Label("Escolha um exemplo para ver:");
    subtitle.style.fontSize = "16";
    subtitle.style.marginBottom = "30";
    subtitle.style.textAlignment = "center";

    const btnLabel = new Button();
    btnLabel.text = "Exemplo: Label";
    btnLabel.style.backgroundColor = "#2196F3";
    btnLabel.style.color = "white";
    btnLabel.style.fontSize = "16";
    btnLabel.style.padding = "15";
    btnLabel.style.marginBottom = "15";
    btnLabel.on("tap", () => {
      const entry: NavigationEntry = {
        create: () => new LabelExamplePage().create() as any,
        animated: true,
        transition: { name: "slide" },
      };
      Frame.topmost().navigate(entry);
    });

    const btnButton = new Button();
    btnButton.text = "Exemplo: Button";
    btnButton.style.backgroundColor = "#4CAF50";
    btnButton.style.color = "white";
    btnButton.style.fontSize = "16";
    btnButton.style.padding = "15";
    btnButton.on("tap", () => {
      const entry: NavigationEntry = {
        create: () => new ButtonExamplePage().create() as any,
        animated: true,
        transition: { name: "fade" },
      };
      Frame.topmost().navigate(entry);
    });

    layout.addChild(title);
    layout.addChild(subtitle);
    layout.addChild(btnLabel);
    layout.addChild(btnButton);

    page.content = layout;
    return page;
  }
}
