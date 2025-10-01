// Função para criar um objeto onde cada id de botão ns-button aponta para o id do seu pai
function getButtonParentMap(element: HTMLElement, parentId: string | null = null, result: any = {}) {
  if (element.classList.contains('ns-button') && element.id) {
    result[element.id] = parentId;
  }
  Array.from(element.children).forEach((child) => {
    getButtonParentMap(child as HTMLElement, element.id || parentId, result);
  });
  return result;
}
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
