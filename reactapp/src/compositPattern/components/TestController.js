import { getKey, getKeyDown } from "../../events/keyCodeEvents";
import { GameManager } from "../../managers/GameManager";
import { BulletPool } from "../../reusable/pools/BulletPool";
import { Component } from "../Component";
import { Composit } from "../Composit";
import { MoveDirection } from "./MoveDirection";
import { SquareRenderer } from "./SquareRenderer";


export class TestController extends Component {

    constructor(){
        super();
        this.pool = new BulletPool();

        this.spawns = [];
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

        if(getKeyDown('j') == true){
            this.spawnBullet();
        }

        if (getKeyDown('k'))
        {
            this.pool.releaseReuseable(this.spawns.pop());
        }

    }




    spawnBullet(){
       var instance = this.pool.acquireReuseable();
       instance.transform.position.x = this.transform.position.x;
       instance.transform.position.y = this.transform.position.y;

       this.spawns.push(instance);

    }


    
}