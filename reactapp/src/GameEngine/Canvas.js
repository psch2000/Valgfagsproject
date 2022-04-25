import { EventHandler } from "../base/baseBehaviour/EventHandler";


export class Canvas {

    #canvasHTML;
    #canvasStyle;
    #context;
    #mousePosition = {x: 0, y: 0};
        
    constructor(x, y, size){
        this.#canvasHTML =this.#makeCanvas();
        this.#canvasStyle = this.#getCanvasStyle();
        this.#setCanvas({x,y, size});
        this.#context = this.#canvasHTML.getContext('2d');
        this.onMouseDown = new EventHandler();
    }

    #onMouseMove(event){
        var rect = this.#canvasHTML.getBoundingClientRect();

        var scaleX = this.#canvasHTML.width / rect.width;
        var scaleY = this.#canvasHTML.height / rect.height;

        this.#mousePosition.x = (event.clientX - rect.left) * scaleX;
        this.#mousePosition.y = (event.clientY - rect.top) * scaleY;
    }

    #makeCanvas(){
        var temp = document.createElement("canvas");
        temp.style.position = 'absolute';
        temp.style.backgroundColor = 'lightBlue';
        temp.onmousemove = (event) => this.#onMouseMove(event);
        temp.onmousedown = () => this.onMouseDown.invoke();
        document.body.append(temp);
        return temp;
    }

    #getCanvasStyle(){
        return this.#canvasHTML.style;
    }

    #setCanvas(rect){
       var {x,y, size} = rect;

        this.setX(x);
        this.setY(y);
        this.setSize(size);
    }

    getMousePosition = () => this.#mousePosition;

    getX = () => this.#canvasStyle.left;
    getY = () => this.#canvasStyle.top;
    getWidth = () => this.#canvasStyle.width;
    getWidth = () => this.#canvasStyle.height;

    setX = (value) => this.#canvasStyle.left = `${value}px`;
    setY = (value) => this.#canvasStyle.top = `${value}px`;
    setSize = (size) => {
        this.#canvasStyle.width = `${size}px`
        this.#canvasStyle.height = `${size/2}px`
    }

    getContext = () => this.#context;
    clear(){
        var canvas = this.#canvasHTML;
        this.#context.clearRect(0, 0, canvas.width, canvas.height);
    }
    
}