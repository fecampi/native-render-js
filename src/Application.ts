import { Page } from "./Page";

export class Application {
  static width?: number | string;
  static height?: number | string;

  static start(page: Page) {
    document.body.innerHTML = "";
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    document.body.style.background = "#000";
    if (Application.width)
      document.body.style.width =
        typeof Application.width === "number"
          ? `${Application.width}px`
          : Application.width;
    if (Application.height)
      document.body.style.height =
        typeof Application.height === "number"
          ? `${Application.height}px`
          : Application.height;
    page.element.style.width = Application.width
      ? typeof Application.width === "number"
        ? `${Application.width}px`
        : Application.width
      : "100vw";
    page.element.style.height = Application.height
      ? typeof Application.height === "number"
        ? `${Application.height}px`
        : Application.height
      : "100vh";
    document.body.appendChild(page.element);
  }

  static run({ create }: { create: () => Page }) {
    const page = create();
    this.start(page);
  }
}
