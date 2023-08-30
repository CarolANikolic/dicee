import Dice from "../../components/Dice/index.js";

const rollDice = (diceSides, dicePOne, dicePTwo) => {
    const diceLenght = diceSides.length;
    let randomDicePOne =  Math.floor(Math.random() * diceLenght);
    let randomDicePTwo =  Math.floor(Math.random() * diceLenght);

    dicePOne.querySelector("img").src = diceSides[randomDicePOne].source;
    dicePTwo.querySelector("img").src = diceSides[randomDicePTwo].source;
};

export default rollDice