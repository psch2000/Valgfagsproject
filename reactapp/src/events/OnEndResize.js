import { EventHandler } from "../base/baseBehaviour/EventHandler";


export const OnEndResize = new EventHandler();

var timeOut;
window.onresize = function (){
    clearTimeout(timeOut);
    timeOut = setTimeout(OnEndResize.invoke, 200);
};
