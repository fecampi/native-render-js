import { Page, Button, Label, StackLayout } from "@nativescript/core";
import { Frame } from "@nativescript/core/ui/frame";

export class LabelExamplePage {
  create(): Page {
    const page = new Page();
    const layout = new StackLayout();
    layout.style.padding = "20";
    layout.style.backgroundColor = "#e3f2fd";

    const title = new Label("Exemplo: Label");
    title.style.fontSize = "24";
    title.style.fontWeight = "bold";
    title.style.color = "#1976D2";
    title.style.marginBottom = "20";
    title.style.textAlignment = "center";

    const label1 = new Label("Este é um Label simples.");
    label1.style.fontSize = "16";
    label1.style.marginBottom = "10";

    const label2 = new Label("Label com cor personalizada.");
    label2.style.fontSize = "16";
    label2.style.color = "#FF5722";
    label2.style.marginBottom = "10";

    const label3 = new Label("Label alinhado à direita.");
    label3.style.fontSize = "16";
    label3.style.textAlignment = "right";
    label3.style.marginBottom = "30";

    const btnBack = new Button();
    btnBack.text = "← Voltar ao Menu";
    btnBack.style.backgroundColor = "#2196F3";
    btnBack.style.color = "white";
    btnBack.style.fontSize = "16";
    btnBack.style.padding = "15";
    btnBack.on("tap", () => Frame.topmost().goBack());

    layout.addChild(title);
    layout.addChild(label1);
    layout.addChild(label2);
    layout.addChild(label3);
    layout.addChild(btnBack);

    page.content = layout;
    return page;
  }
}
