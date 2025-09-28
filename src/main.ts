import { App, Page } from "@native-render/core";
import { MediaControl } from "./components/MediaControl";

const page = new Page();
App.width = 1280;
App.height = 720;
App.start(page);

const mediaControl = new MediaControl();

page.setContent(mediaControl);

App.start(page);
