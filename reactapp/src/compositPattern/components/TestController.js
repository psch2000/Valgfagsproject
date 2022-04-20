import { getKey } from "../../events/keyCodeEvents";
import { InputHandler } from "../../handlers/InputHandler";
import { Component } from "../Component";
import { MoveDirection } from "../../handlers/Commands/MoveDirection";


export class TestController extends Component {

    constructor(){
        super();
    }


    update(){

        if(getKey('a')){
            this.transform.position.x -= 1;
        }

        if(getKey('d')){
            this.transform.position.x += 1;
        }

        if(getKey('w')){
            this.transform.position.y -= 1;
        }

        if(getKey('s')){
            this.transform.position.y += 1;
        }

        
    }

    
}