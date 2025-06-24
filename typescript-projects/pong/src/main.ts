import { initKeyboardControls } from "./input";
import { updateAndDrawState } from "./game";
import { ctx } from "./state";

const stateUpdateInterval = 20;

initKeyboardControls();
setInterval(updateAndDrawState, stateUpdateInterval);
