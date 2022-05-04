import { DrawIcon } from "../../../../base/baseStructor/DrawIcon";
import { DrawText } from "../../../../base/baseStructor/DrawText";
import { Composit } from "../../../../base/baseStructor/Composit";
import { State } from "../../../../base/baseBehaviour/State";
import { Game } from "../../../../assets/app/App";
import { instantiate } from "../../functions/instantiate";
import { CircleRenderer } from "../../../components/CircleRenderer";
import { FollowCanvasMouse } from "../../../components/FollowCanvasMouse";
import { Map } from "../../../components/Map";
import { Rect } from "../../../../backend/data-structors/Rect";
import { RectangleCollider } from "../../../../base/baseStructor/collider/RectangleCollider";
import { Collider } from "../../../../base/baseStructor/collider/Collider";
import { CircleCollider } from "../../../../base/baseStructor/collider/CircleCollider";
import { Vector2d } from "../../../../base/baseStructor/Vector2d";


export class UpdateUIState extends State{

    constructor(){
        super();
    }

    execute(){

        var map = new Composit("Map");
        map.addComponent(new Map(new Rect(0,0,698, 500), 'transparent'));
        map.addComponent(new RectangleCollider(400, 400));
        console.log(map.getComponent(Collider));
        map.layer = 2;
        instantiate(map, new Vector2d(20, 20));

        //draw icons
        var HealthIcon = new Composit();
        HealthIcon.addComponent(new DrawIcon("./images/sprite_heart.png"));
        
        var MoneyIcon = new Composit();
        MoneyIcon.addComponent(new DrawIcon("./images/sprite_coin.png"));

        var ShopUI = new Composit();
        ShopUI.addComponent(new DrawIcon("./images/sprite_shop.png"));

        // Instantiate:
        
        //Icons and images
        instantiate(HealthIcon, {x: 10, y: 5});
        instantiate(MoneyIcon, {x: 130, y: 5});
        instantiate(ShopUI, {x: 700, y: 0});


        var cursor = new Composit();
        cursor.addComponent(new CircleRenderer(3, 'white', true));
        cursor.addComponent(new FollowCanvasMouse());
        instantiate(cursor);

      
    }

}