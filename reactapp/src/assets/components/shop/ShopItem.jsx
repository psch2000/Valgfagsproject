import React, { useEffect } from "react";
import { useState } from "react";
import { Player } from "../bank/Player";
import { TowerPlacere } from "../../tower/TowerPlacer";
import { TowerTextObj } from "../stats/TowerTextObj";
import "./shop.css";

const Styles = ["btn--shop--solid", "btn--shop--grey--solid", "btn--succes--solid"];

const Sizes = ["btn--shop", "btn--wave"];

export const ShopButton = ({ towerType, towerName }) => {
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        Player.bank.onSetBalance.addListener(onSetBalance);
        TowerPlacere.getInstance().onCancel.addListener(() => setDisable(false));
        onSetBalance();
    }, []);

    const onClick = () => {
        TowerPlacere.getInstance().setTowerType(towerType);
        TowerPlacere.getInstance().parent.setActive(true);
        setDisable(true);
    };

    function onSetBalance() {
        if (towerType.price <= Player.bank.getBalance()) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }

    function onHoverEnter() {
        TowerTextObj.towerText = towerName;
        TowerTextObj.onSetText.invoke();
    }

    const buttonStyle = disable ? Styles[1] : Styles[0];
    const buttonSize = Sizes[0];

    return (
        <button
            onMouseEnter={onHoverEnter}
            className={`btn ${buttonStyle} ${buttonSize}`}
            onClick={onClick}
            disabled={disable}
        >
            <div className="shopInfo">
                <img draggable={false} className="shopImage noselect" src={towerType.imagePath} alt="" />
                <p className="shopPrice noselect">{towerType.price}$</p>
            </div>
        </button>
    );
};
