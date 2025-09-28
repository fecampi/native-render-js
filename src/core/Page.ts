import { Component } from "./Component";

export class Page extends Component {
  constructor() {
    super("div");
    this.element.classList.add("page");
  }

  setContent(child: Component) {
    this.element.appendChild(child.element);
  }
}