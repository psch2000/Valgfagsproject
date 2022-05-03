import { Circle } from "../../base/baseStructor/Circle";
import { Component } from "../../base/baseStructor/Component";


export class CircleCollider extends Component{

    #circle;

    constructor(radius){
        super();
        this.radius = radius;
        this.#circle = new Circle(0,0, radius);
    }


    onDraw(ctx){

        this.#circle.position = this.transform.position;
        var {x, y} = this.transform.position;

        ctx.beginPath();
        ctx.strokeStyle = 'lightgreen';
        ctx.arc(x,y, this.radius, 0, 2* Math.PI);
        ctx.stroke();

    }
}