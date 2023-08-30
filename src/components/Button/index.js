const Button = (type, name, use, action) => {
    const btn = document.createElement("button");
    btn.type = type;
    btn.className = "btn"
    btn.classList.add(use === 'roll' ? 'btnRoll' : 'btnReset');
    btn.textContent = name;
    btn.addEventListener('click', action);
    return btn;
}

export default Button