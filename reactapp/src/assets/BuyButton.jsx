import { EventHandler } from "../base/baseBehaviour/EventHandler"




export const BuyButton = ({onClickeEventHandler}) => {

 


    return <button onClick={() => onClickeEventHandler.invoke()} 
    className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
    >Here</button>
}