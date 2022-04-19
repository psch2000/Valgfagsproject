
export const Canvas = (function () {

    var _instance = null;

    const GetInstance = () => {
    
        if (_instance == null){
            _instance = CanvasObject();
        }

        return _instance;
    }


    return { GetInstance }

})();

const CanvasObject = () =>{
    var _value = 0;

    const GetValue = () => _value;
    const SetValue = (value) => _value = value;
    
    return {GetValue, SetValue}
}


