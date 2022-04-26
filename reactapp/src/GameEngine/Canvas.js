


export class Canvas {

    #canvasHTML;
    #canvasStyle;
    #context;
        
    constructor(x, y, width, height){
        this.#canvasHTML =this.#makeCanvas();
        this.#canvasStyle = this.#getCanvasStyle();
        this.#setCanvas({x,y, width, height});
        this.#context = this.#canvasHTML.getContext('2d');
        this.#context.imageSmoothingEnabled = false;
        // this.#context.imageSmoothingQuality = flase;
    }

    #makeCanvas(){
        var temp = document.createElement("canvas");
        temp.style.position = 'absolute';
        temp.style.backgroundColor = 'lightBlue';
        document.body.append(temp);

        console.log("here");

        return temp;
    }

    #getCanvasStyle(){
        return this.#canvasHTML.style;
    }

    #setCanvas(rect){
       var {x,y, width, height} = rect;

       console.log(rect);
        this.setX(x);
        this.setY(y);
        this.setWidth(width);
        this.setHeight(height);
    }

    getX = () => this.#canvasStyle.left;
    getY = () => this.#canvasStyle.top;
    getWidth = () => this.#canvasHTML.width;
    getHeight = () => this.#canvasHTML.height;

    setX = (value) => this.#canvasStyle.left = `${value}px`;
    setY = (value) => this.#canvasStyle.top = `${value}px`;
    setWidth = (value) => {
        this.#canvasHTML.width = value;
        this.#canvasStyle.width = `${value}px`;
    }
    setHeight = (value) => {
        console.log(value);
        this.#canvasHTML.height = value;
        this.#canvasStyle.height = `${value}px`;
    }


    getContext = () => this.#context;
    clear(){
        var canvas = this.#canvasHTML;
        this.#context.clearRect(0, 0, canvas.width, canvas.height);
    }
    
}