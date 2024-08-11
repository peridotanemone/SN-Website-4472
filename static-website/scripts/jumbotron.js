const jumbotronText = ["Think.", "Inspire.", "Innovate."];
var counter = 0;
var jumbotron = document.getElementById("jumbotron");

function changeWord() {
    jumbotron.innerText = jumbotronText[counter%3];
    counter++;
}

jumbotron.addEventListener("animationiteration", changeWord, false);