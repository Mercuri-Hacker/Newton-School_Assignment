var gameNumberEl = document.getElementById("game-number");
        var gameContainerEl = document.getElementById("game-container");
        var rockBtnEl = document.getElementById("rock");
        var paperBtnEl = document.getElementById("paper");
        var scissorBtnEl = document.getElementById("scissors");
        var computerChooseEl = document.getElementById("computer-choose");
        var roundResultEl = document.getElementById("round-result");
        var userPointsEl = document.getElementById("user-points");
        var computerPointsEl = document.getElementById("computer-points");
        var roundsLeftEl = document.getElementById("rounds-left");
        var gameResultEl = document.getElementById("game-result");
        const ROCK = 0;
        const PAPER = 1;
        const SCISSORS = 2;
        function playGame() {
            userPoints = 0;
            userPointsEl.innerText = 0;
            computerPoints = 0;
            computerPointsEl.innerText = 0;
            roundsLeft = parseInt(gameNumberEl.value, 10);
            if (roundsLeft < 0) {
                alert("Number of turns cannot be -ve");
            } else {
                roundsLeftEl.innerText = roundsLeft;
                gameContainerEl.style.display = "block";
                gameResultEl.style.display = "none";
            }
        }
        //Chauhan Abhishek-> Graviton Coders
        // game variables
        var userPoints = 0;
        var computerPoints = 0;
        var roundsLeft = parseInt(gameNumberEl.value, 10);
        roundsLeftEl.innerText = roundsLeft;
        function userChoose(e) {
            if (roundsLeft <= 0) return;
            const choices = ["ROCK", "PAPER", "SCISSORS"];
            const outcomes = ["WON", "TIE", "LOSE"];
            const userChoose = parseInt(e.target.value, 10);
            const computerChoose = Math.floor(Math.random() * 3);
            window.computerChoose = computerChoose
            console.log(window.computerChoose);
            computerChooseEl.innerText = choices[computerChoose];
            var outcome = 1; // [win, tie, loose]
            if ((choices[computerChoose] == 'ROCK' && choices[userChoose] == 'PAPER') || (choices[computerChoose] == 'SCISSORS' && choices[userChoose] == 'ROCK') || (choices[computerChoose] == 'PAPER' && choices[userChoose] == 'SCISSORS')) {
                // use Wins
                outcome = 0;
                userPoints += 1;
            } else if ((choices[computerChoose] == 'PAPER' && choices[userChoose] == 'ROCK') || (choices[computerChoose] == 'ROCK' && choices[userChoose] == 'SCISSORS') || (choices[computerChoose] == 'SCISSORS' && choices[userChoose] == 'PAPER')) {
                // lose
                outcome = 2;
                computerPoints += 1;
            } else {
                // tie
                outcome = 1;
            }
            // setting game variables after move
            roundsLeft -= 1;
            roundResultEl.innerText = `${outcomes[outcome]}`;
            roundResultEl.style.display = "block";
            userPointsEl.innerText = userPoints;
            computerPointsEl.innerText = computerPoints;
            roundsLeftEl.innerText = roundsLeft;
            if (roundsLeft == 0) {
                // game over
                gameResultEl.innerText = `${outcomes[userPoints == computerPoints ? 1 : userPoints > computerPoints ? 0 : 2]}`;
                gameResultEl.style.display = "block";
                gameContainerEl.style.display = "none";
            }
        }
        // button click
        rockBtnEl.addEventListener('click', userChoose);
        paperBtnEl.addEventListener('click', userChoose);
        scissorBtnEl.addEventListener('click', userChoose);