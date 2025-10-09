export abstract class Component {
  element: HTMLElement;
  protected _customBackgroundColor: string | null = null; // Para armazenar cor personalizada

  constructor(tag: string) {
    this.element = document.createElement(tag);
  }

  // Adiciona o componente a um elemento pai
  appendTo(parent: HTMLElement) {
    parent.appendChild(this.element);
  }

  // ✅ Definir um único estilo CSS
  setStyle(property: string, value: string | number) {
    (this.element.style as any)[property] =
      typeof value === "number" ? `${value}px` : value;
    return this; // permite encadeamento
  }

  // ✅ Definir múltiplos estilos de uma vez usando chave-valor
  setStyles(styles: { [key: string]: string | number }) {
    for (const key in styles) {
      this.setStyle(key, styles[key]);
    }
    return this;
  }

  // Permite usar component.className = "minha-classe"
  get className(): string {
    return this.element.className;
  }
  set className(value: string) {
    this.element.className = value; // sobrescreve todas as classes anteriores
  }

  // ✅ style dinâmico estilo NativeScript
  get style(): any {
    const elStyle = this.element.style;
    const self = this;

    return new Proxy(elStyle, {
      get(target, prop: string) {
        return (target as any)[prop];
      },
      set(target, prop: string, value) {
        // Se estiver definindo backgroundColor, salvar como cor personalizada
        if (prop === "backgroundColor") {
          self._customBackgroundColor =
            typeof value === "number" ? `${value}px` : value;
        }

        // Converte número para px, strings ficam como estão
        (target as any)[prop] =
          typeof value === "number" ? `${value}px` : value;
        return true;
      },
    });
  }
}
