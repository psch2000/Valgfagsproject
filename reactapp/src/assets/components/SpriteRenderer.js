import { Component } from "../../base/baseStructor/Component";

export class SpriteRenderer extends Component{

    constructor(imagePath){
        super();
        this.image = new Image();
        this.image.src = imagePath;
    }

    setPath(path){
        this.image.src = path;
    }

    onDraw(context){

        var {x, y} = this.transform.position;
        var {width, height} = this.image;
        context.drawImage(this.image, x - width/2, y - height/2);
    }
}