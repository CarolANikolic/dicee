import Button from "./components/Button/index.js";
import Text from "./components/Text/index.js";
import Dice from "./components/Dice/index.js";
import diceSides from "./assets/diceSides.js";

const mainContent = document.querySelector("main");
const titleBox = document.createElement("div");
const playersBox = document.createElement("section");
const btnBox = document.createElement("div");
const footer = document.querySelector("footer");

titleBox.appendChild(Text("h1", "Welcome to Dicee!"));
titleBox.appendChild(Text("p", "Roll the dice and Good Luck!"));
titleBox.classList.add("titleBox");

playersBox.appendChild(Text("h2", "Player 1"));
playersBox.appendChild(Text("h2", "Player 2"));
playersBox.appendChild(Dice(diceSides[0].source));
playersBox.appendChild(Dice(diceSides[1].source));
playersBox.classList.add("playersBox");

btnBox.appendChild(Button("button", "Roll dice", "roll"));
btnBox.appendChild(Button("button", "Reset", "reset"));
btnBox.classList.add("btnBox");

footer.appendChild(Text("p", "www 🎲 App Brewery 🎲 com"))

mainContent.appendChild(titleBox);
mainContent.appendChild(playersBox);
mainContent.appendChild(btnBox);

