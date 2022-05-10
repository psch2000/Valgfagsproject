import { Rect } from "../../../../backend/data-structors/Rect";
import { State } from "../../../../base/baseBehaviour/State";
import { Collider } from "../../../../base/baseStructor/collider/Collider";
import { RectangleCollider } from "../../../../base/baseStructor/collider/RectangleCollider";
import { Composit } from "../../../../base/baseStructor/Composit";
import { Vector2d } from "../../../../base/baseStructor/Vector2d";
import { Map } from "../../../components/Map";
import { instantiate } from "../../functions/instantiate";
import { UpdateUIState } from "./UpdateUIState";


export class MakeMapState extends State{


    constructor(){
        super();
    }

    execute(){
        var map = new Composit("Map");
        map.addComponent(new Map(new Rect(350,250,698, 500), 'transparent'));
        map.addComponent(new RectangleCollider(628, 450, true));
        instantiate(map);

        this.context.transitionTo(new UpdateUIState());
        this.context.execute();

    }
}