import { Component } from "../../base/baseStructor/Component";
import { Game } from "../app/App";


export class Tower extends Component{

    constructor(){
        super();

    }


    onDraw(context){
        
        console.log("here");
        context.fillStyle = 'green';


        var {x, y} = Game.window.getMousePosition();

        // console.log({x , y})

        context.fillRect(x, y, 10, 10);


    }
    

}