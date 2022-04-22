import { useEffect } from "react";
import { CanvasGame } from "../../GameEngine/CanvasGame";


export const Game = new CanvasGame(20, 20, 200);


export const App = () => {

    useEffect(() => {
        Game.run();
    }, []);
    
    
    return <div></div>
}