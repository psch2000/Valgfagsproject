import { useEffect } from "react";

import { CanvasGame } from "../../GameEngine/CanvasGame";
import { FireProjectile } from "../tower/FireProjectile";
import { PlaceTower } from "../tower/PlaceTower";

export const Game = new CanvasGame(10, 10, 400);




export const App = () => {


    useEffect(() => {
        Game.run();

        Game.window.onMouseDown.addListener(PlaceTower);
        Game.window.onMouseDown.addListener(FireProjectile);


    }, []);

    
    
    return <div></div>
}

