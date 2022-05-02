import { Component } from "../../base/baseStructor/Component";
import { Game } from "../app/App";


export class FollowMouse extends Component {

    constructor(){
        super();
    }   

    onUpdate() {
        var mousePosition = Game.window.getMousePosition();
        this.transform.position = mousePosition;
    }

    onDraw(context){
        context.fillStyle = 'red';

        var {x, y} = this.transform.position;
        context.fillRect(x, y, 1, 1);
    }
}