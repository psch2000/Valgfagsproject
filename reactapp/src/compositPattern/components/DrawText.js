import { Component } from "../Component";
import "../../css/index.css";



export class DrawText extends Component{

    constructor(){
        super();
        this.text="null";
    }

    draw(context){
        context.font = "30px Arial";

        var position = this.transform.position;
        
        context.fillText(this.text, position.x, position.y); 
    }

    update(){
        
    }
}