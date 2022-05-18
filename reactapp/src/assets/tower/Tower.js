import { Component } from "../../base/baseStructor/Component";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { Time } from "../../base/Time";
import { getCanvasMousePosition } from "../app/functions/getCanvasMousePosition";
import { ProjectilePool } from "../pools/ProjectilePool";
import { MoveDirection } from "../components/MoveDirection";
import { TowerFacade } from "./TowerFacade";
import { Input } from "../../GameEngine/input/Input";
import { FirePattern } from "./firePattern/FirePattern";
import { App } from "../app/App";
import { TowerType } from "./TowerType";
import { TackShooterFirePatternBuilder } from "./firePattern/patterns/TackShooterFirePatternBuilder";
import { Unplaceable } from "./Unplaceable";



export class Tower extends Component{

    #towerFacade;
    #hitCursor = false;

    constructor(towerType){
        super();
        this.towerType = towerType;
        this.canFire = false;


        this.firePattern = towerType.firePatternBuilder.getProduct();
      
    }
    
    onStart(){
        this.#towerFacade = this.getComponent(TowerFacade);
        this.parent.addComponent(new Unplaceable());

        this.firePattern.imagepath = this.towerType.projectileImagePath;
        this.firePattern.damage = this.towerType.damage;
        this.firePattern.parent = this.parent;

        console.log(this.parent);
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

        this.#setTarget();
        this.firePattern.fireRoutine();
    }


    #setTarget(){
        var enemies = this.#towerFacade.getEnemiesInRange();
        
        this.firePattern.target = null;


        if (enemies.length === 0) return;

        this.firePattern.target = enemies[0];
    }

    getTowerFacade(){
        return this.#towerFacade;
    }

}