import { EventHandler } from "../base/baseBehaviour/EventHandler";


export const OnMouseMove = new EventHandler();
window.addEventListener('mousemove', (e) => OnMouseMove.invoke(e));
