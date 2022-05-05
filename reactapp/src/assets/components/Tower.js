import { Component } from "../../base/baseStructor/Component";
import { Composit } from "../../base/baseStructor/Composit";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { Input } from "../../GameEngine/input/Input";
import { Game } from "../app/App";
import { getCanvasMousePosition } from "../app/functions/getCanvasMousePosition";
import { ProjectilePool } from "../pools/ProjectilePool";
import { Enemy } from "./enemy/Enemy";
import { MoveDirection } from "./MoveDirection";
import { SquareRenderer } from "./SquareRenderer";



export class Tower extends Component{



    constructor(towerType){
        super();
        this.towerType = towerType;
        this.time = 0;
        this.canFire = false;
    }


   



    onUpdate(){
        this.time += 1;

        if (this.time == 100){
            var from = this.transform.position;
            var to = getCanvasMousePosition();

            var direction = Vector2d.subtract(to, from).normalize();
            ProjectilePool.getInstance().color = this.towerType.color;
            var instance = ProjectilePool.getInstance().acquireReuseable();
            instance.transform.position.x = this.transform.position.x;
            instance.transform.position.y = this.transform.position.y;

            instance.getComponent(MoveDirection).direction = direction;
            this.time = 0;
        }

    
    }
    

}