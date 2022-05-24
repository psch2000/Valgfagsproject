import { App } from "../App"


// Instantiates a composit/game ojbect on a given position.
export const instantiate = (composit, position) =>{
    App.game.addComposit(composit)

    if (position === undefined) return composit;
    composit.transform.position = position;
    return composit;
}