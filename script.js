
let enterName = prompt ("Enter your name");
let playerGuess;
let playerFeedback = "test";
loadDiv ()



function loadDiv ()  {
document.getElementById("ScriptThisDIV").innerHTML = "<H1>Hello " + enterName + "</H1>";
document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + "<H2> Guess a Number between 1 & 10</H2>";
document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + playerFeedback;
}

function enterNumber ()    {
    playerGuess = prompt ("Enter a Number")
}