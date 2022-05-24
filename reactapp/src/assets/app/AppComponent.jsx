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
import { waveSystem } from "../../backend/Wavesystem";
import { AudioManager } from "../../sound/AudioManager";
import { Unplaceable } from "../tower/Unplaceable";

export const AppComponent = () => {
    const init = new StateHandler(new MakeMapState());
    const rerenderer = useForceRerenderer();

    useEffect(() =>{

        // AudioManager.addSound("pop", "pop.wav");
        init.execute();
        OnEndResize.addListener(onEndResize, 0);
        App.run();
        waveSystem.initialize();
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

        <WaveButton offset={{x:750, y:420}} rect={App.windowRect} onClick={nextRound}></WaveButton>
        <MoneyText offset={{x:170, y: 0}} rect={App.windowRect}></MoneyText>
        <HealthText offset={{x:50, y:0}} rect={App.windowRect}></HealthText>
        <WaveText offset={{x: 550, y:0}} rect={App.windowRect}></WaveText>
        <TowerText offset={{x: 740, y:7}} rect={App.windowRect}></TowerText>
        <RestartMenu offset={{x: 250, y: 230}} rect={App.windowRect}></RestartMenu>
    </div>
}

function nextRound() {
    waveSystem.nextRound();
}

// This method is responsible for placing objects on canvas upon starting the game
function placeObjectsOnCanvas() {
    placeBorders();

    let playerBase = new Composit("playerBase");
    playerBase.addComponent(new SquareRenderer(50, 20, "blue"));
    playerBase.addComponent(new RectangleCollider(50, 20));
    playerBase.addComponent(new Unplaceable());
    playerBase.addComponent(Player.base);
    playerBase.transform.setPosition(new Vector2d(570, 480));
    instantiate(playerBase);
}

// This method is responsible for placing borders around the map
// The borders are given the Unplaceable component, so we can prevent the player from placing towers outside the map.
function placeBorders(){
    let rightBorder = new Composit("rightBorder");
    //rightBorder.addComponent(new SquareRenderer(50, 500, "red"));
    rightBorder.addComponent(new RectangleCollider(50, 500));
    rightBorder.addComponent(new Unplaceable());
    rightBorder.transform.setPosition(new Vector2d(700, 0));
    instantiate(rightBorder);

    let leftBorder = new Composit("leftBorder");
    //leftBorder.addComponent(new SquareRenderer(50, 500, "red"));
    leftBorder.addComponent(new RectangleCollider(50, 500));
    leftBorder.addComponent(new Unplaceable());
    leftBorder.transform.setPosition(new Vector2d(-50, 0));
    instantiate(leftBorder);

    let topBorder = new Composit("topBorder");
    //topBorder.addComponent(new SquareRenderer(700, 50, "red"));
    topBorder.addComponent(new RectangleCollider(700, 50));
    topBorder.addComponent(new Unplaceable());
    topBorder.transform.setPosition(new Vector2d(0, -50));
    instantiate(topBorder);

    let bottomBorder = new Composit("bottomBorder");
    //bottomBorder.addComponent(new SquareRenderer(700, 50, "red"));
    bottomBorder.addComponent(new RectangleCollider(700, 50));
    bottomBorder.addComponent(new Unplaceable());
    bottomBorder.transform.setPosition(new Vector2d(0, 500));
    instantiate(bottomBorder);
}