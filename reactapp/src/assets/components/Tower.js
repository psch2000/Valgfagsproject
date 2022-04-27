import { Component } from "../../base/baseStructor/Component";
import { Composit } from "../../base/baseStructor/Composit";
import { Game } from "../app/App";
import { OnClickBuyButton } from "../BuyButton";
import { SquareRenderer } from "./SquareRenderer";



export class Tower extends Component{



    constructor(onClickEventHandler){
        super();

        console.log(this)
        onClickEventHandler.addListener(() => this.onClick(this));
        Game.window.onMouseDown.addListener(() => this.onClickCanvas(this));

        this.flag = false;
    }

    onClick(callBack){

        callBack.flag = true;
    }

    onClickCanvas(callBack){
        if (callBack.flag == false) return;

        var c = new Composit();
        c.addComponent(new SquareRenderer(10, 10, 'green'));
        var {x, y} = Game.window.getMousePosition();

        Game.instantiate(c, {x, y});
        callBack.flag = false;
    }

    onDraw(context){
        
        if (this.flag == false) return;
        context.fillStyle = 'green';
        var {x, y} = Game.window.getMousePosition();
        context.fillRect(x, y, 10, 10);
    }
    

}