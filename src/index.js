import Button from "./components/Button/index.js";
import Text from "./components/Text/index.js";

const mainContent = document.querySelector("main");
const titleBox = document.createElement("div")

titleBox.appendChild(Text("h1", "Welcome to Dicee!"))
titleBox.appendChild(Text("p", "Roll de dice and Good Luck!"))
titleBox.classList.add("titleBox");

mainContent.appendChild(titleBox)