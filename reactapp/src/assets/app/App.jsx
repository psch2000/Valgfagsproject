import React, { useEffect, useState } from "react"
import {Component } from "../../base/baseStructor/Component"
import { Transform } from "../../base/baseStructor/Transform"
import { Composit } from "../../base/baseStructor/Composit"
import { useInterval } from "../hooks/useInterval"
import { StateHandler } from "../../base/baseBehaviour/StateHandler"
import { UpdateUIState } from "../../js/states/UpdateUIState"
import { Canvas } from "../../GameEngine/Canvas"
import { GameTitle } from "../../jsx/GameTitle"
import { CanvasGame } from "../../GameEngine/CanvasGame";
import { DrawGrid } from "../../base/baseStructor/DrawGrid"
// MANGLER KOMMENTAR

export const Game = new CanvasGame(window.innerWidth/2 -540, window.innerHeight/2-270, 1000, 500);

export const App = () => {

    const [n, setN] = useState(0);
    const appStateManager = new StateHandler(new UpdateUIState());
    var isRunning = false;

    function onClick(){ 
        setN(n + 1);
    }

    function run(context){
        // CanvasGame.getInstance().update(context);
    }

    useEffect(() =>{

        Game.run();
        appStateManager.execute();
        
        // var c = new Composit();
        // c.addComponent(new DrawGrid());
        // Game.instantiate(c);
    }, [])


    return <div>
        <GameTitle></GameTitle>
        <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{n}</button>
    </div>
}
