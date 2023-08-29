const Button = (type, name) => {
    const btnBox = document.createElement("div");

    btnBox.innerHTML = `
    <button type=${type}>${name}</button>
    `;

    return btnBox;
}

export default Button