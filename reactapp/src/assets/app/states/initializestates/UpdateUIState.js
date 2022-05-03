import { DrawIcon } from "../../../../base/baseStructor/DrawIcon";
import { DrawText } from "../../../../base/baseStructor/DrawText";
import { Composit } from "../../../../base/baseStructor/Composit";
import { State } from "../../../../base/baseBehaviour/State";
import { Game } from "../../../../assets/app/App";
import { instantiate } from "../../functions/instantiate";
import { CircleRenderer } from "../../../components/CircleRenderer";
import { FollowCanvasMouse } from "../../../components/FollowCanvasMouse";
import { Map } from "../../../components/Map";
import { Rectangle } from "../../../../base/baseStructor/Rectangle";
import { CircleCollider } from "../../../components/CircleCollider";
import { TowerRange } from "../../../components/TowerRange";


export class UpdateUIState extends State{

    constructor(){
        super();
    }

    execute(){

        var map = new Composit("Map");
        var mapRect = new Rectangle(0, 0,700, 500);
        map.addComponent(new Map(mapRect, 'transparent'));
        instantiate(map);

        var collider = new Composit();
        collider.addComponent(new FollowCanvasMouse());
        collider.addComponent(new TowerRange(50));
        instantiate(collider);

        //draw icons
        var HealthIcon = new Composit();
        HealthIcon.addComponent(new DrawIcon("./images/sprite_heart.png"));
        
        var MoneyIcon = new Composit();
        MoneyIcon.addComponent(new DrawIcon("./images/sprite_coin.png"));

        var ShopUI = new Composit();
        ShopUI.addComponent(new DrawIcon("./images/sprite_shop.png"));



        //draw texts
        var HealthText = new Composit();
        var heartText = HealthText.addComponent(new DrawText());
        heartText.text = 100;

        var MoneyText = new Composit();
        var coinText = MoneyText.addComponent(new DrawText());
        coinText.text = "$" + 20000;

        var WaveText = new Composit();
        var waveText = WaveText.addComponent(new DrawText());
        waveText.text = "Wave: " + 0;

        // Instantiate:
        
        //Icons and images
        instantiate(HealthIcon, {x: 10, y: 5});
        instantiate(MoneyIcon, {x: 130, y: 5});
        instantiate(ShopUI, {x: 700, y: 0});

        //Texts
        instantiate(HealthText, {x:45, y: 30});
        instantiate(MoneyText, {x:165, y: 30});
        instantiate(WaveText, {x:580, y:30});


        var cursor = new Composit();
        cursor.addComponent(new CircleRenderer(3, 'white', true));
        cursor.addComponent(new FollowCanvasMouse());
        instantiate(cursor);

      
    }

}