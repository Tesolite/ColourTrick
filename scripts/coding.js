function randColour() {
    var random = Math.floor(Math.random() * 7);
    colour = "";

    if (random == 0) {
        colour = "red";
    }
    else if (random == 1) {
        colour = "orange";
    }
    else if (random == 2) {
        colour = "yellow";
    }
    else if (random == 3) {
        colour = "green";
    }
    else if (random == 4) {
        colour = "blue";
    }
    else if (random == 5) {
        colour = "pink";
    }
    else if (random == 6) {
        colour = "cyan";
    }
    return colour;
}

function randWord() {
    var random = Math.floor(Math.random() * 7);
    word = "";

    if (random == 0) {
        word = "red";
    }
    else if (random == 1) {
        word = "orange";
    }
    else if (random == 2) {
        word = "yellow";
    }
    else if (random == 3) {
        word = "green";
    }
    else if (random == 4) {
        word = "blue";
    }
    else if (random == 5) {
        word = "pink";
    }
    else if (random == 6) {
        word = "cyan";
    }
    return word;
}

function gameRound() {
    round_flag = 1;
    var word = randWord();
    var colour = randColour();

    console.log(word + " and " + colour);
    document.getElementById("main").innerHTML = word;
    document.getElementById("main").style.color = colour;
    document.addEventListener("keydown"), function (input) {
        if ((input.key == "ArrowLeft" && word == colour)
            || (input.key == "ArrowRight" && word != colour)) {
            console.log("Correct!");
            round_flag = 1;
        }
        else if ((input.key == "ArrowLeft" && word != colour)
            || (input.key == "ArrowRight" && word == colour)) {
            console.log("Incorrect!");
            round_flag = 0;
        }
    }
    return round_flag
}


function createRound() {
    var word = randWord();
    var colour = randColour();
    document.getElementById("main").innerHTML = word;
    document.getElementById("main").style.color = colour;

    //Procedure for restarting animation derived from CSS-TRICKS website (https://css-tricks.com/restart-css-animation/)
    document.getElementById("main").classList.remove("playNewComboAnimation");
    document.getElementById("main").offsetWidth;
    document.getElementById("main").classList.add("playNewComboAnimation");

    return [word, colour];
}

function verifyRound(input, round) {
    var word = round[0];
    var colour = round[1];
    var validFlag = 0;
    if ((input == "ArrowLeft" && word == colour)
        || (input == "ArrowRight" && word != colour)) {
        console.log("Correct!");
        validFlag = 1;
    }
    else if ((input == "ArrowLeft" && word != colour)
        || (input == "ArrowRight" && word == colour)) {
        console.log("Incorrect!");
        validFlag = 0;
    }
    console.log(validFlag);
    return validFlag;
}

function startGame() {
    document.getElementById("score").innerHTML = "Score: 0";
    document.getElementById("retryButton").style.display = "none";
    document.getElementById("timer").style.fontSize = "50px";
    document.getElementById("timer").classList.remove("playNoTimeAnimation");

    var round = createRound();
    var word = round[0];
    var colour = round[1];
    var score = 0
    console.log(word + colour);
    var continueGame = 1;

    //Sounds for pressing and game loss
    const feedback = document.getElementById("press");
    feedback.volume = 0.25;

    const lose = document.getElementById("fail");
    lose.volume = 0.25;
    //


    
    const start = Date.now();
    var timer;
    var finaltime = 0;
    const timerInterval = setInterval(() => {
        timer = 60 - (Date.now() - start) / 1000;
        document.getElementById("timer").innerHTML = parseFloat(timer).toFixed(2);
        if (timer < 0) {
            timer = 0;
            document.getElementById("timer").innerHTML = "0.00";
            document.getElementById("timer").style.fontSize = "100px";
            document.getElementById("timer").classList.add("playNoTimeAnimation");
            continueGame = 0;
        }
    }, 25);




    if (continueGame == 1) {
        document.addEventListener("keydown", function registerInput(input) {
            if (timer < 0) {
                continueGame = 0;
            }
            if (input.key == "ArrowLeft" || input.key == "ArrowRight") {
                feedback.play();
                if (verifyRound(input.key, round) == true && continueGame == 1) {
                    score++;
                    round = createRound();
                    console.log(round);
                    word = round[0];
                    colour = round[1];
                    document.getElementById("score").innerHTML = "Score: " + score;
                }
                else {
                    lose.play();
                    finaltime = parseFloat(timer).toFixed(2);
                    clearInterval(timerInterval);
                    document.getElementById("timer").innerHTML = finaltime;
                    word = "GAME OVER";
                    colour = "red";
                    document.getElementById("main").innerHTML = word;
                    document.getElementById("main").style.color = colour;
                    if(localStorage.getItem("score") == null){
                        localStorage.setItem("score",score);
                    }
                    else{
                        if(localStorage.getItem("score") < score){
                            localStorage.setItem("score", score);
                        }
                    }
                    alert("Highscore is: " + localStorage.getItem("score"));
                    continueGame = 0;
                    document.removeEventListener("keydown", registerInput, true);
                    document.getElementById("retryButton").style.display = "initial";
                }
            }
        }, true);
    }
}

function enterGame() {
    document.getElementById("btnstart").onclick = window.location.href = "game.html";

}
