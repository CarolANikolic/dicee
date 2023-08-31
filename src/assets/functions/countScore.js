let player1Score = 0;
let player2Score = 0;

const countScore = (diceP1, diceP2) => {

    const scoreBox = document.querySelector("section");
    const scorePlayer1Text = document.querySelector('[data-id="score_player_1:_0"');
    const scorePlayer2Text = document.querySelector('[data-id="score_player_2:_0"]');
    
    scorePlayer1Text.textContent = "Score: " + player1Score;
    scorePlayer2Text.textContent = "Score: " + player2Score;
    
        if (diceP1 === diceP2) {
            scorePlayer1Text.textContent = "Score: " + player1Score;
        } else if (diceP1 > diceP2) {
            player1Score ++
            scorePlayer1Text.textContent = "Score: " + player1Score;
        } else {
            player2Score ++
            scorePlayer2Text.textContent = "Score: " +  player2Score;
        }
}

export default countScore