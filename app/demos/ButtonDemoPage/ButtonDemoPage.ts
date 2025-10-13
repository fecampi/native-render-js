import { Page, Button, Label, StackLayout, Color } from "@native-web-js/core";
import { Frame } from "@native-web-js/core/ui/frame";

export class ButtonExamplePage {
  create(): Page {
    const page = new Page();
    const layout = new StackLayout();
    layout.style.padding = "20";
    layout.style.backgroundColor = new Color("#f1f8e9");

    const title = new Label();
    title.text = "Exemplo: Button";
    title.style.fontSize = 24;
    title.style.fontWeight = "bold";
    title.style.color = new Color("#388E3C");
    title.style.marginBottom = 20;
    title.style.textAlignment = "center";

    const button1 = new Button();
    button1.text = "Botão Padrão";
    button1.style.backgroundColor = new Color("#2196F3");
    button1.style.color = new Color("white");
    button1.style.fontSize = 16;
    button1.style.padding = "15";
    button1.style.marginBottom = 15;
    button1.on("tap", () => console.log("Botão 1 clicado"));

    const button2 = new Button();
    button2.text = "Botão Verde";
    button2.style.backgroundColor = new Color("#4CAF50");
    button2.style.color = new Color("white");
    button2.style.fontSize = 16;
    button2.style.padding = "15";
    button2.style.marginBottom = 15;
    button2.on("tap", () => console.log("Botão 2 clicado"));

    const button3 = new Button();
    button3.text = "Botão Desabilitado";
    button3.style.backgroundColor = new Color("#BDBDBD");
    button3.style.color = new Color("black");
    button3.style.fontSize = 16;
    button3.style.padding = "15";
    button3.isEnabled = false;
    button3.style.marginBottom = 30;

    const btnBack = new Button();
    btnBack.text = "← Voltar ao Menu";
    btnBack.style.backgroundColor = new Color("#FF9800");
    btnBack.style.color = new Color("white");
    btnBack.style.fontSize = 16;
    btnBack.style.padding = "15";
    btnBack.on("tap", () => Frame.topmost()?.goBack());

    layout.addChild(title);
    layout.addChild(button1);
    layout.addChild(button2);
    layout.addChild(button3);
    layout.addChild(btnBack);
    page.content = layout;
    return page;
  }
}
