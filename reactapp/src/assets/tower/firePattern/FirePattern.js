import { Vector2d } from "../../../base/baseStructor/Vector2d";
import { Time } from "../../../base/Time";
import { MoveDirection } from "../../components/MoveDirection";
import { ProjectilePool } from "../../pools/ProjectilePool";


export class FirePattern{

    #time = 0;
    constructor(){
        this.fireAngels = [0, 40, 60];
        this.fireInterval = 1;
        this.fireForce = 1;
        this.target = null; 
        this.parent = null;
        this.color = 'green';
    }

    fireRoutine(){

        this.#time += Time.deltaTime;

        if (this.#time >= this.fireInterval){

            this.#handleRequirments();
            this.#fire();
            this.#time = 0;
        }

    }

    #handleRequirments(){
        if (this.parent == null) throw new Error("parent is needed.");
        if (this.fireAngels.length == 0) throw new Error("a fire angle is needed.");
    }

    #fire(){

        if (this.target == null) return;

        this.fireAngels.forEach((angle, index) => {
            var from = this.parent.transform.position;

            var rot = this.#getDirection().rotate(angle, from);


            var p = this.#makeProjectile();
            var moveComponent = p.getComponent(MoveDirection);
            moveComponent.direction = rot.normalize();
            moveComponent.speed = this.fireForce;
        });
    }

    #makeProjectile(){
        ProjectilePool.getInstance().color = this.color;
        var c = ProjectilePool.getInstance().acquireReuseable();
        c.transform.position.x = this.parent.transform.position.x;
        c.transform.position.y = this.parent.transform.position.y;
        return c;
    }

    #getDirection(){
        var to = this.target.transform.position;
        var from = this.parent.transform.position;

        return Vector2d.subtract(to, from);
    }

    



}