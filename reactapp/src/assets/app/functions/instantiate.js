import { App } from "../App"


export const instantiate = (composit, position) =>{
    App.game.addComposit(composit)

    if (position === undefined) return composit;
    composit.transform.position = position;
    return composit;
}