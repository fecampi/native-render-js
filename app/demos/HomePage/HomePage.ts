import { Page, Button, Label, StackLayout } from "@nativescript/core";
import { Frame } from "@nativescript/core/ui/frame";
import type { NavigationEntry } from "@nativescript/core/ui/frame";
import { LabelExamplePage } from "../LabelDemoPage/LabelDemoPage";
import { ButtonExamplePage } from "../ButtonDemoPage/ButtonDemoPage";
import { VideoDemoPage } from "../VideoHomePage/VideoHomePage";
import "./HomePage.css";

export class HomePage {
  create(): Page {
    const page = new Page();
    const layout = new StackLayout();
    layout.className = "home-page page-layout";
    layout.backgroundColor = "#f0f2f5";
    const title = new Label();
    title.text = "Exemplos de Componentes";
    title.className = "title";

    const subtitle = new Label();
    subtitle.text = "Escolha um exemplo para ver:";
    subtitle.className = "subtitle";

    const btnLabel = new Button();
    btnLabel.text = "Exemplo: Label";
    btnLabel.className = "home-page btn-label";
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
    btnButton.className = "home-page btn-button";
    btnButton.on("tap", () => {
      const entry: NavigationEntry = {
        create: () => new ButtonExamplePage().create() as any,
        animated: true,
        transition: { name: "fade" },
      };
      Frame.topmost().navigate(entry);
    });

    const btnVideo = new Button();
    btnVideo.text = "Exemplo: Video";
    btnVideo.className = "home-page btn-video";
    btnVideo.on("tap", () => {
      const entry: NavigationEntry = {
        create: () => new VideoDemoPage().create() as any,
        animated: true,
        transition: { name: "fade" },
      };
      Frame.topmost().navigate(entry);
    });

    layout.addChild(title);
    layout.addChild(subtitle);
    layout.addChild(btnLabel);
    layout.addChild(btnButton);
    layout.addChild(btnVideo);
    page.content = layout;
    page.actionBarHidden = true;
    page.addCssFile("~/demos/HomePage/HomePage.css");
    return page;
  }
}
