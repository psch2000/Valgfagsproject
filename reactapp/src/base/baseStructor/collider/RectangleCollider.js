import { Vector2d } from "../Vector2d";
import { Collider } from "./Collider";

export class RectangleCollider extends Collider {
    constructor(width, height, showBounds = false) {
        super();
        this.width = width;
        this.height = height;
        this.showBounds = showBounds;
    }

    getLeft(){
        return this.transform.position.x;
    }

    getRight(){
        return this.transform.position.x + this.width;
    }

    getTop(){
        return this.transform.position.y;
    }

    getBottom(){
        return this.transform.position.y + this.height;
    }

    getOrigo(){

        var pos = this.transform.position;
        return new Vector2d(pos.x + this.width/2,pos.y + this.height/2);

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
