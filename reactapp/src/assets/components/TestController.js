import { Component } from "../GameEngine/compositeStructor/Component";
import { Input } from "../GameEngine/input/Input";

export class TestController extends Component {

    constructor(){
        super();
        // this.pool = new BulletPool();

        this.spawns = [];
    }


    onUpdate(){
        if(Input.getKey('a')){
            this.transform.position.x -= 1;
        }

        if(Input.getKey('d')){
            this.transform.position.x += 1;
        }

        if(Input.getKey('w')){
            this.transform.position.y -= 1;
        }

        if(Input.getKey('s')){
            this.transform.position.y += 1;
        }
    }




   

    
}