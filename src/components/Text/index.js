const Text = (type, content) => {
    const textType = document.createElement(type);

    textType.textContent = content;
    textType.classList.add("textAlign")

    if (type === "h1") {
        textType.classList.add("title")
    } else if (type === "h2") {
        textType.classList.add("title", "subtitle")
    } else {
        textType.classList.add("paragraph")
    }  

    return textType
}

export default Text