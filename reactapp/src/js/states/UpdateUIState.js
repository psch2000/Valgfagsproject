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

        //draw health text
        var HealthText = new Composit();
        var drawText = HealthText.addComponent(new DrawText());
        HealthText.transform.position = {x:100, y:50}
        drawText.text = 100

        //draw health icon
        var HealthIcon = new Composit();
        var drawIcon = HealthIcon.addComponent(new DrawIcon());
        HealthIcon.transform.position = {x:50, y:50}
        drawIcon.img = document.getElementById("hearticon");
        <img id="hearticon" width="50" height="50"src="./images/heart.png" alt="heart"></img>

        GameManager.getInstance().instantiate(HealthIcon)
        GameManager.getInstance().instantiate(HealthText);
    }

}