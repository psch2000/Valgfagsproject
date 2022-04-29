import { Game } from "../../assets/app/App";
import { Component } from "./Component";


export class DrawGrid extends Component{


    constructor(){
        super();
        this.width = Game.window.getWidth();
        this.height = Game.window.getHeight();
        // console.log(this.height)
    }

    onDraw(context){

        // console.log(4 % 2)

        for (var row = 0; row < this.height; row++){

            for (var col = 0; col < this.width; col++){

                // console.log("here")
                if(row % 2 == 0){

                    if  (col % 2 == 0){
                        context.fillStyle= 'blue';
                        context.fillRect(col, row, 1, 1);
                    }
                  
                }

            }

        }

    }

}