import { RgbColor } from "../../base/baseStructor/RgbColor";

export class TowerType{
    
        static blueTower = new TowerType("Blue Tower", 30, '#0000ff', 100, "./images/test_tower.png", 10);
        static redTower = new TowerType("Red Tower", 35, '#ff0000', 200, "./images/test_tower.png", 10);
        static greenTower = new TowerType("Green Tower", 40, '#00ff00', 300, "./images/test_tower.png", 10);
        static whiteTower = new TowerType("White Tower", 50, '#ffffff', 500, "./images/test_tower.png", 10);
        static yellowTower = new TowerType("Yellow Tower", 100, '#ffff00', 1000, "./images/test_tower.png", 10);
        static orangeTower = new TowerType("Orange Tower", 200, '#ffa500', 2000, "./images/test_tower.png", 10);

    constructor(name, range, color, price, imagePath, size){
        this.name = name;
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