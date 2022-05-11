import { RgbColor } from "../../base/baseStructor/RgbColor";

export class TowerType{
        static blueTower = new TowerType("Monkey", 100, /*'#0000ff',*/ 170, "./images/sprite_monkey1.png", "./images/sprite_greymonkey1.png", 15);
        static redTower = new TowerType("Boomerang", 120, /*'#ff0000',*/ 275, "./images/sprite_monkey2.png", "./images/sprite_greymonkey2.png", 15);
        static greenTower = new TowerType("Ice Monkey", 80, /*'#00ff00',*/ 450, "./images/sprite_monkey3.png", "./images/sprite_greymonkey3.png", 15);
        static whiteTower = new TowerType("Tack Shooter", 100, /*'#ffffff',*/ 240, "./images/sprite_monkey4.png", "./images/sprite_greymonkey4.png", 15);
        static yellowTower = new TowerType("Bomb Shooter", 100, /*'#ffff00',*/ 445, "./images/sprite_monkey5.png", "./images/sprite_greymonkey5.png", 15);
        static orangeTower = new TowerType("Super Monkey", 180, /*'#ffa500',*/ 2125, "./images/sprite_monkey6.png", "./images/sprite_greymonkey6.png", 15);

    constructor(name, range, /*color,*/ price, image, dsbImage, size){
        this.name = name;
        this.radius = size;
        this.range = range;
        //this.color = color;
        this.price = price;
        this.image = image;
        this.dsbImage = dsbImage;
        this.currentImage = image;
        this.size = size;
        //this.dsbColor = RgbColor.fromHex(color).darken(0.5).getHex();
        // this.dsbColor = "#000000";
        //this.normalColor = color;
        this.isTower = true;
        
    }

    
}