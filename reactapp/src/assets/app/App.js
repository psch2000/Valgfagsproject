import { Game } from "../../backend/Game";
import { Rect } from "../../backend/data-structors/Rect";
import { Canvas } from "../components/canvas/Canvas";


export class App{
    static windowRect = new Rect(0,0,0,0);
    static canvas = new Canvas(App.windowRect);
    static game = new Game(App.canvas);

    static run(){
        this.game.run();
    }
}