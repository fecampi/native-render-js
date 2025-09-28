import { StackLayout } from "@native-render/core";
import { ActionButtons } from "./ActionButtons";
import { PlayerControls } from "./PlayerControls";

export class BottomRegion extends StackLayout {
  public actionButtons: ActionButtons;
  public playerControls: PlayerControls;

  constructor() {
    super();
    this.orientation = "vertical";
    this.style.width = "100%";
    this.horizontalAlignment = "center";

    this.actionButtons = new ActionButtons();
    this.playerControls = new PlayerControls();
    this.add(this.actionButtons);
    this.add(this.playerControls);
  }
}
