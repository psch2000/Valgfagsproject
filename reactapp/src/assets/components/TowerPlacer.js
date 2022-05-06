import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { RectangleCollider } from "../../base/baseStructor/collider/RectangleCollider";
import { Component } from "../../base/baseStructor/Component";
import { Composit } from "../../base/baseStructor/Composit";
import { Input } from "../../GameEngine/input/Input";
import { App } from "../app/App";
import { instantiate } from "../app/functions/instantiate";
import { TowerPool } from "../pools/TowerPool";
import { CircleRenderer } from "./CircleRenderer";
import { FollowCanvasMouse } from "./FollowCanvasMouse";
import { Path } from "./Path";
import { PathRectangle } from "./PathRectangle";

export class TowerPlacere extends Component{

    static #instance;

    #map;
    #rangeRenderer;
    #spriteRenderer;
    #followMouse;
    #pathrechtangle
    #collision
    #onMap
    #onPath
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
        if (other.name === "Map"){
            this.#onMap = true;
            //console.log("Inside of Map")
        }
    }

    onOverlap(other){
        if (other.getComponent(PathRectangle) !== null) {
            this.#onPath = true;
        }
    }

    onExit(other){
        if(other.name === "Map"){
            this.#onMap = false;
            //console.log("Out of map");
        }

        if (other.getComponent(PathRectangle) !== null) {

            this.#onPath = false;
        }
       
    }

    onStart(){
        this.#rangeRenderer = this.parent.addComponent(new CircleRenderer(20, '#030f1191', true));
        this.#spriteRenderer = this.parent.addComponent(new CircleRenderer(10, 'white', false));
        this.#followMouse = this.parent.addComponent(new FollowCanvasMouse());
        this.#collision = this.parent.addComponent(new CircleCollider(1));
        //this.parent.addComponent(new RectangleCollider(10, 10));

        this.#pathrechtangle = this.parent.addComponent(new PathRectangle());
    }

    onUpdate(){
        // left mouse input
        this.#canPlaceTower = this.#onMap && !this.#onPath
        if(!this.#canPlaceTower) {this.#spriteRenderer.color = this.#towerType.dsbColor}
        else { this.#spriteRenderer.color = this.#towerType.normalColor}

        if(Input.getKeyDown('0')){
            
            if(this.parent.isActive == true){
                
                if(this.#canPlaceTower == false) return;
                var c = TowerPool.getInstance().acquireReuseable();
                c.transform.setPosition(this.transform.position);
                this.setActive(false);
                this.#canPlaceTower = false;
            }
        }
    }

    getTowerType(){
        return this.#towerType;
    }

    setTowerType(towerType){
        this.#rangeRenderer.radius = towerType.range;
        this.#spriteRenderer.color = towerType.color;
        this.#towerType = towerType;
        this.#collision.radius = towerType.size;        
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