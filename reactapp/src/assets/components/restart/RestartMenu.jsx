import { useEffect, useState } from "react";
import { Player } from "../bank/Player";
import "../shop/shop.css";

const Styles = [
    "btn--primary--solid",
    "btn--shop--grey--solid",
    "btn--succes--solid",
    "btn--lost--solid"
  ];

  const Sizes = ["btn--shop", "btn--wave", "btn--lost"];


export const RestartMenu = ({
    onClick,
    buttonStyle, 
    buttonSize,
    rect, 
    offset
    }) => {

    const [display, setDisplay] = useState(false);

    const CheckButtonStyle = Styles.includes(buttonStyle) 
    ? buttonStyle 
    : Styles[3];
  
    const CheckButtonSize = Sizes.includes(buttonSize)
    ? buttonSize
    : Sizes[2];

    const style = {
        display: display ? 'inline' : 'none',
        left: `${rect.x + offset.x}px`,
        top: `${rect.y + offset.y}px`,
    }    

    useEffect(() => {
        Player.base.onSetHealth.addListener(onSetHealth);
    }, [])
    
    function onSetHealth(){
        setDisplay(Player.base.isDead());
    }

    function onClick(){
        window.location.reload();
    }

    return(
        <button style={style}
          className={`btn ${CheckButtonStyle} ${CheckButtonSize}`} onClick={onClick}>
            <div className="lostContainer">
                <p> RESTART GAME</p>                
            </div>
        </button>
    )
};