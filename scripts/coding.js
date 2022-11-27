function randColour() {
    var random = Math.floor(Math.random() * 6);
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
        colour = "purple";
    }
    return colour;
}

function randWord() {
    var random = Math.floor(Math.random() * 6);
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
        word = "purple";
    }
    return word;
}

function testing() {
    var word = randWord();
    var colour = randColour();

    return [colour, word];
}

function recordKey(key) {
    if (key.key == "ArrowLeft") {
        console.log("Hello ");
    }
    else (console.log("World!"));
}

async function gameRound() {
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

    return [word, colour];
}

function verifyRound(input, round) {
    var word = round[0];
    var colour = round[1];
    validFlag = 0;
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
    const start = Date.now();
    setInterval(() => {
        timer = 60 -(Date.now() - start) / 1000;
        document.getElementById("timer").innerHTML = parseFloat(timer).toFixed(2);
        if(timer < 0){
            document.getElementById("timer").innerHTML = 0;
        }
    }, 25);

    var round = createRound();
    var word = round[0];
    var colour = round[1];
    score = 0
    console.log(word + colour);
    var continueGame = 1;


    var feedback = document.getElementById("press");
    feedback.volume = 0.25;

    var lose = document.getElementById("fail");
    lose.volume = 0.25;



    
    if (continueGame == 1) {
        document.addEventListener("keydown", function registerInput(input) {
            if(timer < 0){
                lose.play();
                word = "GAME OVER";
                colour = "red";
                document.getElementById("main").innerHTML = word;
                document.getElementById("main").style.color = colour;
                alert("GAME OVER. NO TIME LEFT");
                document.removeEventListener("keydown", registerInput, true)
            }
            if (input.key == "ArrowLeft" || input.key == "ArrowRight") {
                feedback.play();
                if (verifyRound(input.key, round) == true) {
                    score++;
                    round = createRound();
                    word = round[0];
                    colour = round[1];
                }
                else {
                    lose.play();
                    word = "GAME OVER";
                    colour = "red";
                    document.getElementById("main").innerHTML = word;
                    document.getElementById("main").style.color = colour;   
                    alert("GAME OVER, FINAL SCORE: " + score);
                    continueGame = 0;
                    document.removeEventListener("keydown", registerInput, true)
                }
            }
        }, true);
    }
}
