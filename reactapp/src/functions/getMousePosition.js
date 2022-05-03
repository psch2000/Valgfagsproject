import { Vector2d } from "../base/baseStructor/Vector2d";
import { OnMouseMove } from "../events/OnMouseMove";


const mousePosition = new Vector2d(0, 0);


const setMousePosition = (e) => {
    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;
}

export const getMousePosition = () => mousePosition;


OnMouseMove.addListener(setMousePosition);
