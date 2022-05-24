import { EventHandler } from "../../../base/baseBehaviour/EventHandler";

//this sets the text that TowerText.jsx displays
export class TowerTextObj{
    
    static towerText = "Hello Player!";

    static onSetText = new EventHandler();

    static setTowerText(newText) {
        this.towerText = newText;
        this.onSetText.invoke();
    }
}