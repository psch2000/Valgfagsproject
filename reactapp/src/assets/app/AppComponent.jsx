import React, { useEffect, useState } from "react"
import { StateHandler } from "../../base/baseBehaviour/StateHandler";
import { OnEndResize } from "../../events/OnEndResize";
import { CanvasComponent } from "../components/canvas/CanvasComponent";
import { GameTitle } from "../components/gameTitle/GameTitle";
import { ShopMenu } from "../components/shop/ShopMenu";
import { HealthText } from "../components/stats/HealthText";
import { MoneyText } from "../components/stats/MoneyText";
import { WaveText } from "../components/stats/WaveText";
import { TowerPlacere } from "../components/TowerPlacer";
import { WaveButton } from "../components/waveButton/WaveButton";
import { useForceRerenderer } from "../hooks/useForceRenderer";
import { App } from "./App";
import { MakeMapState } from "./states/initializestates/MakeMapState";
import { UpdateUIState } from "./states/initializestates/UpdateUIState"
import { TowerText } from "../components/stats/TowerText"
// export const Game = new CanvasGame(window.innerWidth/2 -500, window.innerHeight/2-250, 1000, 500);

export const AppComponent = () => {
    const init = new StateHandler(new MakeMapState());
    const rerenderer = useForceRerenderer();
    

    useEffect(() =>{
        init.execute();
        OnEndResize.addListener(onEndResize, 0);
        App.run();
        TowerPlacere.getInstance();
        TowerPlacere.getInstance().setActive(false);

        // console.log("useEffect in AppComponent");

        // let enemyPath = new Path([
        //     new Vector2d(100, 100),
        //     new Vector2d(200, 100),
        //     new Vector2d(200, 150),
        //     new Vector2d(100, 150),
        //     new Vector2d(100, 200),
        //     new Vector2d(200, 200),
        //     new Vector2d(200, 250),
        //     new Vector2d(100, 250),
        //     new Vector2d(100, 300),
        //     new Vector2d(250, 300),
        //     new Vector2d(250, 100),
        //     new Vector2d(300, 100),
        //     new Vector2d(300, 300),
        // ]);

        // let enemyComposit = new Composit("testEnemy");
        // enemyComposit.addComponent(new SquareRenderer(10, 10, "red"));
        // enemyComposit.addComponent(new FollowPath(enemyPath));
        // enemyComposit.transform.position = new Vector2d(enemyPath.waypoints[0].x, enemyPath.waypoints[0].y);
        // instantiate(enemyComposit);

        // let testRectangle = new RectangleCollider(10, 10);
        // testRectangle.transform.position = new Vector2d(95, 95);


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
        <GameTitle></GameTitle>
        <CanvasComponent canvas={App.canvas}></CanvasComponent>
        <ShopMenu offset={{x:750, y:60}} rect={App.windowRect}></ShopMenu>
        <WaveButton offset={{x:750, y:420}} rect={App.windowRect}></WaveButton>
        <MoneyText offset={{x:170, y: 0}} rect={App.windowRect}></MoneyText>
        <HealthText offset={{x:50, y:0}} rect={App.windowRect}></HealthText>
        <WaveText offset={{x: 550, y:0}} rect={App.windowRect}></WaveText>
        <TowerText offset={{x: 750, y:7}} rect={App.windowRect}></TowerText>
    </div>

}
