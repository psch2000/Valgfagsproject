import React, { useEffect } from "react";
import { useState } from "react";
import { Player } from "../bank/Player";
import { TowerPlacere } from "../../tower/TowerPlacer";
import { TowerTextObj } from "../stats/TowerTextObj";
import "./shop.css";

/*
This ReactComponent is used by the ShopMenu to display buttons of the
towers you can buy in the game
*/

// array to switch between 2 different styles
const Styles = ["btn--shop--solid", "btn--shop--grey--solid"];

// array to switch between different sizes of buttons, it does
// not need more than 1 though.
const Sizes = ["btn--shop", "btn--wave"];


export const ShopButton = ({ towerType, towerName }) => {
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        Player.bank.onSetBalance.addListener(onSetBalance);
        TowerPlacere.getInstance().onCancel.addListener(() => setDisable(false));
        onSetBalance();
    }, []);

    // when clicked towerplacer puts a tower on the curser
    const onClick = () => {
        TowerPlacere.getInstance().setTowerType(towerType);
        TowerPlacere.getInstance().parent.setActive(true);
        setDisable(true);
    };

    // disables buttons with towers that the player cant afford
    function onSetBalance() {
        if (towerType.price <= Player.bank.getBalance()) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }

    // when button is hovered the text at the top of the shop changes to the buttons corresponding tower name
    function onHoverEnter() {
        TowerTextObj.setTowerText(towerName);
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
