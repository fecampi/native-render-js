import { BaseStyle, Color } from './base-style';

export class TextFieldStyle extends BaseStyle {
  constructor(element: HTMLElement) {
    super(element);
  }

  // --- Estilos específicos do TextField / TextView ---
  set placeholderColor(value: Color) {
    // HTML não tem placeholder-color para div, mas para <input> podemos simular
    if (this.element instanceof HTMLInputElement || this.element instanceof HTMLTextAreaElement) {
      this.element.setAttribute('placeholder', this.element.getAttribute('placeholder') || '');
      // Estilo visual via CSS customProperty
      this.element.style.setProperty('--placeholder-color', value);
    }
  }

  set letterSpacing(value: string | number) {
    this.element.style.letterSpacing = typeof value === 'number' ? `${value}px` : value;
  }

  set lineHeight(value: string | number) {
    this.element.style.lineHeight = typeof value === 'number' ? `${value}px` : value;
  }

  set textDecoration(value: string) {
    this.element.style.textDecoration = value;
  }

  set textTransform(value: "none" | "capitalize" | "uppercase" | "lowercase") {
    this.element.style.textTransform = value;
  }

  set textShadow(value: string) {
    this.element.style.textShadow = value;
  }
}
