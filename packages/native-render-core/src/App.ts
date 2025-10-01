import { Page } from "./Page";

export class App {
  static width?: number | string;
  static height?: number | string;

  static start(page: Page) {
    document.body.innerHTML = "";
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    document.body.style.background = "#000";
    if (App.width) document.body.style.width = typeof App.width === "number" ? `${App.width}px` : App.width;
    if (App.height) document.body.style.height = typeof App.height === "number" ? `${App.height}px` : App.height;
    page.element.style.width = App.width ? (typeof App.width === "number" ? `${App.width}px` : App.width) : "100vw";
    page.element.style.height = App.height ? (typeof App.height === "number" ? `${App.height}px` : App.height) : "100vh";
    document.body.appendChild(page.element);
  }
}