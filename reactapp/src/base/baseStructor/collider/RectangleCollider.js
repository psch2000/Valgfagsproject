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


        // console.log(this.transform.position)

        var {x, y} = this.transform.position;


        // console.log(this.name + " " + x);

        ctx.rect(x, y, this.width, this.height);

        ctx.stroke();


    }
}
