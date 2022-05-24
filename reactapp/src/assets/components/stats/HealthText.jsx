import "./stats.css"
import React, { useEffect } from "react";
import { Player } from "../bank/Player";
import { useForceRerenderer } from "../../hooks/useForceRenderer";


const Styles = [
    "text--style--1"
];

//this is a text component that display the amount of health the player has
export const HealthText = ({textStyle, rect, offset}) => {

    const rerender = useForceRerenderer();

    const style = {
        left: `${rect.x + offset.x}px`,
        top: `${rect.y + offset.y}px`,
    }

    useEffect(() => {
        Player.base.onSetHealth.addListener(onSetHealth);
    }, [])

    function onSetHealth (){
        rerender();
    }
      
    const CheckTextStyle = Styles.includes(textStyle)
    ? textStyle
    : Styles[0];

    return <p style={style} className={`HealthInfo ${CheckTextStyle} noselect`}>
    {Player.base.health}
    </p>
}