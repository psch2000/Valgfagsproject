import React, { useEffect } from "react";
import { useForceRerenderer } from "../../hooks/useForceRenderer";
import { waveSystem } from "../../../backend/Wavesystem";
import "./stats.css"

const Styles = [
    "text--style--1"
];

//this is a text component that display the current wave
export const WaveText = ({textStyle, rect, offset}) => {
    const rerenderer = useForceRerenderer();

    useEffect(() => {
        waveSystem.onWaveChange.addListener(onUpdateWave);
    }, [])

    function onUpdateWave() {
        rerenderer();
    }

    const style = {
        left: `${rect.x + offset.x}px`,
        top: `${rect.y + offset.y}px`,
    }

    const CheckTextStyle = Styles.includes(textStyle)
    ? textStyle
    : Styles[0];

    return <p style={style} className={`WaveInfo ${CheckTextStyle} noselect`}>
    {"ROUND " + waveSystem.round}
    </p>
}