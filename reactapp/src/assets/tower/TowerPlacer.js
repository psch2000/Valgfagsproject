import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { Component } from "../../base/baseStructor/Component";
import { Composit } from "../../base/baseStructor/Composit";
import { Input } from "../../GameEngine/input/Input";
import { instantiate } from "../app/functions/instantiate";
import { CircleRenderer } from "../components/CircleRenderer";
import { FollowCanvasMouse } from "../components/FollowCanvasMouse";
import { Player } from "../components/bank/Player";
import { TowerPool } from "../pools/TowerPool";
import { DrawIcon } from "../../base/baseStructor/DrawIcon";
import { Unplaceable } from "./Unplaceable";
import { EventHandler } from "../../base/baseBehaviour/EventHandler";

export class TowerPlacere extends Component{

    static #instance;
    
    #map
    #rangeRenderer;
    #spriteRenderer;
    #followMouse;
    #pathrechtangle;
    #collision;
    #onMap;
    #onUnplacable;
    #canPlaceTower;
    #towerType;

    constructor(){
        if (TowerPlacere.#instance == null){
            super();
            //this.#map = App.game.find("Map").getComponent(Map);
            this.#canPlaceTower = false;
            this.onSelectedTowerChange = new EventHandler();
        }
    }

    // If the TowerPlacer object (which is on the mouse) enters the map area, #onmap turns true.
    onEnter(other){
        if (other.name === "Map"){
            this.#onMap = true;
        }
    }

    // Repeatetly checks for wether the towerplacer is overlapping with something that is unplaceable
    // If the object its overlapping with is unplaceable, onUnplaceable turns true.
    onOverlap(other){
        if (other.name === "projectile") return;

        if (other.getComponent(Unplaceable) !== null) {
            this.#onUnplacable = true;
        }
    }

    // If the TowerPlacer object (which is on the mouse) enters the map area, #onmap turns false.
    // If the cursor leaves something thats Unplaceable, it turns false.
    onExit(other){
        if(other.name === "Map"){
            this.#onMap = false;
        }

        if (other.getComponent(Unplaceable) !== null) {
            this.#onUnplacable = false;
        }
    }

    // We add a range and sprite renderer, followMouse and collision components
    onStart(){
        this.#rangeRenderer = this.parent.addComponent(new CircleRenderer(20, '#030f1191', true));
        this.#spriteRenderer = this.parent.addComponent(new DrawIcon("", true))
        this.#followMouse = this.parent.addComponent(new FollowCanvasMouse());
        this.#collision = this.parent.addComponent(new CircleCollider(1));

        // Disables regular menu right click
        // Makes it so the player can give right click input without a menu appearing
        document.addEventListener('contextmenu', function(e) {            
            e.preventDefault();
          }, false);
    }

    onUpdate(){
        // The tower is able to be placed if its on the map and is not overlapping with an unplaceable object.
        this.#canPlaceTower = this.#onMap && !this.#onUnplacable;
        
        // If the tower is able to be placed, the image is changed to 'imagePath', which is the colorful version of the tower
        // If the tower is not able to be placed, the image is changed to 'dsbIamge', which is the greyscaled version of the tower.
        this.#spriteRenderer.img.src = this.#canPlaceTower ? this.#towerType.imagePath : this.#towerType.dsbImage;
        
        // If the left mouse button is pressed, and canPlaceTower is true, the tower gets placed on the map.

            
          

        if(Input.getKeyDown('0')){

            if(this.parent.isActive == true){
                if(this.#canPlaceTower == false) return;

                // Tower gets instantiated and placed on mouse position
                var c = TowerPool.getInstance().acquireReuseable();
                c.transform.setPosition(this.transform.position);

                // Player loses the amount of money that the tower is worth
                Player.bank.remove(this.#towerType.price);

                //Towerplacer is disabled
                this.parent.setActive(false);
                this.#canPlaceTower = false;
                this.#resetTowerType();
            } 
        }

        if(Input.getKeyDown('2')){
            this.parent.setActive(false);
            this.#canPlaceTower = false;
            this.#resetTowerType();
        }
    }

    #resetTowerType() {
        this.#towerType = null;
        this.onSelectedTowerChange.invoke();
    }

    getTowerType(){
        return this.#towerType;
    }

    // We set the towerType of the towerPlacer to the towerType being selected
    // onSelectedTowerChange is invoked to update what shop button is selected
    setTowerType(towerType){
        this.#rangeRenderer.radius = towerType.range;
        this.#spriteRenderer.img.src = towerType.imagePath;
        this.#towerType = towerType;
        this.#collision.radius = towerType.size;

        this.onSelectedTowerChange.invoke();
        this.parent.setActive(true);
    }

    // Gets an instance. If theres none, makes one
    static getInstance(){

        if (this.#instance == null){
            let c = new Composit("towerPlacer");
            c.layer = 1;
            this.#instance = c.addComponent(new TowerPlacere());
            c.setActive(false); // by default not active before being activated else where
            instantiate(c);
        }

        return this.#instance;
    }
}