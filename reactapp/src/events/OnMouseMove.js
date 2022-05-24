import { EventHandler } from "../base/baseBehaviour/EventHandler";

// Defines an on move mouse event and invokes it if the mouse is moving
export const OnMouseMove = new EventHandler();
window.addEventListener('mousemove', (e) => OnMouseMove.invoke(e));