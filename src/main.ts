import "./style.css";
import viteLogo from "/vite.svg";
import typescriptLogo from "./typescript.svg";
import { StackLayout, Link, Label, Image, Button, Application, Video } from "./index";

/* =========================================================
   APP
========================================================= */


const app = new Application();
const root = new StackLayout();
app.mount(root);

/** Header com logos */
const header = new StackLayout("horizontal");

const viteLogoImg = new Image(viteLogo, "Vite logo");
viteLogoImg.class("image-logo");
viteLogoImg.style.height = "6em";
viteLogoImg.style.padding = "1.5em";
viteLogoImg.style.willChange = "filter";
viteLogoImg.style.transition = "filter 300ms";
viteLogoImg.onHover(() => {
  viteLogoImg.style.filter = "drop-shadow(0 0 2em #646cffaa)";
});
viteLogoImg.onHoverOut(() => {
  viteLogoImg.style.filter = "";
});
const viteLink = new Link("https://vite.dev", "_blank");
viteLink.add(viteLogoImg);
viteLink.class("link-primary");
viteLink.onHover(() => {
  viteLink.style.borderColor = "#535bf2";
});
viteLink.onHoverOut(() => {
  viteLink.style.borderColor = "#646cff";
});

const tsLogoImg = new Image(typescriptLogo, "TypeScript logo");
tsLogoImg.class("image-logo image-logo-vanilla");
tsLogoImg.style.height = "6em";
tsLogoImg.style.padding = "1.5em";
tsLogoImg.style.willChange = "filter";
tsLogoImg.style.transition = "filter 300ms";
tsLogoImg.onHover(() => {
  tsLogoImg.style.filter = "drop-shadow(0 0 2em #3178c6aa)";
});
tsLogoImg.onHoverOut(() => {
  tsLogoImg.style.filter = "";
});
const tsLink = new Link("https://www.typescriptlang.org/", "_blank");
tsLink.add(tsLogoImg);
tsLink.class("link-primary");
tsLink.onHover(() => {
  tsLink.style.borderColor = "#3178c6";
});
tsLink.onHoverOut(() => {
  tsLink.style.borderColor = "#646cff";
});

header.add(viteLink);
header.add(tsLink);

/** Title */
const title = new Label("Vite + TypeScript");
title.style.fontSize = "3.2em";
title.style.lineHeight = "1.1";

/** Video */
const video = new Video("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
video.style.marginTop = "2rem";

/** Counter */
let count = 0;

const counterBtn = new Button("count is 0");
counterBtn.class("button-primary");
counterBtn.onFocus(() => {
  counterBtn.style.outline = "4px auto -webkit-focus-ring-color";
});
counterBtn.onBlur(() => {
  counterBtn.style.outline = "";
});
counterBtn.onClick(() => {
  count++;
  counterBtn.text(`count is ${count}`);
});

const card = new StackLayout();
card.class("card");
card.add(counterBtn);

/** Footer */
const footer = new StackLayout();
footer.class("text-muted");
footer.text("Click on the Vite and TypeScript logos to learn more");

/** Display List */
root.add(header);
root.add(title);
root.add(video);
root.add(card);
root.add(footer);
