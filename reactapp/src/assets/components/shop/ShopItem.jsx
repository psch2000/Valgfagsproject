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

// array to switch between 3 different styles
const Styles = ["btn--shop--solid", "btn--shop--grey--solid", "btn--succes--solid", "btn--shop--selected"];

export const ShopButton = ({ towerType, towerName }) => {
    const [selected, setSelected] = useState(false);
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        // add listener to when bank balance changes
        Player.bank.onSetBalance.addListener(onSetBalance);
        // add listener to when the selected tower changes
        TowerPlacere.getInstance().onSelectedTowerChange.addListener(onSelectedTowerChange);

        // check if this button is affordable at the start
        onSetBalance();

        return () => {
            // clean up the listeners
            Player.bank.onSetBalance.removeListener(onSetBalance);
            TowerPlacere.getInstance().onSelectedTowerChange.removeListener(onSelectedTowerChange);
        };
    }, []);

    const onSelectedTowerChange = () => {
        // if this button is selected, then set it selected else unselect it
        const isSelected = towerType === TowerPlacere.getInstance().getTowerType();
        setSelected(isSelected);

        // if this button is unaffordable, then disable this button else enable it
        const unaffordable = towerType.price > Player.bank.getBalance();
        setDisable(unaffordable);
    };

    // when clicked towerplacer puts a tower on the curser
    const onClick = () => {
        // set tower type in TowerPlacere to this buttons tower type
        TowerPlacere.getInstance().setTowerType(towerType);
    };

    // disables buttons with towers that the player cant afford
    function onSetBalance() {
        // if this button is unaffordable, then disable this button else enable it
        const unaffordable = towerType.price > Player.bank.getBalance();
        setDisable(unaffordable);
    }

    // when button is hovered the text at the top of the shop changes to the buttons corresponding tower name
    function onHoverEnter() {
        // when hover this button, set the tower text to be this buttons towers name
        TowerTextObj.setTowerText(towerName);
    }

    // set button style which is depending on if the button is disabled or selected
    const buttonStyle = disable ? Styles[1] : selected ? Styles[3] : Styles[0];

    return (
        <button
            onMouseEnter={onHoverEnter}
            className={`btn ${buttonStyle} btn--shop`}
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
