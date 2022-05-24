import { Component } from "../../base/baseStructor/Component";
import { TowerFacade } from "./TowerFacade";
import { Input } from "../../GameEngine/input/Input";
import { Area } from "../components/Area";
import { Enemy } from "../components/enemy/Enemy";


// Makes a tower that has a defined fire pattern
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
        
        if (this.isUsingArea == true) return;

        this.firePattern.imagepath = this.towerType.projectileImagePath;
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

        if (this.isUsingArea == true) {

            return;
        }
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