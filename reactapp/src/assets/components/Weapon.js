import { Component } from "../../base/baseStructor/Component";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { ProjectilePool, ProjectilePoolInstance } from "../pools/ProjectilePool";

export class Weapon extends Component{

    constructor(fireDirection, fireForce){
        super();
        console.log(fireDirection);
        this.fireDirection = new Vector2d(fireDirection.x, fireDirection.y);
        this.fireForce = fireForce;
    }


    fire(){
        var c = ProjectilePool.getInstance().acquireReuseable();
        var moveDirection = c.getComponent("MoveDirection");
        moveDirection.direction = this.fireDirection;
        moveDirection.speed = this.fireForce;
    }
}