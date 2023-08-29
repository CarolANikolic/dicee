import Button from "./components/Button/index.js";
import Text from "./components/Text/index.js";

const mainContent = document.querySelector("main");
const titleBox = document.createElement("div");
const playersBox = document.createElement("section");

titleBox.appendChild(Text("h1", "Welcome to Dicee!"));
titleBox.appendChild(Text("p", "Roll de dice and Good Luck!"));
titleBox.classList.add("titleBox");

playersBox.appendChild(Text("h2", "Player 1"));
playersBox.appendChild(Text("h2", "Player 2"));
playersBox.classList.add("playersBox")

mainContent.appendChild(titleBox)
mainContent.appendChild(playersBox);
