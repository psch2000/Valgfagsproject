import { Component } from "../Component";


export class DrawIcon extends Component{

    constructor(){
        super();
        this.img="null"
    }

    draw(context){
        
        context.drawImage(this.img, 50, 50, 50, 50);
    }
    
}