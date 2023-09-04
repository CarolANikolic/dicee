import Button from "../src/components/Button/index.js";
import Text from "../src/components/Text/index.js";
import Dice from "../src/components/Dice/index.js";
import diceSides from "../src/assets/objects/diceSides.js";
import rollDice from "../src/assets/functions/rollDice.js";
import { resetScore } from "../src/assets/functions/countScore.js";

// Select DOM elements
const mainContent = document.querySelector("main");

// Create main elements

// Title Box
const titleBox = document.createElement("div");
titleBox.appendChild(Text("h1", "Welcome to Dicee!"));
titleBox.appendChild(Text("p", "Roll the dice and Good Luck!"));
titleBox.classList.add("titleBox");

// Players Box
const playersBox = document.createElement("section");
playersBox.appendChild(Text("h2", "Player 1"));
playersBox.appendChild(Text("h2", "Player 2"));
playersBox.appendChild(Text("p", "Score Player 1: 0"));
playersBox.appendChild(Text("p", "Score Player 2: 0"));

// Create dice elements
const dicePOne = Dice(diceSides[0].source);
const dicePTwo = Dice(diceSides[1].source);

// Append dice elements to players box
playersBox.appendChild(dicePOne);
playersBox.appendChild(dicePTwo);
playersBox.classList.add("playersBox");

// Button Box
const btnBox = document.createElement("div");
btnBox.appendChild(Button("button", "Roll dice", "roll", () => rollDice(diceSides, dicePOne, dicePTwo)));
btnBox.appendChild(Button("button", "Reset", "reset", () => resetScore()));
btnBox.classList.add("btnBox");

// Footer
const footer = document.createElement("footer");
footer.appendChild(Text("p", "www 🎲 App Brewery 🎲 com"));

// Append elements to the main content
mainContent.appendChild(titleBox);
mainContent.appendChild(playersBox);
mainContent.appendChild(btnBox);
mainContent.appendChild(footer);