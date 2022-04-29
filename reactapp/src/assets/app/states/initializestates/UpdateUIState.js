import { DrawIcon } from "../../../../base/baseStructor/DrawIcon";
import { DrawText } from "../../../../base/baseStructor/DrawText";
import { Composit } from "../../../../base/baseStructor/Composit";
import { State } from "../../../../base/baseBehaviour/State";
import { Game } from "../../../../assets/app/App";


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

        
        //nstantiate gameobjects
            //Icons and images
            Game.instantiate(HealthIcon, {x: 10, y: 5});
            Game.instantiate(MoneyIcon, {x: 130, y: 5});
            Game.instantiate(ShopUI, {x: 700, y: 0});

            //Texts
            Game.instantiate(HealthText, {x:45, y: 30});
            Game.instantiate(MoneyText, {x:165, y: 30});
            Game.instantiate(WaveText, {x:580, y:30});

    }

}