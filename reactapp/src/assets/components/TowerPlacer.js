import { Component } from "../../base/baseStructor/Component";
import { Composit } from "../../base/baseStructor/Composit";
import { Input } from "../../GameEngine/input/Input";
import { instantiate } from "../app/functions/instantiate";
import { TowerPool } from "../pools/TowerPool";
import { CircleRenderer } from "./CircleRenderer";
import { FollowCanvasMouse } from "./FollowCanvasMouse";


export class TowerPlacere extends Component{

    static #instance;

    #rangeRenderer;
    #spriteRenderer;
    #followMouse;

    #towerType;
    constructor(){
        if (TowerPlacere.#instance !== undefined) return
        super();
    }

    onStart(){
        this.#rangeRenderer = this.parent.addComponent(new CircleRenderer(20, '#030f1191', true));
        this.#spriteRenderer = this.parent.addComponent(new CircleRenderer(10, 'white', false));
        this.#followMouse = this.parent.addComponent(new FollowCanvasMouse());
    }

    onUpdate(){
        // left mouse input
        if(Input.getKeyDown('0')){
            if(this.parent.isActive == true){
                var c = TowerPool.getInstance().acquireReuseable();
                c.transform.setPosition(this.transform.position);
                this.setActive(false);
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
    }

    static getInstance(){

        if (this.#instance === undefined) {
            var c = new Composit();
            c.layer = 1;
            this.#instance = c.addComponent(new TowerPlacere());
            instantiate(c);
        }

        return this.#instance;
    }

}