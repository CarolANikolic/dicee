const Button = (type, name, use) => {
    const btnBox = document.createElement("div");

    btnBox.innerHTML = `
    <button type="${type}" class="btn ${use === 'roll' ? 'btnRoll' : 'btnReset'}">${name}</button>
    `;

    return btnBox;
}

export default Button