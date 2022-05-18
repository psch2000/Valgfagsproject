import { CircleCollider } from "../../base/baseStructor/collider/CircleCollider";
import { RectangleCollider } from "../../base/baseStructor/collider/RectangleCollider";
import { Component } from "../../base/baseStructor/Component";
import { App } from "../app/App";
import { TowerRange } from "../tower/TowerRange";

export class OutOfBounceDelete extends Component {
    constructor(releaseCallback) {
        super();
        this.releaseCallback = releaseCallback;
    }

    onUpdate() {
        let circleCollider = this.parent.getComponent(CircleCollider);
        let rectangleCollider = this.parent.getComponent(RectangleCollider);

        if (circleCollider === null && rectangleCollider === null) return;

        // what collider does the composit have
        let collider = circleCollider !== null ? circleCollider : rectangleCollider;

        // calculate the four boundary sides of the collider (as a rectangle)
        let rightSide =
            collider.type === "CircleCollider"
                ? this.transform.position.x + collider.radius
                : this.transform.position.x + collider.width;
        let bottomSide =
            collider.type === "CircleCollider"
                ? this.transform.position.y + collider.radius
                : this.transform.position.y + collider.height;
        let leftSide =
            collider.type === "CircleCollider" ? this.transform.position.x - collider.radius : this.transform.position.x;
        let topSide =
            collider.type === "CircleCollider" ? this.transform.position.y - collider.radius : this.transform.position.y;
  
        // if out of bounce
        if (rightSide < 0 || leftSide > App.windowRect.width || bottomSide < 0 || topSide > App.windowRect.height) {
            this.releaseCallback(this.parent);
        }
    }

    onExit(other){

        let towerRange = this.parent.tower.getTowerFacade().getTowerRange();
        
        if (other.getComponent(TowerRange) == towerRange){
            this.releaseCallback(this.parent);
        }        
    }
}
