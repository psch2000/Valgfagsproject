import { RgbColor } from "../../base/baseStructor/RgbColor";
import { AreaFirePatthernBuilder } from "./firePattern/patterns/AreaFirePatthernBuilder";
import { BoomerangFirePatternBuilder } from "./firePattern/patterns/BoomerangFirePatternBuilder";
import { SingleFirePatternBuilder } from "./firePattern/patterns/SingleFirePatternBuilder";
import { TackShooterFirePatternBuilder } from "./firePattern/patterns/TackShooterFirePatternBuilder";
import { TrippleFirePatternBuilder } from "./firePattern/patterns/TrippleFirePatternBuilder";

export class TowerType{
    
        static blueTower = new TowerType("Monkey", 100, '#0000ff', 170, "./images/sprite_monkey1.png", 15, 1, new BoomerangFirePatternBuilder());
        static redTower = new TowerType("Boomerang", 120, '#ff0000', 275, "./images/sprite_monkey2.png", 15, 2, new TrippleFirePatternBuilder());
        static greenTower = new TowerType("Ice Monkey", 80, '#FFFFFF', 450, "./images/sprite_monkey3.png", 15, 3, null, true);
        static whiteTower = new TowerType("Tack Shooter", 100, '#ffffff', 240, "./images/sprite_monkey4.png", 15, 4, new TackShooterFirePatternBuilder());
        static yellowTower = new TowerType("Bomb Shooter", 100, '#ffff00', 445, "./images/sprite_monkey5.png", 15, 5, new TrippleFirePatternBuilder());
        static orangeTower = new TowerType("Super Monkey", 180, '#ffa500', 2125, "./images/sprite_monkey6.png", 15, 6, new TackShooterFirePatternBuilder());

    constructor(name, range, color, price, imagePath, size, damage, firePatternBuilder, useArea = false){
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
        this.useArea = useArea;
    }

    
}