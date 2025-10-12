import { Frame } from "./ui/frame";


interface RunOptions {
  create: () => any;
}

class App {
  private static _instance: App;
  private _frame: Frame;

  private constructor() {
    this._frame = new Frame(document.body);
  }

  static getInstance(): App {
    if (!App._instance) {
      App._instance = new App();
    }
    return App._instance;
  }

  run(options: RunOptions) {
    // Chama a função create() passada
    const result = options.create();
    // S, você pode armazenar o frame criado
    if (result instanceof Frame) {
      this._frame = result;
    }
    return result;
  }

  // ...outros métodos...
}

export const Application = App.getInstance();
