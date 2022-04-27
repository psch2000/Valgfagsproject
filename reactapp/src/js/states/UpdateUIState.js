import { DrawIcon } from "../../base/baseStructor/DrawIcon";
import { DrawText } from "../../base/baseStructor/DrawText";
import { Composit } from "../../base/baseStructor/Composit";
import { CanvasGame } from "../../GameEngine/CanvasGame";
import { State } from "../../base/baseBehaviour/State";
import { Game } from "../../assets/app/App";
import { SquareRenderer } from "../../assets/components/SquareRenderer";


export class UpdateUIState extends State{

    constructor(){
        super();
    }

    execute(){

        //draw health icon
        var HealthIcon = new Composit();
        var heartIcon = HealthIcon.addComponent(new DrawIcon());
        //heartIcon.img = document.getElementById("hearticon");



        //draw health text
        var HealthText = new Composit();
        var heartText = HealthText.addComponent(new DrawText());
        heartText.text = 100;



        //draw money icon
        var MoneyIcon = new Composit();
        var coinIcon = MoneyIcon.addComponent(new DrawIcon());
        MoneyIcon.transform.position.x = 150;
        MoneyIcon.transform.position.y = 28;
        MoneyIcon.transform.size.height = 45;
        MoneyIcon.transform.size.width = 45;
        coinIcon.img = document.getElementById("moneyicon");

        //draw money text
        var MoneyText = new Composit();
        var coinText = MoneyText.addComponent(new DrawText());
        MoneyText.transform.position.x = 200;
        MoneyText.transform.position.y = 60;
        coinText.text = "$" + 20000;

        //draw wave text
        var WaveText = new Composit();
        var waveText = WaveText.addComponent(new DrawText());
        WaveText.transform.position.x = 900;
        WaveText.transform.position.y = 60;
        waveText.text = "Wave: " + 0;

        //draw shop UI
        var ShopUI = new Composit();
        var shopUI = ShopUI.addComponent(new DrawIcon());
        ShopUI.transform.position.x = 1050;
        ShopUI.transform.position.y = 0;
        ShopUI.transform.size.height = 600;
        ShopUI.transform.size.width = 300;
        shopUI.img = document.getElementById("shopui");

        //instantiate gameobjects

        // Game.instantiate(ShopUI);
        // Game.instantiate(WaveText);
        // Game.instantiate(MoneyText);
        // Game.instantiate(MoneyIcon);
        Game.instantiate(HealthIcon, {x: 50, y: 50});
        Game.instantiate(HealthText, {x:40, y: 30});


        console.log(HealthText)


    }

}