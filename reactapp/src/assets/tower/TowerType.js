import { RgbColor } from "../../base/baseStructor/RgbColor";

export class TowerType{
        static blueTower = new TowerType("Monkey", 30, '#0000ff', 100, "./images/sprite_monkey1.png", 10);
        static redTower = new TowerType("Boomerang", 35, '#ff0000', 200, "./images/sprite_monkey2.png", 10);
        static greenTower = new TowerType("Ice Monkey", 40, '#00ff00', 300, "./images/sprite_monkey3.png", 10);
        static whiteTower = new TowerType("Tack Shooter", 50, '#ffffff', 500, "./images/sprite_monkey4.png", 10);
        static yellowTower = new TowerType("Bomb Shooter", 100, '#ffff00', 1000, "./images/sprite_monkey5.png", 10);
        static orangeTower = new TowerType("Super Monkey", 200, '#ffa500', 2000, "./images/sprite_monkey6.png", 10);

    constructor(name, range, color, price, imagePath, size){
        this.name = name;
        this.radius = size;
        this.range = range;
        this.color = color;
        this.price = price;
        this.imagePath = imagePath;
        this.size = size;
        this.dsbColor = RgbColor.fromHex(color).darken(0.5).getHex();
        // this.dsbColor = "#000000";
        this.normalColor = color;
        console.log(this.dsbColor);
        console.log(this.normalColor);
    }

    
}