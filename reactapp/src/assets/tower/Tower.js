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



export class Tower extends Component{

    #towerFacade;
    #hitCursor = false;

    constructor(towerType){
        super();
        this.towerType = towerType;
        this.canFire = false;

        this.firePattern = new FirePattern();

    }
    
    onStart(){
        this.#towerFacade = this.getComponent(TowerFacade);

        this.firePattern.color = this.towerType.color;
        this.firePattern.parent = this;
        this.firePattern.target = App.game.find("Cursor");
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

 
        this.firePattern.fireRoutine();
    }

    
    

}