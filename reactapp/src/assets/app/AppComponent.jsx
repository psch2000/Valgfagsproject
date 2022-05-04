import React, { useEffect, useState } from "react"
import { App } from "./App"
import { CanvasComponent } from "../components/canvas/CanvasComponent"
import { OnEndResize } from "../../events/OnEndResize"
import { StateHandler } from "../../base/baseBehaviour/StateHandler"
import { UpdateUIState } from "./states/initializestates/UpdateUIState"
import { ShopMenu } from "../components/shop/ShopMenu"
import { GameTitle } from "../components/gameTitle/GameTitle"
import { TowerPlacere } from "../components/TowerPlacer"
import { WaveButton } from "../components/waveButton/WaveButton"
import { MoneyText } from "../components/stats/MoneyText"
import { HealthText } from "../components/stats/HealthText"
import { WaveText } from "../components/stats/WaveText"
// export const Game = new CanvasGame(window.innerWidth/2 -500, window.innerHeight/2-250, 1000, 500);

export const AppComponent = () => {
    const init = new StateHandler(new UpdateUIState());
    
    useEffect(() =>{
        init.execute();
        OnEndResize.addListener(onEndResize, 0);
        App.run();
        TowerPlacere.getInstance();
        TowerPlacere.getInstance().setActive(false);

    }, [])

    const setWindowRect = () => {
        var rect = App.windowRect;
        rect.x = window.innerWidth / 2 - 500;
        rect.y = window.innerHeight / 2 - 250;
        rect.width = 1000;
        rect.height = 500;
    }

    const onEndResize = () => {
        setWindowRect();
    }

    setWindowRect();

    return <div>
        <CanvasComponent canvas={App.canvas}></CanvasComponent>
        <ShopMenu offset={{x:750, y:65}} rect={App.windowRect}></ShopMenu>
        <GameTitle></GameTitle>
        <WaveButton></WaveButton>
        <MoneyText></MoneyText>
        <HealthText></HealthText>
        <WaveText></WaveText>
    </div>
    
}
