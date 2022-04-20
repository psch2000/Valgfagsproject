import { Component } from "../Component";


export class SquareRenderer extends Component{

    constructor(width, height){
        super();
        this.width = width;   
        this.height = height;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = "blue";

        var position = this.transform.position;
        ctx.fillRect(position.x, position.y, this.width, this.height);
        ctx.stroke();

    }

   

}