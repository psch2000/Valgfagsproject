import { Component } from "../../base/baseStructor/Component";
import { getMousePosition } from "../../functions/getMousePosition";
import { getCanvasMousePosition } from "../app/functions/getCanvasMousePosition";


export class FollowCanvasMouse extends Component{

    constructor(isFollowing = true){
        super();
        this.isFollowing = isFollowing;
    }



    onUpdate(){
        if (this.isFollowing == false) return;
        var mousePos = getCanvasMousePosition();
        this.transform.setPosition(mousePos);
    }
}