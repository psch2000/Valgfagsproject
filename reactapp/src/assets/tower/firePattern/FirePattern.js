import { Vector2d } from "../../../base/baseStructor/Vector2d";
import { Time } from "../../../base/Time";
import { ProjectilePool } from "../../pools/ProjectilePool";
import { Enemy } from "../../components/enemy/Enemy";
import { Composit } from "../../../base/baseStructor/Composit";
import { CircleRenderer } from "../../components/CircleRenderer";
import { instantiate } from "../../app/functions/instantiate";
import { Tower } from "../Tower";
import { NormalProjectile } from "../../composits/NormalProjectile";
import { rotatePoint } from "../../app/functions/rotatePoint";

// A fire pattern, that defines how a tower fires.
export class FirePattern {
    #time = 0;
    #index = 0;
    constructor() {
        this.fireAngels = [0];
        this.fireInterval = 1;
        this.fireForce = 1;
        this.followTarget = true;
        this.lookAtTarget = true;
        this.target = null;
        this.parent = null;
        this.burst = false;
        this.imagepath = "";
        this.damage = null;
        this.isArea = false;

        this.useOffsets = false;
        this.offsets = [];
        
    
        this.projectileType = NormalProjectile;
        this.lookDirection = null;
        this.rotateProjectile = false;
    }

    fireRoutine() {
        this.#time += Time.deltaTime;
        
        if (this.#time >= this.fireInterval) {
            this.#handleRequirments();
            this.#fire();
        }
    }

    #handleRequirments() {
        if (this.parent == null) throw new Error("parent is needed.");
        if (this.fireAngels.length == 0) throw new Error("a fire angle is needed.");
    }

    #fire() {
        if (this.target == null) return;
        if (this.target.getComponent(Enemy).isDead()) {
            this.target = null;
            return;
        }

        this.#time = 0;

        if (this.lookAtTarget) this.lookDirection = this.#getDirection();

        if (this.useOffsets == true){
            this.#fireFromOffsets();
            return;
        }
        
        if (this.burst == true) {
            this.#burstFire();
            return;
        }

        this.#sekventialFire();
    }

    #fireFromOffsets(){

        var dir = this.#getDirection().normalize();

        var radians = Math.atan2(dir.y, dir.x);


        this.offsets.forEach(offset => {
            
            var from = this.parent.transform.position;
            var point = Vector2d.add(from, offset);
            var rotPoint = rotatePoint(point, from, radians);
            
            this.#fireBullet(dir, rotPoint);

        })
    }

    #sekventialFire() {
        var i = this.#index;
        var from = this.parent.transform.position;
        var rot = this.#getDirection().rotate(this.fireAngels[i], from);

        this.#fireBullet(rot);

        if (i < this.fireAngels.length) {
            i++;
            return;
        }

        i = 0;
    }

    #fireBullet(dir, from = null) {
        var p = this.#makeProjectile(from);

        let tower = this.parent.getComponent(Tower);
        p.tower = tower;
        p.calculateBehavior(this.fireForce, dir.normalize(), tower);

        return p;
    }

    #burstFire() {
        this.fireAngels.forEach((angle, index) => {
            var from = this.parent.transform.position;

            var rot = this.#getDirection().rotate(angle, from);

            this.#fireBullet(rot);
        });
    }

    #makeProjectile(from) {
        var c = ProjectilePool.getInstance().acquireReuseable(this.imagepath, this.damage, this.projectileType, this.rotateProjectile);
        
        if (from == null){
            c.transform.position = this.parent.transform.position.copy();
            return c;
        }
      
        c.transform.position = from.copy();
        return c;
    }

    #getDirection() {
        if (this.followTarget == false) {
            return Vector2d.up;
        }

        var to = this.target.getComponent(Enemy).getCenterPosition();
        var from = this.parent.transform.position;

        // this.markShootPosition(to);
        return Vector2d.subtract(to, from);
    }

    // debug method to debug where the firePatterns shoots at
    markShootPosition(position) {
        let t = new Composit("test position shoot");
        t.addComponent(new CircleRenderer(5, this.color, false));
        t.transform.position = position.copy();
        instantiate(t);
    }
}
