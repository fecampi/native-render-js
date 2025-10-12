export class Application {
  app: HTMLElement;

  constructor(selector: string = "#app") {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) throw new Error(`Elemento '${selector}' não encontrado.`);
    this.app = el;
  }

  mount(child: { el: HTMLElement }) {
    this.app.appendChild(child.el);
    return this;
  }
}
