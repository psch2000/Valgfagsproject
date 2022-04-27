
export const MONEY = 650;


export const MoneyText = () => {

    const style = {
        left: '600px',
        top: '100px',
    }


    return <p className="absolute text-3xl" style={style}>
        {MONEY + "$"}
    </p>

}