import { DrawIcon } from "../../base/baseStructor/DrawIcon";
import { DrawText } from "../../base/baseStructor/DrawText";
import { Transform } from "../../base/baseStructor/Transform";
import { Composit } from "../../base/baseStructor/Composit";
import { CanvasGame } from "../../GameEngine/CanvasGame";
import { State } from "../../base/baseBehaviour/State";


export class UpdateUIState extends State{

    constructor(){
        super();
    }

    execute(){

        //draw health icon
        var HealthIcon = new Composit();
        var heartIcon = HealthIcon.addComponent(new DrawIcon());
        HealthIcon.transform.position.x = 25;
        HealthIcon.transform.position.y = 25;
        HealthIcon.transform.size.height = 50;
        HealthIcon.transform.size.width = 50;
        heartIcon.img = document.getElementById("hearticon");

        //draw health text
        var HealthText = new Composit();
        var heartText = HealthText.addComponent(new DrawText());
        HealthText.transform.position.x = 75;
        HealthText.transform.position.y = 60;
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

        CanvasGame.getInstance().instantiate(ShopUI);
        CanvasGame.getInstance().instantiate(WaveText);
        CanvasGame.getInstance().instantiate(MoneyText);
        CanvasGame.getInstance().instantiate(MoneyIcon);
        CanvasGame.getInstance().instantiate(HealthIcon);
        CanvasGame.getInstance().instantiate(HealthText);
    }

}