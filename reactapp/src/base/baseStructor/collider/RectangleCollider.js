import { Collider } from "./Collider";

export class RectangleCollider extends Collider {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }


    onDraw(ctx){
        ctx.strokeStyle = 'lightgreen';
        ctx.beginPath();

        var {x, y} = this.transform.position;


        ctx.rect(x, y, this.width, this.height);

        ctx.stroke();


    }
}
