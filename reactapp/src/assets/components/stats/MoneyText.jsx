import "./stats.css"
import React from "react";

export const MONEY = 20650;

const Styles = [
    "text--style--1"
];


export const MoneyText = ({textStyle}) => {

    const CheckTextStyle = Styles.includes(textStyle)
    ? textStyle
    : Styles[0];

    return <p className={`MoneyInfo ${CheckTextStyle}`}>
    {"$" + MONEY}
    </p>
}