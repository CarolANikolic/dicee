const shakeDice = (image) => {
    image.classList.add("shakeImage");
    setTimeout(() => {
        image.classList.remove("shakeImage");
    }, 500)
}

export default shakeDice