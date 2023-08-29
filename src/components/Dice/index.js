const Dice = (path) => {
    const diceContainer = document.createElement("div");

    diceContainer.innerHTML = `
    <img src=${path} alt="dice side"/>
    `;

    return diceContainer
}

export default Dice