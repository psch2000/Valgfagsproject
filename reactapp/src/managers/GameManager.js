
// A singleton that manages the games flow
export const GameManager = (function() {

    
    // private
    var _instance = null;
    var _context = null;
    

    // public
    var composits = [];

    
    // private
    function makeInstance(){

        return {composits, instantiate, update };
    }

    // public
    // Instantiates a root composit component
    function instantiate (composit) {
        composits.push(composit);
        return composit;
    }

    // POSSIBLE REFACTORING
    // Updates the game loop.
    function update(context){
        if (_context == null){
            _context = context;
        }

        composits.forEach(root => {
            root.update();
            _context.beginPath();
            _context.clearRect(0, 0, window.innerWidth, window.innerHeight);
            root.draw(_context);
            _context.stroke();
        })
    }

 

    // Gets the current instance of type GameManager object
    function getInstance (){
        if (_instance == null){
            _instance = makeInstance();
        }
        return _instance;
    }

    return{
        getInstance,    
    }
})();

