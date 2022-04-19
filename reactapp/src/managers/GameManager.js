
// A singleton that manages the games flow
export const GameManager = (function() {

    // private
    var instance = null;

    // public
    var composits = [];

    
    // private
    function makeInstance(){

        return {composits, instantiate };
    }

    // public
    // Instantiates a root composit component
    function instantiate (composit) {
        composits.push(composit);
    }

    // POSSIBLE REFACTORING
    // Runs the game loop.
    function run(){
        while (true){
            composits.forEach(root => {
                root.update();
                root.draw();
            })
        }
    }

    // Gets the current instance of type GameManager object
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

