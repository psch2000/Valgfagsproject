import { RgbColor } from "../../base/baseStructor/RgbColor";
import { BoomerangFirePatternBuilder } from "./firePattern/patterns/BoomerangFirePatternBuilder";
import { SingleFirePatternBuilder } from "./firePattern/patterns/SingleFirePatternBuilder";
import { TackShooterFirePatternBuilder } from "./firePattern/patterns/TackShooterFirePatternBuilder";
import { TrippleFirePatternBuilder } from "./firePattern/patterns/TrippleFirePatternBuilder";

export class TowerType{
    
        static blueTower = new TowerType("Monkey", 100, "./images/sprite_ball_tennis.png", 170, "./images/sprite_monkey1.png", 15, 1, new BoomerangFirePatternBuilder());
        static redTower = new TowerType("Boomerang", 120, "./images/sprite_ball_tennis.png", 275, "./images/sprite_monkey2.png", 15, 1, new TrippleFirePatternBuilder());
        static greenTower = new TowerType("Ice Monkey", 80, "./images/sprite_ball_tennis.png", 450, "./images/sprite_monkey3.png", 15, 1, new TackShooterFirePatternBuilder());
        static whiteTower = new TowerType("Tack Shooter", 100, "./images/sprite_nail.png", 240, "./images/sprite_monkey4.png", 15, 1, new SingleFirePatternBuilder());
        static yellowTower = new TowerType("Bomb Shooter", 100, "./images/sprite_ball_tennis.png", 445, "./images/sprite_monkey5.png", 15, 1, new TrippleFirePatternBuilder());
        static orangeTower = new TowerType("Super Monkey", 180, "./images/sprite_ball_baseball.png", 2125, "./images/sprite_monkey6.png", 15, 1, new TackShooterFirePatternBuilder());

    constructor(name, range, projectileImagePath, price, imagePath, size, damage, firePatternBuilder){
        this.name = name;
        this.radius = size;
        this.range = range;
        this.projectileImagePath = projectileImagePath;
        this.price = price;
        this.imagePath = imagePath;
        this.size = size;
        //this.normalColor = color;
        //this.dsbColor = RgbColor.darkenHex(color, 0.5);
        this.firePatternBuilder = firePatternBuilder;
        this.damage = damage;
    }

    
}