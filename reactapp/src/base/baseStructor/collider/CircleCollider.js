import { Collider } from "./Collider";

export class CircleCollider extends Collider {
    constructor(radius, showBounds = false) {
        super();
        this.radius = radius;
        this.showBounds = showBounds;
    }

    getLeft(){

        return this.transform.position.x - this.radius;
    }

    getRight(){
        return this.transform.position.x + this.radius;
    }

    getTop(){
        return this.transform.position.y - this.radius;
    }

    getBottom(){
        return this.transform.position.y + this.radius;
    }

    getOrigo(){
        return this.transform.position;
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