import { Component } from "../../base/baseStructor/Component";
import { SquareRenderer } from "./SquareRenderer";


export class Map extends Component {

    #squareRenderer;
    #rectangle;

    constructor(rectangle, color){
        super();
        this.#rectangle = rectangle;
        this.#squareRenderer = new SquareRenderer(rectangle.width, rectangle.height, color);
        this.x = rectangle.x;
        this.y = rectangle.y;
    }

    setRect(rectangle){
        this.#rectangle = rectangle;
        this.#squareRenderer.width = this.#rectangle.width;
        this.#squareRenderer.height = this.#rectangle.height;
    }

    getRect = () => this.#rectangle;

    onStart(){
        this.parent.addComponent(this.#squareRenderer);
        //this.transform.setPosition(this.x, this.y);
    }

    

}