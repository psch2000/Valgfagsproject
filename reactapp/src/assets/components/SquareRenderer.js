import { Component } from "../../base/baseStructor/Component";

// Draws a square.
export class SquareRenderer extends Component{

    constructor(width, height, color){
        super();
        this.width = width;   
        this.height = height;
        this.color = color;
    }

  

    onDraw(ctx){

        var {x ,y} = this.transform.position;

        ctx.fillStyle = this.color;
        ctx.fillRect(x, y, this.width, this.height);
    }

   

}