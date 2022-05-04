import "./stats.css"
import React from "react";

export const MONEY = 20650;

const Styles = [
    "text--style--1"
];


export const MoneyText = ({textStyle, rect, offset}) => {

    const style = {
        left: `${rect.x + offset.x}px`,
        top: `${rect.y + offset.y}px`,
    }

    const CheckTextStyle = Styles.includes(textStyle)
    ? textStyle
    : Styles[0];

    return <p style={style} className={`MoneyInfo ${CheckTextStyle}`}>
    {"$" + MONEY}
    </p>
}