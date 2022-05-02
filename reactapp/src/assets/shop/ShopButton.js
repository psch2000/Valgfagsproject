import { EventHandler } from "../../base/baseBehaviour/EventHandler";


export class ShopButton{

    constructor(){
        this.onClick = new EventHandler();
        this.onClick.addListener(this.handleOnClick);
    }


    handleOnClick(){
        console.log("here");
    }


}