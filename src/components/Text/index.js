const Text = (type, content) => {
    const textType = document.createElement(type);

    textType.textContent = content;

    if (type === "h1") {
        textType.classList.add("title")
    } else {
        textType.classList.add("paragraph")
    }  
    return textType
}

export default Text