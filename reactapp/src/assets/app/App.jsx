import { useEffect } from "react";

import { CanvasGame } from "../../GameEngine/CanvasGame";
import { PlaceTower } from "../tower/PlaceTower";

export const Game = new CanvasGame(10, 10, 400);




export const App = () => {


    useEffect(() => {
        Game.run();

        Game.window.onMouseDown.addListener(PlaceTower);


    }, []);

    
    
    return <div></div>
}

