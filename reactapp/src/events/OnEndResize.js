import { EventHandler } from "../base/baseBehaviour/EventHandler";


// Defines a resize event and invokes it if the window is resized
export const OnEndResize = new EventHandler();

var timeOut;
window.onresize = function (){
    clearTimeout(timeOut);
    timeOut = setTimeout(OnEndResize.invoke, 200);
};
