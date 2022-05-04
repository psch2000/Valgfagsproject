import { DrawIcon } from "../../../../base/baseStructor/DrawIcon";
import { DrawText } from "../../../../base/baseStructor/DrawText";
import { Composit } from "../../../../base/baseStructor/Composit";
import { State } from "../../../../base/baseBehaviour/State";
import { Game } from "../../../../assets/app/App";
import { instantiate } from "../../functions/instantiate";
import { CircleRenderer } from "../../../components/CircleRenderer";
import { FollowCanvasMouse } from "../../../components/FollowCanvasMouse";


export class UpdateUIState extends State{

    constructor(){
        super();
    }

    execute(){

        //draw icons
        var HealthIcon = new Composit();
        HealthIcon.addComponent(new DrawIcon("./images/sprite_heart.png"));
        
        var MoneyIcon = new Composit();
        MoneyIcon.addComponent(new DrawIcon("./images/sprite_coin.png"));

        var ShopUI = new Composit();
        ShopUI.addComponent(new DrawIcon("./images/sprite_shop.png"));
        
        //map
        var MapImage = new Composit();
        MapImage.addComponent(new DrawIcon("./images/Sprite_map.png"))

        // Instantiate:

        //Map
        instantiate(MapImage, {x:0, y:0})
        
        //Icons and images
        instantiate(HealthIcon, {x: 10, y: 5});
        instantiate(MoneyIcon, {x: 130, y: 5});
        instantiate(ShopUI, {x: 700, y: 0});


        var c = new Composit();
        c.addComponent(new CircleRenderer(3, 'white', true));
        c.addComponent(new FollowCanvasMouse());
        instantiate(c);

            

    }

}