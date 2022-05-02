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
import { FollowMouse } from "../components/FollowMouse"
import { Cursor } from "../components/composits/Cursor"
import { TowerPlacer } from "../components/TowerPlacer"


export const Game = new CanvasGame(0, window.innerHeight/2-270, 1000, 500);


export const App = () => {

    const appStateManager = new StateHandler(new UpdateUIState());

    useEffect(() =>{

        Game.run();
        appStateManager.execute();
    }, [])

    return <div>
        <ShopMenu></ShopMenu>
        <GameTitle></GameTitle>
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
