import React, { useEffect } from "react";
import { CanvasComponent } from "./assets/components/canvas/CanvasComponent";
import { OnEndResize } from "./events/OnEndResize";
import { App } from "./assets/app/App";
import { useForceRerenderer } from "./assets/hooks/useForceRenderer";
import { Vector2d } from "./base/baseStructor/Vector2d";
import { Composit } from "./base/baseStructor/Composit";
import { instantiate } from "./assets/app/functions/instantiate";
import { CircleRenderer } from "./assets/components/CircleRenderer";
import { GameTitle } from "./assets/components/gameTitle/GameTitle";
import { getAnglesEquallySpaces, getPointsOnCircleCircumference } from "./base/baseStructor/CircleFunctions";

export const TestDraw = () => {
    const rerenderer = useForceRerenderer();

    useEffect(() => {
        OnEndResize.addListener(onEndResize, 0);
        App.run();

        placeStuffOnCanvas();
    }, []);

    const setWindowRect = () => {
        var rect = App.windowRect;
        rect.x = window.innerWidth / 2 - 500;
        rect.y = window.innerHeight / 2 - 250;
        rect.width = 1000;
        rect.height = 500;
    };

    const onEndResize = () => {
        setWindowRect();
        rerenderer();
    };

    setWindowRect();

    return (
        <>
            <CanvasComponent canvas={App.canvas} />
            <GameTitle />
        </>
    );
};

function placeStuffOnCanvas() {
    // towards left
    let tower1Position = new Vector2d(425, 250);
    let enemy1Position = new Vector2d(150, 250);

    // towards right
    let tower2Position = new Vector2d(575, 250);
    let enemy2Position = new Vector2d(850, 250);

    // towards down
    let tower3Position = new Vector2d(500, 325);
    let enemy3Position = new Vector2d(500, 475);

    // towards up
    let tower4Position = new Vector2d(500, 175);
    let enemy4Position = new Vector2d(500, 25);

    let radius = 10;

    createCompositWithCircleRenderer("tower1-left", radius, "#ffffff", tower1Position);
    createCompositWithCircleRenderer("enemy1-left", radius, "#ff00ff", enemy1Position);

    createCompositWithCircleRenderer("tower2-right", radius, "#ffffff", tower2Position);
    createCompositWithCircleRenderer("enemy2-right", radius, "#ff00ff", enemy2Position);

    createCompositWithCircleRenderer("tower3-down", radius, "#ffffff", tower3Position);
    createCompositWithCircleRenderer("enemy3-down", radius, "#ff00ff", enemy3Position);

    createCompositWithCircleRenderer("tower4-up", radius, "#ffffff", tower4Position);
    createCompositWithCircleRenderer("enemy4-up", radius, "#ff00ff", enemy4Position);

    let numPoints = 10;
    let towerRange = 50;

    let testVector = Vector2d.down;
    console.log("Vector angle: (" + testVector.x + ", " + testVector.y + ") - Angle: " + testVector.getAngle());
    // createCompositWithCircleRenderer("testCenter", 3, "white", testVector);

    circles("left", tower1Position, towerRange, enemy1Position, numPoints);
    circles("right", tower2Position, towerRange, enemy2Position, numPoints);
    circles("down", tower3Position, towerRange, enemy3Position, numPoints);
    circles("up", tower4Position, towerRange, enemy4Position, numPoints);
}

function circles(noteString, towerPosition, towerRange, enemyPosition, numPointsOnCircle) {
    console.log(noteString);

    let lookDirection = Vector2d.subtract(enemyPosition, towerPosition).normalize();

    let circleOffset = Vector2d.multiply(lookDirection, new Vector2d(towerRange, towerRange));
    let circleCenter = Vector2d.add(towerPosition, circleOffset);

    let points = getPointsOnCircleCircumference(
        circleCenter,
        towerRange,
        getAnglesEquallySpaces(numPointsOnCircle, false),
        towerPosition,
        lookDirection,
        // true,
    );

    let colors = [
        "#0000ff",
        "#00ff00",
        "#ff0000",
        "#00aeae",
        "#feb300",
        "#cc00af",
        "#ffff00",
        "#7308a5",
        "#ff7f00",
        "#007900",
        "#ff4600",
        "#ba00ff",
    ];

    points.forEach((point, index) => {
        let pointComposit = new Composit("circlePoint");
        let color = index < colors.length ? colors[index] : colors[index - colors.length]
        pointComposit.addComponent(new CircleRenderer(5, color, index === 0 ? true : false));
        pointComposit.transform.position = point;
        instantiate(pointComposit);
    });

    console.log("---------");
}

function createCompositWithCircleRenderer(name, radius, color, position) {
    let composit = new Composit(name);
    composit.addComponent(new CircleRenderer(radius, color, false));
    composit.transform.position = position;
    instantiate(composit);
}
