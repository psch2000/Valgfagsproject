import { BoomerangFirePatternBuilder } from "./firePattern/patterns/BoomerangFirePatternBuilder";
import { CanonFirePatternBuilder } from "./firePattern/patterns/CanonFirePatternBuilder";
import { SingleFirePatternBuilder } from "./firePattern/patterns/SingleFirePatternBuilder";
import { SuperMonkeyFirePattern } from "./firePattern/patterns/SuperMonkeyFirePattern";
import { TackShooterFirePatternBuilder } from "./firePattern/patterns/TackShooterFirePatternBuilder";

export class TowerType {
    static blueTower = new TowerType("Monkey", 100, "./images/sprite_dart.png", 170, "./images/sprite_monkey1.png", "./images/sprite_greymonkey1.png", 25, 1, new SingleFirePatternBuilder());
    static redTower = new TowerType("Boomerang", 120, "./images/sprite_frisbee.png", 275, "./images/sprite_monkey2.png", "./images/sprite_greymonkey2.png", 25, 1, new BoomerangFirePatternBuilder());
    static greenTower = new TowerType("Ice Monkey", 80, "./images/sprite_ball_tennis.png", 450, "./images/sprite_monkey3.png", "./images/sprite_greymonkey3.png", 25, 1, null, false, true);
    static whiteTower = new TowerType("Tack Shooter", 100, "./images/sprite_nail.png", 240, "./images/sprite_monkey4.png", "./images/sprite_greymonkey4.png", 25, 1, new TackShooterFirePatternBuilder());
    static yellowTower = new TowerType("Bomb Shooter", 100, "./images/sprite_canonball.png", 445, "./images/sprite_monkey5.png", "./images/sprite_greymonkey5.png", 25, 3, new CanonFirePatternBuilder());
    static orangeTower = new TowerType("Super Monkey", 180, "./images/sprite_laser.png", 2125, "./images/sprite_monkey6.png", "./images/sprite_greymonkey6.png", 25, 1, new SuperMonkeyFirePattern(), true);

    constructor(name, range, projectileImagePath, price, imagePath, dsbImage, size, damage, firePatternBuilder, useRotation = true, useArea = false, areaColor = "#0000ff80"){
        this.name = name;
        this.radius = size;
        this.range = range;
        this.projectileImagePath = projectileImagePath;
        this.price = price;
        this.dsbImage = dsbImage;
        this.imagePath = imagePath;
        this.size = size;
        //this.normalColor = color;
        //this.dsbColor = RgbColor.darkenHex(color, 0.5);
        this.firePatternBuilder = firePatternBuilder;
        this.damage = damage;
        this.useArea = useArea;
        this.useRotation = useRotation;
        this.areaColor = areaColor;
    }
}
