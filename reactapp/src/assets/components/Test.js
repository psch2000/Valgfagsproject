import { Component } from "../../base/baseStructor/Component";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { getCanvasMousePosition } from "../app/functions/getCanvasMousePosition";
import { rotatePoint } from "../app/functions/rotatePoint";


export class Test extends Component{


    constructor(){
        super();
    }


    onDraw(ctx){
        
        var {x,y} = this.transform.position;
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(x, y);

        var targetPos = getCanvasMousePosition();

        var dir = Vector2d.subtract(targetPos, this.transform.position).normalize();


        var mag = 100;

        dir.x *= mag;
        dir.y *= mag;

        var point = new Vector2d(x + dir.x, y + dir.y);


        ctx.lineTo(point.x, point.y);
        ctx.stroke();

        ctx.closePath();

        ctx.beginPath();
        var offset = new Vector2d(-10, 0);

        var point = Vector2d.add(this.transform.position, offset);
        var radians = Math.atan2(-dir.y, -dir.x);   //radians

        var rotPoint = rotatePoint(point, this.transform.position, radians);
        ctx.arc(rotPoint.x, rotPoint.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();

        // ctx.lineTo()
    }   
}