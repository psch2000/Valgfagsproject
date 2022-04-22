import { useEffect } from "react";
import { Composit } from "../../base/baseStructor/Composit";
import { CanvasGame } from "../../GameEngine/CanvasGame";


export const Game = new CanvasGame(20, 20, 200);


export const App = () => {

    useEffect(() => {
        
        Game.run();
        var c = new Composit("hegne");
        Game.instantiate(c);

        var a = Game.findObjectWithName("hegne");

    }, []);

    
    
    return <div></div>
}