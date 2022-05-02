import { Vector2d } from "../../../base/baseStructor/Vector2d";
import { getMousePosition } from "../../../functions/getMousePosition"
import { App } from "../App";


export const getCanvasMousePosition = () =>{

    var windowMousePos = getMousePosition();
    var canvasMousePos = {
        x: windowMousePos.x - App.windowRect.x,
        y: windowMousePos.y- App.windowRect.y,
    }

    return canvasMousePos;
}