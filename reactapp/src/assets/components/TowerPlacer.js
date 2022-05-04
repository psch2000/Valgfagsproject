import { RectangleCollider } from "../../base/baseStructor/collider/RectangleCollider";
import { Component } from "../../base/baseStructor/Component";
import { Composit } from "../../base/baseStructor/Composit";
import { Input } from "../../GameEngine/input/Input";
import { App } from "../app/App";
import { instantiate } from "../app/functions/instantiate";
import { TowerPool } from "../pools/TowerPool";
import { CircleRenderer } from "./CircleRenderer";
import { FollowCanvasMouse } from "./FollowCanvasMouse";


export class TowerPlacere extends Component{

    static #instance;

    #map;
    #rangeRenderer;
    #spriteRenderer;
    #followMouse;

    
    #canPlaceTower;
    #towerType;
    constructor(){
        if (TowerPlacere.#instance == null){
            super();
            this.#map = App.game.find("Map").getComponent(Map);
            this.#canPlaceTower = false;
        }
    }

    onEnter(other){
        if (other.name == "Map"){
        }
    }

    onOverlap(other){

        if(other.name == "Map"){

            this.#canPlaceTower = true;

        }

    }

    onExit(other){
        if(other.name == "Map"){
        }
    }

    onStart(){
        this.#rangeRenderer = this.parent.addComponent(new CircleRenderer(20, '#030f11', true));
        this.#spriteRenderer = this.parent.addComponent(new CircleRenderer(10, 'white', false));
        this.#followMouse = this.parent.addComponent(new FollowCanvasMouse());

        this.parent.addComponent(new RectangleCollider(1, 1));

    }

    onUpdate(){
        // left mouse input
        if(Input.getKeyDown('0')){
            
            if(this.parent.isActive == true){
                
                if(this.#canPlaceTower == false) return;
                var c = TowerPool.getInstance().acquireReuseable();
                c.transform.setPosition(this.transform.position);
                this.setActive(false);
                this.#canPlaceTower = false;

            }
        }
        this.#canPlaceTower = false;

        
    }



    getTowerType(){
        return this.#towerType;
    }

    setTowerType(towerType){
        this.#rangeRenderer.radius = towerType.range;
        this.#spriteRenderer.color = towerType.color;
        this.#towerType = towerType;
    }

    static getInstance(){

        if (this.#instance == null){
            var c = new Composit();
            c.layer = 1;
            this.#instance = c.addComponent(new TowerPlacere());
            instantiate(c);
        }

        return this.#instance;
    }

}