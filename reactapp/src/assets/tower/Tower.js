import { Component } from "../../base/baseStructor/Component";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { Time } from "../../base/Time";
import { getCanvasMousePosition } from "../app/functions/getCanvasMousePosition";
import { ProjectilePool } from "../pools/ProjectilePool";
import { MoveDirection } from "../components/MoveDirection";



export class Tower extends Component{

    constructor(towerType){
        super();
        this.towerType = towerType;
        this.time = 0;
        this.canFire = false;
    }

    onUpdate(){

        this.time += Time.deltaTime;

        if (this.time > 1){
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