import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { RectangleCollider } from "../../base/baseStructor/collider/RectangleCollider";
import { Component } from "../../base/baseStructor/Component";
import { Composit } from "../../base/baseStructor/Composit";
import { Input } from "../../GameEngine/input/Input";
import { App } from "../app/App";
import { instantiate } from "../app/functions/instantiate";
import { CircleRenderer } from "../components/CircleRenderer";
import { FollowCanvasMouse } from "../components/FollowCanvasMouse";
import { Player } from "../Player";
import { TowerPool } from "../tower/TowerPool";
import { TowerFacade } from "./TowerFacade";
import { TowerRange } from "./TowerRange";
import { PathRectangle } from "../components/PathRectangle";
import { TowerType } from "./TowerType";
import { Tower } from "./Tower";
import { Unplaceable } from "./firePattern/Unplaceable";

export class TowerPlacere extends Component{

    static #instance;

    #map;
    #rangeRenderer;
    #spriteRenderer;
    #followMouse;
    #pathrechtangle
    #collision
    #onMap
    #onTower
    #canPlaceTower;
    #towerType;
    #unplaceable;

    constructor(){
        if (TowerPlacere.#instance !== undefined) return
        super();
        this.#map = App.game.find("Map").getComponent(Map);
        this.#unplaceable = true;
    }

    onEnter(other){
        if (other.name === "Map"){
            this.#onMap = true;
            //console.log("On map")
        }
    }

    onOverlap(other){
        if (other.name === "projectile") return;
        if (other.name === "TowerRange") return;
        //if (!this.#onPath && other.getComponent(PathRectangle) !== null) {
          //  this.#onPath = true;
        //}
        //if(!this.#onTower && other.getComponent(Tower) !== null) {
          //  this.#onTower = true;
        //}
        if (!this.#unplaceable && other.getComponent(Unplaceable) !== null) {
            this.#unplaceable = true;
        }
        else if (other.getComponent(Unplaceable) === null){
            this.#unplaceable = false;
        }

    }

    onExit(other){
        if(other.name === "Map"){
            this.#onMap = false;
            
        }
       

    }

    onStart(){
        this.#rangeRenderer = this.parent.addComponent(new CircleRenderer(20, '#030f1191', true));
        this.#spriteRenderer = this.parent.addComponent(new DrawIcon("", true));
        //this.#spriteRenderer = this.parent.addComponent(new CircleRenderer(10, 'white', false));
        this.#followMouse = this.parent.addComponent(new FollowCanvasMouse());
        this.#collision = this.parent.addComponent(new CircleCollider(1));
        //this.parent.addComponent(new RectangleCollider(10, 10));

        this.#pathrechtangle = this.parent.addComponent(new PathRectangle());
    }

    onUpdate(){
        // left mouse input
        this.#canPlaceTower = this.#onMap && !this.#unplaceable //&& !this.#onTower;

        if(!this.#canPlaceTower) {this.#spriteRenderer.color = this.#towerType.dsbColor}
        else { this.#spriteRenderer.color = this.#towerType.normalColor}

        if(Input.getKeyDown('0')){
            if(this.parent.isActive == true){
                if(this.#canPlaceTower == false) return;
                var c = TowerPool.getInstance().acquireReuseable();
                var a = c.getComponent(TowerFacade);
                c.transform.setPosition(this.transform.position);
                Player.bank.remove(this.#towerType.price);
                this.parent.setActive(false);
                this.#canPlaceTower = false;
            }
        }
    }

    getTowerType(){
        return this.#towerType;
    }

    setTowerType(towerType){
        this.#rangeRenderer.radius = towerType.range;
        this.#spriteRenderer.img.src = towerType.imagePath;
        //this.#spriteRenderer.color = towerType.color;
        //this.#spriteRenderer.radius = towerType.radius;
        this.#towerType = towerType;
        this.#collision.radius = towerType.size;        
    }


    static getInstance(){

        if (this.#instance === undefined) {
            var c = new Composit("TowerPlacer");
            c.layer = 1;
            this.#instance = c.addComponent(new TowerPlacere());
            instantiate(c);
        }

        return this.#instance;
    }

}