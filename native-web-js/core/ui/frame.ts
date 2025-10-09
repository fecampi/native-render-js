// Mock para Frame no ambiente web
export class Frame {
  private static _topmost: Frame | null = null;

  static get topmost(): Frame {
    if (!Frame._topmost) {
      Frame._topmost = new Frame();
    }
    return Frame._topmost;
  }

  navigate(entry: any) {
    if (entry.moduleName) {
      console.log(`Navegando para ${entry.moduleName}`);
      // Implemente carregamento dinâmico se necessário
    } else if (entry.create) {
      const page = entry.create();
      console.log('Página criada:', page);

      // Certifica que page.content é um HTMLElement
      if (page.content && page.content instanceof HTMLElement) {
        this.renderPage(page);
      } else if (page.content && page.content.element instanceof HTMLElement) {
        this.renderPage({ content: page.content.element });
      } else {
        console.warn('O page.content não é um HTMLElement válido:', page.content);
      }
    }
  }

  goBack() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      console.log('Não há página anterior');
    }
  }

  private renderPage(page: { content: HTMLElement }) {
    const body = document.body;
    body.innerHTML = '';
    body.appendChild(page.content);
  }
}

export type NavigationEntry = {
  moduleName?: string;
  create?: () => any;
  animated?: boolean;
  transition?: { name: string };
};
