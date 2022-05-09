import { RgbColor } from "../../base/baseStructor/RgbColor";
import { SingleFirePattern } from "./firePattern/patterns/SingleFirePattern";
import { TackShooterFirePattern } from "./firePattern/patterns/TackShooterFirePattern";
import { TrippleFirePattern } from "./firePattern/patterns/TrippleFirePattern";

export class TowerType{
    
        static blueTower = new TowerType("Blue Tower", 30, '#0000ff', 100, "./images/test_tower.png", 10, SingleFirePattern());
        static redTower = new TowerType("Red Tower", 35, '#ff0000', 200, "./images/test_tower.png", 10, TrippleFirePattern());
        static greenTower = new TowerType("Green Tower", 40, '#00ff00', 300, "./images/test_tower.png", 10, TackShooterFirePattern());
        static whiteTower = new TowerType("White Tower", 50, '#ffffff', 500, "./images/test_tower.png", 10, SingleFirePattern());
        static yellowTower = new TowerType("Yellow Tower", 100, '#ffff00', 1000, "./images/test_tower.png", 10, TrippleFirePattern());
        static orangeTower = new TowerType("Orange Tower", 200, '#ffa500', 2000, "./images/test_tower.png", 10, TackShooterFirePattern());

    constructor(name, range, color, price, imagePath, size, firePattern){
        this.name = name;
        this.radius = size;
        this.range = range;
        this.color = color;
        this.price = price;
        this.imagePath = imagePath;
        this.size = size;
        this.dsbColor = RgbColor.darkenHex(color, 0.5);
        // this.dsbColor = "#000000";
        this.firePattern = firePattern;
        this.normalColor = color;
    }

    
}