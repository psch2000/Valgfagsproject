import { Collider } from "./Collider";

export class CircleCollider extends Collider {
    constructor(radius, showBounds) {
        super();
        this.radius = radius;
        this.showBounds = false;
    }
    
    onDraw(ctx){
        if (this.showBounds == false) return;
        ctx.strokeStyle = 'lightgreen';
        ctx.beginPath();
        var {x, y} = this.transform.position;
        ctx.arc(x,y, this.radius, 0, 2* Math.PI);
        ctx.stroke();
    }
}