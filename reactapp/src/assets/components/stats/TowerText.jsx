import "./stats.css";
import React, { useEffect, useState } from "react";
import { TowerTextObj } from "./TowerTextObj";
import { useForceRerenderer } from "../../hooks/useForceRenderer";

const Styles = ["text--style--1"];

//this is a text component that display text according to TowerTextObj.js 

export const TowerText = ({ textStyle, rect, offset }) => {
    const [count, setCount] = useState(0);
    const rerender = useForceRerenderer();

    useEffect(() => {
        TowerTextObj.onSetText.addListener(Update);
    }, []);

    function Update() {
        rerender();
    }

    const style = {
        left: `${rect.x + offset.x}px`,
        top: `${rect.y + offset.y}px`,
    };

    const CheckTextStyle = Styles.includes(textStyle) ? textStyle : Styles[0];

    return (
        <p style={style} className={`TowerText ${CheckTextStyle} noselect`}>
            {TowerTextObj.towerText}
        </p>
    );
};
