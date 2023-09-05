import { countScore } from "./countScore.js";
import shakeDice from "./shakeDice.js";

const rollDice = (diceSides) => {
    const diceLenght = diceSides.length;
    const randomDicePOne =  Math.floor(Math.random() * diceLenght);
    const randomDicePTwo =  Math.floor(Math.random() * diceLenght);
    const playersDice = [randomDicePOne + 1, randomDicePTwo + 1];
    let diceImage = document.querySelectorAll("img");

   // Spread operator, remove array elements from the node list
    [...diceImage].map((image, index) => {
        shakeDice(image);
        if (index === 0) {
            image.src = diceSides[randomDicePOne].source;
        } else {
            image.src = diceSides[randomDicePTwo].source;
        }   
    });

    countScore(playersDice[0], playersDice[1])
};

export default rollDice