import React, { useEffect, useState } from "react"
import { useInterval } from "../hooks/useInterval";
import { StateManager } from "../statePattern/StateManager";
import { TestState } from "../statePattern/states/TestState";
import { GameManager } from "../managers/GameManager";
import { Canvas } from "../jsx/Canvas";

// MANGLER KOMMENTAR

export const App = () => {

    const [n, setN] = useState(0);
    const interval = useInterval(() => {run()}, 10);
    const appStateManager = new StateManager(new TestState());
    var isRunning = false;
    
    function onClick(){ 
        setN(n + 1);
    }

    function run(context){
        GameManager.getInstance().update(context);
        
    }

    useEffect(() =>{

        appStateManager.execute();
        // var test = new TestClass();


    }, []);




    return <div>
        <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{n}</button>
        <Canvas width={window.innerWidth} height={window.innerHeight} onDraw={run}></Canvas>
    </div>
}