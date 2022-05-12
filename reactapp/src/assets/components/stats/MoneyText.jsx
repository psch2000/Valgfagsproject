import "./stats.css"
import React, { useEffect } from "react";
import { Player } from "../bank/Player";
import { useForceRerenderer } from "../../hooks/useForceRenderer";
import { render } from "@testing-library/react";

export const MONEY = 20650;

const Styles = [
    "text--style--1"
];


export const MoneyText = ({textStyle, rect, offset}) => {

    const rerender = useForceRerenderer();

    useEffect(() => {
        Player.bank.onSetBalance.addListener(rerender);
    }, [])

    const style = {
        left: `${rect.x + offset.x}px`,
        top: `${rect.y + offset.y}px`,
    }

    const CheckTextStyle = Styles.includes(textStyle)
    ? textStyle
    : Styles[0];

    return <p style={style} className={`MoneyInfo ${CheckTextStyle}`}>
    {"$" + Player.bank.getBalance()}
    </p>
}