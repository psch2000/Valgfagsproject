import { EventHandler } from "../../../base/baseBehaviour/EventHandler";

export class TowerTextObj{
    
    static towerText = "Hello Player!";

    static onSetText = new EventHandler();

    static setTowerText(newText) {
        this.towerText = newText;
        this.onSetText.invoke();
    }
}