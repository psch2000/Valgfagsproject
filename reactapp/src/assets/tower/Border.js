import { Component } from "../../base/baseStructor/Component";
import { RectangleCollider } from "../../base/baseStructor/collider/RectangleCollider";
import { Composit } from "../../base/baseStructor/Composit";
import { Vector2d } from "../../base/baseStructor/Vector2d";


export class Border extends Component{
    #rectangle;

    constructor(rectangle, color){
        super();
        this.#rectangle = rectangle;
    }

    setRect(rectangle){
        this.#rectangle = rectangle;
    }

    getRect = () => this.#rectangle;

    onStart(){
        this.parent.addComponent(this.#squareRenderer);
        this.parent.transform.position = new Vector2d(this.#rectangle.x, this.#rectangle.y);
    }

}

