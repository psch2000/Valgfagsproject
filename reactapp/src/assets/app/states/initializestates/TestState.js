import { State } from "../../../../base/baseBehaviour/State";
import { Composit } from "../../../../base/baseStructor/Composit";
import { FollowMouse } from "../../../components/FollowMouse";
import { SpriteRenderer } from "../../../components/SpriteRenderer";
import { TowerPlacer } from "../../../components/TowerPlacer";
import { Game } from "../../App";


export class TestState extends State{

    constructor(){
        super();

        
    }

    execute(){
        var c = new Composit("TowerPlacer");
        c.addComponent(new SpriteRenderer());
        c.addComponent(new FollowMouse());
        c.addComponent(new TowerPlacer());
        Game.instantiate(c);

    }
}