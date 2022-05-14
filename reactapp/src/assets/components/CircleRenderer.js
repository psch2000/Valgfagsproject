import { Component } from "../../base/baseStructor/Component";


export class CircleRenderer extends Component{

    constructor(radius, color, isDrawingOutline = false){
        super();
        this.color = color;
        this.radius = radius;
        this.isDrawingOutline = isDrawingOutline;
    }

    onDraw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        var {x, y} = this.transform.position;

        ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
        ctx.fill();

        if (this.isDrawingOutline == false) return;
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();
    }
}