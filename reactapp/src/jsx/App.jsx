import React, { useEffect } from "react"
import { Composit } from "../components/Composit"
import {GameManager} from "../managers/GameManager"

// MANGLER KOMMENTAR

export const App = () => {

    useEffect(() =>{
        GameManager.getInstance().instantiate(new Composit());
        console.log(GameManager.getInstance());
    }, [])

    return <div>
       
    </div>
}