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

/*document.onkeydown = function (verify) {
    if ((verify.key == "ArrowLeft" && word == colour)
        || (verify.key == "ArrowRight" && word != colour)) {
        console.log("Correct!");
        round_flag = 1;
    }
    else if ((verify.key == "ArrowLeft" && word != colour)
        || (verify.key == "ArrowRight" && word == colour)) {
        console.log("Incorrect!");
        round_flag = 0;
    }
}
return round_flag;
*/

function createRound() {
    var word = randWord();
    var colour = randColour();
    //console.log(word + " and " + colour);
    document.getElementById("main").innerHTML = word;
    document.getElementById("main").style.color = colour;

    return [word, colour];
}

/*function verifyRound(input, word, colour) {
    var verifiedFlag = 0;
    console.log(word + " and " + colour);
    if ((input == "j" && word == colour)
        || (input == "k" && word != colour)) {
        console.log("Correct!");
        verifiedFlag = 1;
    }
    else if ((input == "j" && word != colour)
        || (input == "k" && word == colour)) {
        console.log("Incorrect!");
        verifiedFlag = 0;
    }

    alert(verifiedFlag);
    return verifiedFlag;
}*/

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
    var round = createRound();
    var word = round[0];
    var colour = round[1];
    score = 0
    var continueGame = 1;
    console.log(word + colour);
    document.addEventListener("keydown", function (input) {
        if (verifyRound(input.key, round) == true){
            score++;
            round = createRound();
            word = round[0];
            colour = round[1];
        }
        else(alert("GAME OVER, FINAL SCORE: " + score));
        }, true)
}
