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
import { Area } from "../components/Area";
import { Enemy } from "../components/enemy/Enemy";



export class Tower extends Component{

    #towerFacade;
    #hitCursor = false;
    #area;

    constructor(towerType){
        super();
        this.towerType = towerType;
        this.canFire = false;

        // debugger;
        this.isUsingArea = towerType.useArea;

        if (this.isUsingArea == true) return;
        this.firePattern = towerType.firePatternBuilder.getProduct();
      
    }
    
    onStart(){
        this.#towerFacade = this.getComponent(TowerFacade);
        this.#area = this.getComponent(Area);

        if (this.#area != null){
            this.#area.onReachedMaxRadius.addListener(() => this.onPop(this));

        }

        console.log(this.parent)
        if (this.isUsingArea == true) return;
        this.firePattern.color = this.towerType.color;
        this.firePattern.damage = this.towerType.damage;
        this.firePattern.parent = this.parent;
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

    onPop(tower){


        
        var enemies = tower.#towerFacade.getEnemiesInRange();

        
        enemies.forEach(e => {
            e.getComponent(Enemy).takeDamage(tower.towerType.damage);
        });
    }

    onUpdate(){

        if (Input.getKeyDown('0') == true){
            this.#towerFacade.showRange(this.#hitCursor);
        }


        
        if (this.isUsingArea == true) {
            this.#area.canIncrease = this.#towerFacade.canHitEnemy();
            
            return;
        }
        this.#setTarget();
        this.firePattern.fireRoutine();
    }

    // #enemyInRange(){

    //     return this.#towerFacade.getEnemiesInRange().length = 0;
    // }


    #setTarget(){
        var enemies = this.#towerFacade.getEnemiesInRange();
        
        this.firePattern.target = null;


        if (enemies.length === 0) return;

        this.firePattern.target = enemies[0];
    }

}