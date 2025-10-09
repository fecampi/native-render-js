import { BaseStyle, Color } from "./base-style";

export class TabViewStyle extends BaseStyle {
  constructor(element: HTMLElement) {
    super(element); // BaseStyle já recebe o elemento
  }

  set tabTextColor(value: Color) {
    this.element.style.color = value; // simula HTML
  }

  set selectedTabTextColor(value: Color) {
    // aqui você poderia aplicar uma classe ou data-attribute específico
    this.element.dataset.selectedTabTextColor = value;
  }

  set tabBackgroundColor(value: Color) {
    this.element.style.backgroundColor = value;
  }

  set tabTextFontSize(value: number) {
    this.element.style.fontSize = `${value}px`;
  }

  set androidSelectedTabHighlightColor(value: Color) {
    // apenas referência, no HTML podemos usar um atributo data
    this.element.dataset.androidHighlight = value;
  }
}
