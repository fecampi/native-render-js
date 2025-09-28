import { App, Page } from "@native-render/core";
import { MediaControl } from "./components/MediaControl";
import { InfoLayout } from "./components/InfoLayout";
import { ActionButtons } from "./components/ActionButtons";
import { Settings} from "./components/SettingsControls";
import { PlayPauseButton } from "./components/PlayPauseButton";
import { ProgressSlider } from "./components/ProgressSlider";

const page = new Page();
App.width = 1280;
App.height = 720;
App.start(page);

const mediaControl = MediaControl.getInstance();

new InfoLayout(mediaControl);
new ActionButtons(mediaControl);
new PlayPauseButton(mediaControl);
new ProgressSlider(mediaControl);
new Settings(mediaControl);

if (mediaControl) {
  page.setContent(mediaControl.getStackLayout());
}

App.start(page);
