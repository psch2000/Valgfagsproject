import { Collider } from "./Collider";

export class CircleCollider extends Collider {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    onDraw(ctx){
        ctx.strokeStyle = 'lightgreen';
        ctx.beginPath();
        var {x, y} = this.transform.position;
        ctx.arc(x,y, this.radius, 0, 2* Math.PI);
        ctx.stroke();
    }
}