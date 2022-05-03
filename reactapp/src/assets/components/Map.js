import { Component } from "../../base/baseStructor/Component";
import { SquareRenderer } from "./SquareRenderer";


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

    onStart(){
        this.parent.addComponent(this.#squareRenderer);
    }

    

}