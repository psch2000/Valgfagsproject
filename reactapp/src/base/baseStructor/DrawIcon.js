import { Component } from "../Component";

export class DrawIcon extends Component{

    constructor(){
        super();
        this.img="null"
    }

    draw(context){
        var position = this.transform.position;
        var size = this.transform.size;
        
        context.drawImage(this.img, position.x, position.y, size.width, size.height);
    }
    
}
