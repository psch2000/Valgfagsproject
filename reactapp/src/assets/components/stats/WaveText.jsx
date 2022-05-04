import "./stats.css"
import React from "react";

export const WAVE = 0;

const Styles = [
    "text--style--1"
];


export const WaveText = ({textStyle}) => {

    const CheckTextStyle = Styles.includes(textStyle)
    ? textStyle
    : Styles[0];

    return <p className={`WaveInfo ${CheckTextStyle}`}>
    {"ROUND " + WAVE}
    </p>
}