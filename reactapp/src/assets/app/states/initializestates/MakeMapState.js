import { Rect } from "../../../../backend/data-structors/Rect";
import { State } from "../../../../base/baseBehaviour/State";
import { CircleCollider } from "../../../../base/baseStructor/collider/CircleCollider";
import { Collider } from "../../../../base/baseStructor/collider/Collider";
import { RectangleCollider } from "../../../../base/baseStructor/collider/RectangleCollider";
import { Composit } from "../../../../base/baseStructor/Composit";
import { Vector2d } from "../../../../base/baseStructor/Vector2d";
import { Area } from "../../../components/Area";
import { CircleRenderer } from "../../../components/CircleRenderer";
import { FollowCanvasMouse } from "../../../components/FollowCanvasMouse";
import { Map } from "../../../components/Map";
import { instantiate } from "../../functions/instantiate";
import { UpdateUIState } from "./UpdateUIState";

// Sets up the map.
export class MakeMapState extends State{


    constructor(){
        super();
    }

    execute(){
        var map = new Composit("Map");
        map.addComponent(new Map(new Rect(0,0,698, 500), 'transparent'));
        map.addComponent(new RectangleCollider(698, 500));
        instantiate(map);

        this.context.transitionTo(new UpdateUIState());
        this.context.execute();
    }
}