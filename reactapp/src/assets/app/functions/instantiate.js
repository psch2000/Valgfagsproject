import { App } from "../App"


export const instantiate = (composit, position) =>{
    App.game.addComposit(composit, true)
    
    if (position == null) return composit;
    composit.transform.position = position;
    return composit;
}