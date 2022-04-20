import { Component } from "../Component";


export class SquareRenderer extends Component{

    constructor(width, height){
        super();
        this.width = width;   
        this.height = height;
    }

    draw(ctx){

        // console.log(ctx);

        ctx.fillStyle = "blue";

        var x = this.transform.position.x;
        var y = this.transform.position.y;


        ctx.fillRect(x, y, this.width, this.height);
    }

   

}