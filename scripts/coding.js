
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
    document.getElementById("main").style.color = colour;
}