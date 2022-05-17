import { Component } from "../../base/baseStructor/Component";
import { SquareRenderer } from "./SquareRenderer";
import { Vector2d } from "../../base/baseStructor/Vector2d";

export class Map extends Component {

    #squareRenderer;
    #rectangle;

    constructor(rectangle, color){
        super();
        this.#rectangle = rectangle;
        this.#squareRenderer = new SquareRenderer(rectangle.width, rectangle.height, color);
    }

    setRect(rectangle){
        this.#rectangle = rectangle;
        this.#squareRenderer.width = this.#rectangle.width;
        this.#squareRenderer.height = this.#rectangle.height;
    }

    getRect = () => this.#rectangle;

    onStart(){
        this.parent.addComponent(this.#squareRenderer);
        this.parent.transform.position = new Vector2d(this.#rectangle.x, this.#rectangle.y);
    }

    

}