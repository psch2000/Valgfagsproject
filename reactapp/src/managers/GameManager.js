

export const GameManager = (function() {

    var instance = null;
    var composits = [];

    function instantiate (composit) {
        composits.push(composit);
    }

    function makeInstance(){

        return {composits, instantiate };
    }

    function getInstance (){
        if (instance == null){
            instance = makeInstance();
        }
        return instance;
    }

    return{
        getInstance,    
    }
})();

