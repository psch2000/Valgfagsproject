import { Component } from "../Component";


export class DrawText extends Component{

    constructor(){
        super();
        this.text="null";
    }

    draw(context){
        context.font = "30px Arial";
        context.fillText(this.text, 50, 50); 
    }

    update(){
        
    }
}