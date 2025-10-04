import { Component } from "./Component";
import { focusTreeService } from "./focusTreeUtils";

export class Page extends Component {
  constructor() {
    super("div");
    this.element.classList.add("page");
  }

  set content(child: Component) {
    this.element.appendChild(child.element);
    focusTreeService.setup(child.element);
  }
}
