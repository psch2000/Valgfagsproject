import { useEffect } from "react";
import { StateHandler } from "../../base/baseBehaviour/StateHandler";
import { CanvasGame } from "../../GameEngine/CanvasGame";
import { SpawnTestState } from "./states/SpawnTestState";


export const Game = new CanvasGame(20, 20, 200);


export const App = () => {

    var initializeStateHandler = new StateHandler(new SpawnTestState());

    useEffect(() => {
        
        Game.run();
        initializeStateHandler.execute();
        console.log("Has initialized...");
    }, []);

    
    
    return <div></div>
}

