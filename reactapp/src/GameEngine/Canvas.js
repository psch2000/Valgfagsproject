

export class Canvas {

    #canvasHTML;
    #canvasStyle;
    #context;
        
    constructor(x, y, size){
        this.#canvasHTML =this.#makeCanvas();
        this.#canvasStyle = this.#getCanvasStyle();
        this.#setCanvas({x,y, size});
        this.#context = this.#canvasHTML.getContext('2d');
    }

    #makeCanvas(){
        var temp = document.createElement("canvas");
        temp.style.position = 'absolute';
        temp.style.backgroundColor = 'lightBlue';
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

    getX = () => this.#canvasStyle.left;
    getY = () => this.#canvasStyle.top;
    getWidth = () => this.#canvasStyle.width;
    getWidth = () => this.#canvasStyle.height;

    setX = (value) => this.#canvasStyle.left = `${value}px`;
    setY = (value) => this.#canvasStyle.top = `${value}px`;
    setSize = (size) => {
        this.#canvasStyle.width = `${size * 2}px`
        this.#canvasStyle.height = `${size}px`
    }

    getContext = () => this.#context;
    clear(){
        var canvas = this.#canvasHTML;
        this.#context.clearRect(0, 0, canvas.width, canvas.height);
    }
    
}