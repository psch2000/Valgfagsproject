import { useEffect } from "react";

import { CanvasGame } from "../../GameEngine/CanvasGame";


export const Game = new CanvasGame(0, 0, 400);




export const App = () => {


    useEffect(() => {
        Game.run();


    }, []);

    
    
    return <div></div>
}

