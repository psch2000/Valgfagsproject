import {shop} from "./shop.css"



export const ShopItemComponent = ({imagePath, price}) => {


    return <button className=" shopButton
    bg-blue-500 hover:bg-blue-700
    text-white font-bold py-2 px-4 rounded">
        <div className="m-auto w-1/2">
            <img className="mt-9" src={imagePath}></img>
            <p className="mt-1">{price}$</p>
        </div>
        
    </button>
}