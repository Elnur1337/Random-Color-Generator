const colorCode = document.querySelector(".color-code");
const generateBtn = document.querySelector(".generate-btn");

let hexCodeStr = "";
let oneDigit = "";

let RGBCode = [];
let RGBFirst = 0;
let RGBSecond = 0;

let counter = 0;

generateRandomColor();

generateBtn.addEventListener("click", generateRandomColor);

function generateRandomColor() {
    counter = 0;
    hexCodeStr = "";
    colorCode.textContent = hexCodeStr;
    for (let i = 0; i < 6; i++) {
        let randomDigit = Math.floor(Math.random() * 16);
        if (randomDigit === 15) {
            oneDigit = "f";
            hexCodeStr += oneDigit;
        } else if (randomDigit === 14) {
            oneDigit = "e";
            hexCodeStr += oneDigit;
        } else if (randomDigit === 13) {
            oneDigit = "d";
            hexCodeStr += oneDigit;
        } else if (randomDigit === 12) {
            oneDigit = "c";
            hexCodeStr += oneDigit;
        } else if (randomDigit === 11) {
            oneDigit = "b";
            hexCodeStr += oneDigit;
        } else if (randomDigit === 10) {
            oneDigit = "a";
            hexCodeStr += oneDigit;
        } else {
            oneDigit = randomDigit;
            hexCodeStr += randomDigit;
        }

        // Hex to RGB
        if (i % 2 === 0) {
            RGBFirst = randomDigit;
        } else if (i % 2 === 1) {
            RGBSecond = randomDigit;
            RGBCode[counter] = RGBFirst * (16 ** 1) + RGBSecond * (16 ** 0);
            counter++;
        }
    }
    let chooseColorValue = Math.floor(Math.random() * 2);
    if (chooseColorValue === 0) {
        document.body.style.background = `#${hexCodeStr}`;
        colorCode.style.color = `#${hexCodeStr}`;
        colorCode.textContent = `#${hexCodeStr}`;
    } else if (chooseColorValue === 1) {
        document.body.style.background = `rgb(${RGBCode[0]}, ${RGBCode[1]}, ${RGBCode[2]})`;
        colorCode.style.color = `rgb(${RGBCode[0]}, ${RGBCode[1]}, ${RGBCode[2]})`;
        colorCode.textContent = `rgb(${RGBCode[0]}, ${RGBCode[1]}, ${RGBCode[2]})`;
    }
}