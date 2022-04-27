import { Component } from "./Component";


export class DrawText extends Component{

    constructor(){
        super();
        this.text="null";
    }

    onDraw(context){
        context.font = "10px Arial"
        context.fillStyle = "black";


        var position = this.transform.position;        
        context.fillText(this.text, 0, 4); 
    }

}