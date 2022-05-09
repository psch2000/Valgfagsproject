import { Collider } from "./Collider";

export class RectangleCollider extends Collider {
    constructor(width, height, showBounds) {
        super();
        this.width = width;
        this.height = height;
        this.showBounds = showBounds;
    }


    onDraw(ctx){
        if (this.showBounds == false) return;
        ctx.strokeStyle = 'lightgreen';
        ctx.beginPath();

        var {x, y} = this.transform.position;

        ctx.rect(x, y, this.width, this.height);

        ctx.stroke();


    }
}
