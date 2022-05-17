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



        //draw icons
        var HealthIcon = new Composit("healthIcon");
        HealthIcon.addComponent(new DrawIcon("./images/sprite_heart.png"));
        
        var MoneyIcon = new Composit("moneyIcon");
        MoneyIcon.addComponent(new DrawIcon("./images/sprite_coin.png"));

        var ShopUI = new Composit("shopUI");
        ShopUI.addComponent(new DrawIcon("./images/sprite_shop.png"));
        ShopUI.layer = 1;

        var MapImage = new Composit("mapImage");
        MapImage.addComponent(new DrawIcon("./images/Sprite_map.png"))

        // Instantiate:

        //Map
        instantiate(MapImage, new Vector2d(0, 0))
        
        //Icons and images
        instantiate(HealthIcon, new Vector2d(10, 7));
        instantiate(MoneyIcon, new Vector2d(130, 7));
        instantiate(ShopUI, new Vector2d(700, 0));


        var cursor = new Composit("Cursor");
        cursor.addComponent(new CircleRenderer(3, 'white', true));
        cursor.addComponent(new FollowCanvasMouse());
        cursor.addComponent(new CircleCollider(1, false));
        instantiate(cursor);

      
    }

}