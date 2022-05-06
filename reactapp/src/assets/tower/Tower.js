import { Component } from "../../base/baseStructor/Component";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { Time } from "../../base/Time";
import { getCanvasMousePosition } from "../app/functions/getCanvasMousePosition";
import { ProjectilePool } from "../pools/ProjectilePool";
import { MoveDirection } from "../components/MoveDirection";
import { TowerFacade } from "./TowerFacade";
import { Input } from "../../GameEngine/input/Input";

export class Tower extends Component {
    #enemiesInRange = [];
    #towerFacade;
    #hitCursor = false;

    constructor(towerType) {
        super();
        this.towerType = towerType;

        this.canFire = false;
        this.cooldownShoot = 2;
        this.time = 0;
    }
    
    onStart(){
        this.#towerFacade = this.getComponent(TowerFacade);
    }

    onEnter(other){
        if (other.name == "Cursor"){
            this.#hitCursor = true;
        }
    }

    onExit(other){
        if (other.name == "Cursor"){
            this.#hitCursor = false;
        }
    }

    onUpdate(){

        if (Input.getKeyDown('0') == true){
            this.#towerFacade.showRange(this.#hitCursor);
        }

 
        this.time += Time.deltaTime;

        if (this.time > this.cooldownShoot){
            this.#resetCooldown();

            var from = this.transform.position;
            var to = getCanvasMousePosition();

            var direction = Vector2d.subtract(to, from).normalize();

            // ProjectilePool.getInstance().color = this.towerType.color;
            var instance = ProjectilePool.getInstance().acquireReuseable(this.towerType.color);
            instance.transform.position = this.transform.position.copy();

            instance.getComponent(MoveDirection).direction = direction;
        }
    }

    #resetCooldown() {
        this.time = 0;
    }
}
