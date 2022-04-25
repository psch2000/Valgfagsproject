import { Component } from "./Component";


export class DrawText extends Component{

    constructor(){
        super();
        this.text="null";
    }

    draw(context){
        context.font = "30px Arial"
        context.fillStyle = "black";

        var position = this.transform.position;        
        context.fillText(this.text, position.x, position.y); 
    }

    update(){
        
    }
}