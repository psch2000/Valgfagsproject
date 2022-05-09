import { Vector2d } from "../../../base/baseStructor/Vector2d";
import { Time } from "../../../base/Time";
import { MoveDirection } from "../../components/MoveDirection";
import { ProjectilePool } from "../../pools/ProjectilePool";
import { Enemy } from "../../components/enemy/Enemy";
import { Composit } from "../../../base/baseStructor/Composit";
import { CircleRenderer } from "../../components/CircleRenderer";
import { instantiate } from "../../app/functions/instantiate";

export class FirePattern{

    #time = 0;
    #index = 0;
    constructor(){
        this.fireAngels = [0];
        this.fireInterval = 1;
        this.fireForce = 1;
        this.followTarget = true;
        this.target = null;
        this.parent = null;
        this.burst = false;
        this.color = 'green';
        this.damage = null;
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
        if (this.target.getComponent(Enemy).isDead()) this.target = null;

        if (this.burst == true){
            this.#burstFire();
            return;
        }

        this.#sekventialFire();

    }

    #sekventialFire(){

        var i = this.#index;
        var from = this.parent.transform.position;
        var rot = this.#getDirection().rotate(this.fireAngels[i], from);

        this.#fireBullet(rot);

        if (i < this.fireAngels.length){
            i++;
            return;
        }

        i = 0;
    }

    #fireBullet(rot){
        var p = this.#makeProjectile();
        var moveComponent = p.getComponent(MoveDirection);
        moveComponent.direction = rot.normalize();
        moveComponent.speed = this.fireForce;
    }

    #burstFire(){
        this.fireAngels.forEach((angle, index) => {
            var from = this.parent.transform.position;

            
            var rot = this.#getDirection().rotate(angle, from);


            this.#fireBullet(rot);
        });
    }

    #makeProjectile(){
        var c = ProjectilePool.getInstance().acquireReuseable(this.color, this.damage);
        c.transform.position = this.parent.transform.position.copy();
        return c;
    }

    #getDirection(){
        if (this.followTarget == false){
            return Vector2d.up;
        }

        var to = this.target.getComponent(Enemy).getCenterPosition();
        var from = this.parent.transform.position;
        this.markShootPosition(to);
        return Vector2d.subtract(to, from);
    }

    markShootPosition(position) {
        let t = new Composit("test position shoot");
        t.addComponent(new CircleRenderer(5, this.color, false));
        t.transform.position = position.copy();
        instantiate(t);
    }



}
