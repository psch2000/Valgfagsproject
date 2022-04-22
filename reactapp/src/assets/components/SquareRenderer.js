import { Component } from "../GameEngine/compositeStructor/Component";
import { Input } from "../GameEngine/input/Input";


export class SquareRenderer extends Component{

    constructor(width, height){
        super();
        this.width = width;   
        this.height = height;
    }

  

    onDraw(ctx){

        var {x ,y} = this.transform.position;

        ctx.fillStyle = "blue";
        ctx.fillRect(x, y, this.width, this.height);
        
     


    }

   

}