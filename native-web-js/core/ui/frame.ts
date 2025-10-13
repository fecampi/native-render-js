import { Page } from "../Page";


export interface NavigationEntry {
  create(): { element: HTMLElement };
  animated?: boolean;
  transition?: { name: string };
}


export class Frame {
  private static _topmost: Frame | null = null;
  private _stack: Page[] = [];
  private _root: HTMLElement;

  constructor(root: HTMLElement = document.body) {
    this._root = root;
    Frame._topmost = this;
  }

  // Retorna o frame principal
  static topmost(): Frame | null {
    return Frame._topmost;
  }


  // Navega para uma nova página ou NavigationEntry
  navigate<T extends Page | NavigationEntry>(page: T) {
    if (this._stack.length > 0) {
      const current = this._stack[this._stack.length - 1];
      this._root.removeChild(current.element);
    }

    let pageToPush: Page;
    let element: HTMLElement;

    if (page instanceof Page) {
      pageToPush = page;
      element = page.element;
    } else if (typeof page.create === "function") {
      const created = page.create();
      element = created.element;
      pageToPush = created as Page;
    } else {
      throw new Error("Parâmetro inválido para navegação: deve ser Page ou NavigationEntry");
    }

    this._root.appendChild(element);
    this._stack.push(pageToPush);
  }

  // Volta para a página anterior
  goBack() {
    if (this._stack.length < 2) return;
    const current = this._stack.pop()!;
    this._root.removeChild(current.element);
    const previous = this._stack[this._stack.length - 1];
    this._root.appendChild(previous.element);
  }

  // Retorna a página atual
  get currentPage(): Page | undefined {
    return this._stack[this._stack.length - 1];
  }
}
