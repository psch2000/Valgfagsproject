import React, { useEffect } from "react";
import { waveSystem } from "../../../backend/Wavesystem";
import { useForceRerenderer } from "../../hooks/useForceRenderer";
import { TowerTextObj } from "../stats/TowerTextObj";
import "../shop/shop.css";

const Styles = ["btn--primary--solid", "btn--shop--grey--solid", "btn--succes--solid"];

const Sizes = ["btn--shop", "btn--wave"];

export const WaveButton = ({ onClick, rect, offset }) => {
    const rerender = useForceRerenderer();

    useEffect(() => {
        waveSystem.onWaveChange.addListener(onWaveChange);
    }, []);

    function onWaveChange() {
        changeTowerText();
        rerender();
    }

    function handleOnClick() {
        onClick();
        changeTowerText();
    }

    function onHoverEnter() {
        changeTowerText();
    }

    function changeTowerText() {
        let text = waveSystem.isWaveActive ? "Round is active" : "Start round";
        TowerTextObj.setTowerText(text);
    }

    const buttonStyle = waveSystem.isWaveActive ? Styles[1] : Styles[2];
    const buttonSize = Sizes[1];

    const style = {
        left: `${rect.x + offset.x}px`,
        top: `${rect.y + offset.y}px`,
    };

    return (
        <button
            style={style}
            onMouseEnter={onHoverEnter}
            className={`btn ${buttonStyle} ${buttonSize}`}
            onClick={handleOnClick}
        >
            <div className="waveContainer">
                <img draggable={false} className="waveIcon noselect" src="./images/sprite_play.png"></img>
            </div>
        </button>
    );
};
