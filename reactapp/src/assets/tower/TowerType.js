import { RgbColor } from "../../base/baseStructor/RgbColor";
import { BoomerangFirePatternBuilder } from "./firePattern/patterns/BoomerangFirePatternBuilder";
import { SingleFirePatternBuilder } from "./firePattern/patterns/SingleFirePatternBuilder";
import { TackShooterFirePatternBuilder } from "./firePattern/patterns/TackShooterFirePatternBuilder";
import { TrippleFirePatternBuilder } from "./firePattern/patterns/TrippleFirePatternBuilder";

export class TowerType{
    
        static blueTower = new TowerType("Blue Tower", 30, '#0000ff', 100, "./images/test_tower.png", 10, 1, new BoomerangFirePatternBuilder());
        static redTower = new TowerType("Red Tower", 35, '#ff0000', 200, "./images/test_tower.png", 10, 2, new TrippleFirePatternBuilder());
        static greenTower = new TowerType("Green Tower", 40, '#00ff00', 300, "./images/test_tower.png", 10, 3, new TackShooterFirePatternBuilder());
        static whiteTower = new TowerType("White Tower", 50, '#ffffff', 500, "./images/test_tower.png", 10, 4, new SingleFirePatternBuilder());
        static yellowTower = new TowerType("Yellow Tower", 100, '#ffff00', 1000, "./images/test_tower.png", 10, 5, new TrippleFirePatternBuilder());
        static orangeTower = new TowerType("Orange Tower", 200, '#ffa500', 2000, "./images/test_tower.png", 10, 6, new TackShooterFirePatternBuilder());

    constructor(name, range, color, price, imagePath, size, damage, firePatternBuilder){
        this.name = name;
        this.radius = size;
        this.range = range;
        this.color = color;
        this.price = price;
        this.imagePath = imagePath;
        this.size = size;
        this.normalColor = color;
        this.dsbColor = RgbColor.darkenHex(color, 0.5);
        this.firePatternBuilder = firePatternBuilder;
        this.damage = damage;
    }

    
}