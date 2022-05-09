export class RgbColor {
    constructor(r, g, b, a = null) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    static fromHex(hexString) {
        // only supports hex strings that are RGB or RGBA

        let [red, green, blue, alpha] = convertHexToRgba(hexString);

        return new RgbColor(red, green, blue, alpha);
    }

    getHex(withAlpha = false) {
        let values = [this.r, this.g, this.b];

        if (withAlpha) values.push(this.a);

        let hexString = convertRgbaToHex(values);

        return hexString;
    }

    darken(procentDecimal) {
        // does not change alpha, only RGB

        let r = Math.floor(this.r * procentDecimal);
        let g = Math.floor(this.g * procentDecimal);
        let b = Math.floor(this.b * procentDecimal);

        return new RgbColor(r, g, b, this.a);
    }

    changeTransparency(procentDecimal) {
        let a = Math.floor(this.a * procentDecimal);

        return new RgbColor(this.r, this.g, this.b, a);
    }

    static darkenHex(hexString, procentDecimal) {
        // does not change alpha, only RGB

        let [red, green, blue, alpha] = convertHexToRgba(hexString);

        let redDarken = Math.floor(red * procentDecimal);
        let greenDarken = Math.floor(green * procentDecimal);
        let blueDarken = Math.floor(blue * procentDecimal);

        return convertRgbaToHex([redDarken, greenDarken, blueDarken, alpha]);
    }
}

function convertHexToRgba(hexString) {
    let hex = hexString.replace("#", ""); // remove hashtag
    let alpha = null;

    if (hex.length > 6) {
        alpha = hex.slice(6, 8); // get alpha from the end of the hexString
        alpha = parseInt(alpha, 16); // convert alpha to base 10 number

        hex = hex.slice(0, 6); // get the first 6 letters from hexString
    }

    let rgbaArray = [];

    for (let i = 0; i < hex.length; i += 2) {
        let value = parseInt(hex[i] + hex[i + 1], 16); // convert hex to base 10 numbers
        rgbaArray.push(value);
    }

    rgbaArray.push(alpha);

    return rgbaArray;
}

function convertRgbaToHex(rgbaArray) {
    let hexString = "#";
    for (let i = 0; i < rgbaArray.length; i++) {
        if (rgbaArray[i] === null) continue;

        let hexValue = rgbaArray[i].toString(16); // convert RGBA values to base 16 numbers

        if (hexValue.length === 1) hexValue = "0" + hexValue; // if hexValue is a single letter then add "0" as a prefix

        hexString = hexString.concat(hexValue);
    }
    return hexString;
}
