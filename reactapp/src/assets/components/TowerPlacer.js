import { Component } from "../../base/baseStructor/Component";
import { Composit } from "../../base/baseStructor/Composit";
import { Game } from "../app/App";
import { TowerPool } from "../pools/TowerPool";
import { FollowMouse } from "./FollowMouse";
import { SpriteRenderer } from "./SpriteRenderer";
import { SquareRenderer } from "./SquareRenderer";


export class TowerPlacer extends Component{

    constructor(){
        super();
        this.isHoldingTower = false;
        this.sr = null;
        this.towerPrice = null;
        Game.window.onMouseDown.addListener(this.handleOnClickCanvas);
    }

    onStart(){

        this.sr = this.parent.getComponent("SpriteRenderer");
    }


    handleOnClickCanvas = () => {
        if (this.isHoldingTower == false) return;

        var tower = TowerPool.getInstance().acquireReuseable();
        
        var sr = tower.getComponent("SpriteRenderer");
        

        var moneyComposit = Game.findObjectWithName("MoneyText");

        moneyComposit.getComponent("Bank").remove(this.towerPrice);

        sr.setPath(this.sr.image.src);
        tower.transform.position.x = this.transform.position.x;
        tower.transform.position.y = this.transform.position.y;

        this.isHoldingTower = false;
        this.sr.setPath(null);

    }
}