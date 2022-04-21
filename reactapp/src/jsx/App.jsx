import React, { useEffect, useState } from "react"
import { Component } from "../compositPattern/Component"
import { Transform } from "../compositPattern/components/Transform"
import { Composit } from "../compositPattern/Composit"
import { SquareFactory } from "../factoryMethod/factories/SquareFactory"
import { useInterval } from "../hooks/useInterval"
import { StateManager } from "../js/StateManager"
import { TestState } from "../js/states/TestState"
import {GameManager} from "../managers/GameManager"
import { Canvas } from "./Canvas"
import { GameTitle } from "./GameTitle"

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
        

    }, [])




    return <div>
        <GameTitle></GameTitle>
        <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{n}</button>
        <Canvas width={window.innerWidth} height={window.innerHeight} onDraw={run}></Canvas>
    </div>
}