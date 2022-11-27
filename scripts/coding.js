function randColour(){  
    var random = Math.floor(Math.random() * 6);
    colour = "";

    if(random == 0){
        colour = "red";
    }
    else if(random == 1){
        colour = "orange";
    }
    else if(random == 2){
        colour = "yellow";
    }
    else if(random == 3){
        colour = "green";
    }
    else if(random == 4){
        colour = "blue";
    }
    else if(random == 5){
        colour = "purple";
    }
    return colour;
}

function randWord(){
    var random = Math.floor(Math.random() * 6);
    word = "";

    if(random == 0){
        word = "red";
    }
    else if(random == 1){
        word = "orange";
    }
    else if(random == 2){
        word = "yellow";
    }
    else if(random == 3){
        word = "green";
    }
    else if(random == 4){
        word = "blue";
    }
    else if(random == 5){
        word = "purple";
    }
    return word;
}
function startGame(){
    do{
        var word = randWord();
        var colour = randColour();

        game_flag = 1;
        console.log(word + " and " + colour);
        document.getElementById("main").innerHTML = word;
        document.getElementById("main").style.color = colour;
        if(word == colour){
            alert("Match!");
            game_flag = 0;
        }
        else{
            alert("Miss!");
            game_flag = 0;
        }
    } while(game_flag != 0);
}