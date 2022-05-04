import "./stats.css"
import React from "react";

export const HEALTH = 100;

const Styles = [
    "text--style--1"
];


export const HealthText = ({textStyle}) => {

    const CheckTextStyle = Styles.includes(textStyle)
    ? textStyle
    : Styles[0];

    return <p className={`HealthInfo ${CheckTextStyle}`}>
    {HEALTH}
    </p>
}