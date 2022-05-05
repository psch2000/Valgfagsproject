import React, { useEffect, useState } from "react"
import { App } from "./App";
import { CanvasComponent } from "../components/canvas/CanvasComponent";
import { OnEndResize } from "../../events/OnEndResize";
import { StateHandler } from "../../base/baseBehaviour/StateHandler";
import { UpdateUIState } from "./states/initializestates/UpdateUIState";
import { ShopMenu } from "../components/shop/ShopMenu";
import { GameTitle } from "../components/gameTitle/GameTitle";
import { TowerPlacere } from "../components/TowerPlacer";
import { Composit } from "../../base/baseStructor/Composit";
import { SquareRenderer } from "../components/SquareRenderer";
import { FollowPath } from "../components/enemy/FollowPath";
import { Path } from "../components/Path";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { instantiate } from "./functions/instantiate";
import { RectangleCollider } from "../../base/baseStructor/collider/RectangleCollider";
import { MoneyText } from "../components/stats/MoneyText";
import { WaveButton } from "../components/waveButton/WaveButton";
import { HealthText } from "../components/stats/HealthText";
import { WaveText } from "../components/stats/WaveText";
import { PlayerBase } from "../components/PlayerBase";
import { Enemy } from "../components/enemy/Enemy";
// export const Game = new CanvasGame(window.innerWidth/2 -500, window.innerHeight/2-250, 1000, 500);

export const AppComponent = () => {
    const init = new StateHandler(new UpdateUIState());

    useEffect(() =>{
        init.execute();
        OnEndResize.addListener(onEndResize, 0);
        App.run();
        TowerPlacere.getInstance();
        TowerPlacere.getInstance().setActive(false);
        
        placeObjectsOnCanvas();

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

function placeObjectsOnCanvas() {
    let enemyPath = new Path([
        new Vector2d(50, 0),
        new Vector2d(50, 165),
        new Vector2d(215, 160),
        new Vector2d(215, 275),
        new Vector2d(50, 275),
        new Vector2d(50, 410),
        new Vector2d(325, 410),
        new Vector2d(325, 80),
        new Vector2d(575, 80),
        new Vector2d(575, 215),
        new Vector2d(455, 215),
        new Vector2d(455, 345),
        new Vector2d(570, 345),
        new Vector2d(570, 429),
    ], "#ff00ff91", 50);

    let playerBase = new Composit("playerBase");
    playerBase.addComponent(new SquareRenderer(50, 20, "blue"));
    playerBase.addComponent(new PlayerBase(100));
    playerBase.transform.setPosition(new Vector2d(570, 480));
    instantiate(playerBase);

    let enemyComposit = new Composit("testEnemy");
    enemyComposit.addComponent(new SquareRenderer(enemyPath.pathWidth, enemyPath.pathWidth, "red"));
    enemyComposit.addComponent(new FollowPath(enemyPath));
    enemyComposit.addComponent(new Enemy(100, 20, 60));
    enemyComposit.transform.position = enemyPath.waypoints[0].copy()
    instantiate(enemyComposit);
}