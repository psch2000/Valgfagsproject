import React, { useEffect, useState } from "react"
import { CanvasComponent } from "../components/canvas/CanvasComponent";
import { OnEndResize } from "../../events/OnEndResize";
import { StateHandler } from "../../base/baseBehaviour/StateHandler";
import { GameTitle } from "../components/gameTitle/GameTitle";
import { ShopMenu } from "../components/shop/ShopMenu";
import { HealthText } from "../components/stats/HealthText";
import { MoneyText } from "../components/stats/MoneyText";
import { Composit } from "../../base/baseStructor/Composit";
import { SquareRenderer } from "../components/SquareRenderer";
import { FollowPath } from "../components/enemy/FollowPath";
import { Path } from "../components/Path";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { instantiate } from "./functions/instantiate";
import { RectangleCollider } from "../../base/baseStructor/collider/RectangleCollider";
import { WaveButton } from "../components/waveButton/WaveButton";
import { WaveText } from "../components/stats/WaveText";
import { App } from "./App";
import { TowerPlacere } from "../tower/TowerPlacer";
import { PlayerBase } from "../components/PlayerBase";
import { Enemy } from "../components/enemy/Enemy";
import { useForceRerenderer } from "../hooks/useForceRenderer";
import { MakeMapState } from "./states/initializestates/MakeMapState";
import { TowerText } from "../components/stats/TowerText";
import { Player } from "../components/bank/Player";
import { RestartMenu } from "../components/restart/RestartMenu";

let path = null;

export const AppComponent = () => {
    const init = new StateHandler(new MakeMapState());
    const rerenderer = useForceRerenderer();

    useEffect(() =>{


        init.execute();
        OnEndResize.addListener(onEndResize, 0);
        App.run();
        TowerPlacere.getInstance().parent.setActive(false);
        
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
        rerenderer();
    }

    setWindowRect();

    return <div>
        <CanvasComponent canvas={App.canvas}></CanvasComponent>
        <ShopMenu offset={{x:750, y:65}} rect={App.windowRect}></ShopMenu>
        <GameTitle></GameTitle>

        <WaveButton offset={{x:750, y:420}} rect={App.windowRect} onClick={createEnemy}></WaveButton>
        <MoneyText offset={{x:170, y: 0}} rect={App.windowRect}></MoneyText>
        <HealthText offset={{x:50, y:0}} rect={App.windowRect}></HealthText>
        <WaveText offset={{x: 550, y:0}} rect={App.windowRect}></WaveText>
        <TowerText offset={{x: 750, y:7}} rect={App.windowRect}></TowerText>
        <RestartMenu offset={{x: 250, y: 230}} rect={App.windowRect}></RestartMenu>
    </div>

    
}

function createEnemy() {
    console.log("create enemy");
    let enemyComposit = new Composit("enemy");
    enemyComposit.addComponent(new SquareRenderer(path.pathWidth, path.pathWidth, "red"));
    enemyComposit.addComponent(new RectangleCollider(path.pathWidth, path.pathWidth, false));
    enemyComposit.addComponent(new FollowPath(path));
    enemyComposit.addComponent(new Enemy(100, 20, 60));
    enemyComposit.transform.position = path.waypoints[0].copy()
    instantiate(enemyComposit);
}

function placeObjectsOnCanvas() {
    path = new Path([
        new Vector2d(50, 0),
        new Vector2d(50, 165),
        new Vector2d(215, 165),
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
    playerBase.addComponent(Player.base);
    playerBase.transform.setPosition(new Vector2d(570, 480));
    instantiate(playerBase);
}