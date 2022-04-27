import React, { useEffect, useState } from "react"
import {Component } from "../../base/baseStructor/Component"
import { Transform } from "../../base/baseStructor/Transform"
import { Composit } from "../../base/baseStructor/Composit"
import { StateHandler } from "../../base/baseBehaviour/StateHandler"
import { UpdateUIState } from "../../js/states/UpdateUIState"
import { GameTitle } from "../../jsx/GameTitle"
import { Tower } from "../components/Tower"
import { EventHandler } from "../../base/baseBehaviour/EventHandler"
import { CanvasGame } from "../../GameEngine/CanvasGame"
import { ShopMenu } from "../shop/ShopMenu"


export const Game = new CanvasGame(0, window.innerHeight/2-270, 1000, 500);


export const App = () => {

    const [n, setN] = useState(0);
    const appStateManager = new StateHandler(new UpdateUIState());
    var isRunning = false;

    function onClick(){ 
        setN(n + 1);
    }

    function run(context){
        // CanvasGame.getInstance().update(context);
    }
    var onClick = new EventHandler();

    useEffect(() =>{

        Game.run();
        appStateManager.execute();

        
        var c = new Composit();


        // console.log(v.x);
        // c.addComponent(new Tower(onClick));


        // var weapon = c.addComponent(new Weapon(Vector2d.right, 1));
        c.addComponent(new Tower(onClick));


        Game.instantiate(c);
        // var c = new Composit();
        // c.addComponent(new DrawGrid());
        // Game.instantiate(c);
    }, [])

    return <div>
        <ShopMenu></ShopMenu>
        {/* <TowerMenuSystem></TowerMenuSystem> */}
        {/* <MoneyText></MoneyText> */}
        <GameTitle></GameTitle>
        {/* <BuyButton onClickeEventHandler={onClick}></BuyButton> */}
        {/* <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{n}</button> */}
    </div>
    
}

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
