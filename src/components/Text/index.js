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

         // Extract the unique ID from the content
         const uniqueId = content.replace(/\s+/g, "_").toLowerCase();
         textType.setAttribute("data-id", uniqueId);
    }  

    return textType
}

export default Text