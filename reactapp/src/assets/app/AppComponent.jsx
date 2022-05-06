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
import { useForceRerenderer } from "../hooks/useForceRenderer"
import { TowerText } from "../components/stats/TowerText"
// export const Game = new CanvasGame(window.innerWidth/2 -500, window.innerHeight/2-250, 1000, 500);

export const AppComponent = () => {
    const init = new StateHandler(new UpdateUIState());
    
    const rerender = useForceRerenderer();

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
        rerender();
    }

    setWindowRect();

    return <div>
        <GameTitle></GameTitle>
        <CanvasComponent canvas={App.canvas}></CanvasComponent>
        <ShopMenu offset={{x:750, y:65}} rect={App.windowRect}></ShopMenu>
        <WaveButton offset={{x:750, y:420}} rect={App.windowRect}></WaveButton>
        <MoneyText offset={{x:170, y:0}} rect={App.windowRect}></MoneyText>
        <HealthText offset={{x:50, y:0}} rect={App.windowRect}></HealthText>
        <WaveText offset={{x:550, y:0}} rect={App.windowRect}></WaveText>
        <TowerText offset={{x:750, y:7}} rect={App.windowRect}></TowerText>
    </div>
    
}
