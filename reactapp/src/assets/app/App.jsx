import React, { useEffect, useState } from "react"
import { StateHandler } from "../../base/baseBehaviour/StateHandler"
import { UpdateUIState } from "./states/initializestates/UpdateUIState"
import { GameTitle } from "../components/gameTitle/GameTitle"
import { EventHandler } from "../../base/baseBehaviour/EventHandler"
import { CanvasGame } from "../../GameEngine/CanvasGame"
import { ShopMenu } from "../shop/ShopMenu"
import { ShopMenu } from "../components/shop/ShopMenu"

export const Game = new CanvasGame(window.innerWidth/2 -500, window.innerHeight/2-250, 1000, 500);


export const App = () => {

    const appStateManager = new StateHandler(new UpdateUIState());

    useEffect(() =>{

        Game.run();
        appStateManager.execute();
    }, [])

    return <div>
        <ShopMenu></ShopMenu>
        <GameTitle></GameTitle>
    </div>
    
}
