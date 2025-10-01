import { Component } from "./Component";

export class Text extends Component {
  constructor(text: string) {
    super("span");
    this.text = text;
  }

  get text(): string {
    return this.element.textContent || "";
  }

  set text(value: string) {
    this.element.textContent = value;
  }
}