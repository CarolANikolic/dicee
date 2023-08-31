import countScore from "./countScore.js";

const rollDice = (diceSides, dicePOne, dicePTwo) => {
    const diceLenght = diceSides.length;
    const randomDicePOne =  Math.floor(Math.random() * diceLenght);
    const randomDicePTwo =  Math.floor(Math.random() * diceLenght);
    const playersDice = [randomDicePOne + 1, randomDicePTwo + 1];

    dicePOne.querySelector("img").src = diceSides[randomDicePOne].source;
    dicePTwo.querySelector("img").src = diceSides[randomDicePTwo].source;

    countScore(playersDice[0], playersDice[1])
};

export default rollDice