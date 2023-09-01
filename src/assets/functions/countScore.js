
let player1Score = 0;
let player2Score = 0;

// Update the DOM with the new scores
const updateScores = () => {
    const scorePlayer1Text = document.querySelector('[data-id="score_player_1:_0"]');
    const scorePlayer2Text = document.querySelector('[data-id="score_player_2:_0"]');
    scorePlayer1Text.textContent = "Score: " + player1Score;
    scorePlayer2Text.textContent = "Score: " + player2Score;
}

// Count the scores of both players
const countScore = (diceP1, diceP2) => {
    updateScores();

    if (diceP1 === diceP2) {
        updateScores();
    } else if (diceP1 > diceP2) {
        player1Score++;
        updateScores();
    } else {
        player2Score++;
        updateScores();
    }
}

// Reset the score count and the DOM to zero
const resetScore = () => {
    const scorePlayer1Text = document.querySelector('[data-id="score_player_1:_0"]');
    const scorePlayer2Text = document.querySelector('[data-id="score_player_2:_0"]');
    player1Score = 0;
    player2Score = 0;

    scorePlayer1Text.textContent = "Score Player 1: 0";
    scorePlayer2Text.textContent = "Score Player 2: 0";
}

export { countScore, resetScore };