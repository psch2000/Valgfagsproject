import { DrawIcon } from "../../compositPattern/components/DrawIcon";
import { DrawText } from "../../compositPattern/components/DrawText";
import { Transform } from "../../compositPattern/components/Transform";
import { Composit } from "../../compositPattern/Composit";
import { GameManager } from "../../managers/GameManager";
import { State } from "../State";


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

        GameManager.getInstance().instantiate(WaveText);
        GameManager.getInstance().instantiate(MoneyText);
        GameManager.getInstance().instantiate(MoneyIcon);
        GameManager.getInstance().instantiate(HealthIcon);
        GameManager.getInstance().instantiate(HealthText);
    }

}