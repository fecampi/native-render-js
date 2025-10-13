import { Application } from "@native-web-js/core";
import { Frame} from "@native-web-js/core/ui/frame"
import type { NavigationEntry } from "@native-web-js/core/ui/frame";
import { HomePage } from "./demos/HomePage/HomePage";



// ===== INICIALIZAÇÃO DO APP =====
Application.run({
  create: () => {
    const frame = new Frame();
    const entry: NavigationEntry = {
      create: () => new HomePage().create() as any,
      animated: false,
    };
    frame.navigate(entry);
    return frame as any;
  },
});

