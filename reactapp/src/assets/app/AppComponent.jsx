import React, { useEffect, useState } from "react"
import { useForceRerenderer } from "../hooks/useForceRenderer"
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

export const AppComponent = () => {
    const init = new StateHandler(new UpdateUIState());
    const rerenderer = useForceRerenderer();
    

    useEffect(() =>{
        init.execute();
        OnEndResize.addListener(onEndResize, 0);
        App.run();
        TowerPlacere.getInstance();
        TowerPlacere.getInstance().setActive(false);

        console.log("useEffect in AppComponent");

        let enemyPath = new Path([
            new Vector2d(100, 100),
            new Vector2d(200, 100),
            new Vector2d(200, 150),
            new Vector2d(100, 150),
            new Vector2d(100, 200),
            new Vector2d(200, 200),
            new Vector2d(200, 250),
            new Vector2d(100, 250),
            new Vector2d(100, 300),
            new Vector2d(250, 300),
            new Vector2d(250, 100),
            new Vector2d(300, 100),
            new Vector2d(300, 300),
        ]);

        let enemyComposit = new Composit("testEnemy");
        enemyComposit.addComponent(new SquareRenderer(10, 10, "red"));
        enemyComposit.addComponent(new FollowPath(enemyPath));
        enemyComposit.transform.position = new Vector2d(enemyPath.waypoints[0].x, enemyPath.waypoints[0].y);
        instantiate(enemyComposit);

        let testRectangle = new RectangleCollider(10, 10);
        testRectangle.transform.position = new Vector2d(95, 95);


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
        <ShopMenu offset={{x:730, y:75}} rect={App.windowRect}></ShopMenu>
        <GameTitle></GameTitle>
    </div>

}
