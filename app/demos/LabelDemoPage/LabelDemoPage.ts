import { Page, Button, Label, StackLayout, Color } from "@native-web-js/core";
import { Frame } from "@native-web-js/core/ui/frame";

export class LabelExamplePage {
  create(): Page {
    const page = new Page();
    const layout = new StackLayout();
    layout.style.padding = "20";
    layout.style.backgroundColor = new Color("#e3f2fd");

    const title = new Label();
    title.text = "Exemplo: Label";
    title.style.fontSize = 24;
    title.style.fontWeight = "bold";
    title.style.color = new Color("#1976D2");
    title.style.marginBottom = 20;
    title.style.textAlignment = "center";

    const label1 = new Label();
    label1.text = "Este é um Label simples.";
    label1.style.fontSize = 16;
    label1.style.marginBottom = 10;

    const label2 = new Label();
    label2.text = "Label com cor personalizada.";
    label2.style.fontSize = 16;
    label2.style.color = new Color("#FF5722");
    label2.style.marginBottom = 10;

    const label3 = new Label();
    label3.text = "Label alinhado à direita.";
    label3.style.fontSize = 16;
    label3.style.textAlignment = "right";
    label3.style.marginBottom = 30;

    const btnBack = new Button();
    btnBack.text = "← Voltar ao Menu";
    btnBack.style.backgroundColor = new Color("#2196F3");
    btnBack.style.color = new Color("white");
    btnBack.style.fontSize = 16;
    btnBack.style.padding = 15;
    btnBack.on("tap", () => Frame.topmost()?.goBack());

    layout.addChild(title);
    layout.addChild(label1);
    layout.addChild(label2);
    layout.addChild(label3);
    layout.addChild(btnBack);

    page.content = layout;
    return page;
  }
}
