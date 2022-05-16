import { useEffect, useState } from "react";
import { Player } from "../bank/Player";





export const RestartMenu = ({offset, rect}) => {

    const [display, setDisplay] = useState(false);

    const style = {
        display: display ? 'inline' : 'none',
        left: `${rect.x + offset.x}px`,
        top: `${rect.y + offset.y}px`,
    }

    const textStyle ={
        WebkitTextStrokeWidth: '1px',
        WebkitTextStrokeColor: 'var(--blue)',
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

    return <button onClick={onClick} style={style} className="absolute bg-blue-500 hover:bg-blue-700 text-white text-3xl font-bold py-2 px-4 rounded">
        <h1 style={textStyle} >RESTART GAME</h1>
  </button>
}