import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { RectangleCollider } from "../../base/baseStructor/collider/RectangleCollider";
import { Component } from "../../base/baseStructor/Component";
import { Composit } from "../../base/baseStructor/Composit";
import { Input } from "../../GameEngine/input/Input";
import { App } from "../app/App";
import { instantiate } from "../app/functions/instantiate";
import { CircleRenderer } from "../components/CircleRenderer";
import { FollowCanvasMouse } from "../components/FollowCanvasMouse";
import { Player } from "../components/bank/Player";
import { TowerPool } from "../tower/TowerPool";
import { TowerFacade } from "./TowerFacade";
import { TowerRange } from "./TowerRange";
import { PathRectangle } from "../components/PathRectangle";
import { DrawIcon } from "../../base/baseStructor/DrawIcon";
import { Unplaceable } from "./Unplaceable";

export class TowerPlacere extends Component{

    static #instance;

    #map;
    #rangeRenderer;
    #spriteRenderer;
    #followMouse;
    #pathrechtangle;
    #collision;
    #onMap;
    #unplaceable
    #canPlaceTower;
    #towerType;

    constructor(){
        if (TowerPlacere.#instance == null){
            super();
            this.#map = App.game.find("Map").getComponent(Map);
            this.#canPlaceTower = false;
        }
        this.#unplaceable = true;
        this.#onMap = false;
    }

    onEnter(other){
        if (other.name === "Map"){
            this.#onMap = true;
        }
    }

    onOverlap(other){
        if (other.name === "projectile") return;
        if (other.name === "TowerRange") return;

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
        this.#spriteRenderer = this.parent.addComponent(new DrawIcon("", true))
        this.#followMouse = this.parent.addComponent(new FollowCanvasMouse());
        this.#collision = this.parent.addComponent(new CircleCollider(1, true));
    }

    onUpdate(){
        this.#canPlaceTower = this.#onMap && !this.#unplaceable;
        //console.log("Unplaceable: " + this.#unplaceable)

        this.#spriteRenderer.color = this.#canPlaceTower ? this.#towerType.normalColor : this.#towerType.dsbColor;
        
        // left mouse input
        if(Input.getKeyDown('0')){
            
            if(this.parent.isActive == true){
                
                if(this.#canPlaceTower == false) return;
                var c = TowerPool.getInstance().acquireReuseable();
                c.transform.setPosition(this.transform.position);
                Player.bank.remove(this.#towerType.price);
                this.#onMap = false;
                this.parent.setActive(false);
                
            }
        }
    }

    getTowerType(){
        return this.#towerType;
    }

    setTowerType(towerType){
        this.#rangeRenderer.radius = towerType.range;
        this.#spriteRenderer.img.src = towerType.imagePath;
        this.#towerType = towerType;
        this.#collision.radius = towerType.size;        
    }

    static getInstance(){

        if (this.#instance == null){
            let c = new Composit("towerPlacer");
            c.layer = 1;
            this.#instance = c.addComponent(new TowerPlacere());
            instantiate(c);
        }
        return this.#instance;
    }
}