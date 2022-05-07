import { Component } from "../../base/baseStructor/Component";
import { Input } from "../../GameEngine/input/Input";
import { Enemy } from "../components/enemy/Enemy";


export class TowerRange extends Component{


    
    constructor(){
        super();
        this.enemiesInRange = [];
    }


    onEnter(other){

        var enemy = other.getComponent(Enemy);

        if (enemy == null) return;
        this.enemiesInRange.push(enemy);
    }

    onExit(other){
        var enemy = other.getComponent(Enemy);

        if (enemy == null) return;
        var index = this.enemiesInRange.indexOf(enemy);
        this.enemiesInRange.splice(index, 1);
    }




}