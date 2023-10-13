let currentGuess = 50;
let guessLeft = 5;
let answer;
let Add = true;

function generate(){
    answer = Math.floor(Math.random()*100)+1;
    console.log(answer);
}

function addButton(){
    Add = !Add;
    let button = document.getElementById("addition");
    if (Add){
        button.innerHTML = "ADD:ON";
    }
    else{
        button.innerHTML = "ADD:OFF";
    }
}

function numbers(num){
    let guess = document.getElementById("current");
    if (Add){
        currentGuess += num;
    }
    else {
        currentGuess -= num;
    }
    guess.innerHTML = "Current Number: "+currentGuess;
}

function reset(){
    let child;
    guessLeft = 5;
    currentGuess = 50;
    let remain = document.getElementById("remain");
    let guess = document.getElementById("current");
    remain.innerHTML = "Guess Remaining: 5";
    guess.innerHTML = "Current Number: 50" 
    let parent = document.getElementById("log");
    for (let x = 0; x<parent.children.length; x++){ 
        child = parent.children[x];
        child.remove(); 
        x--;
    }
    generate();
    
}

function submit(){
    let newLog = document.createElement("p");
    let text;
    if (guessLeft == 0){
        alert("You lose! The correct number is "+answer+".");
        return '';
    }
    if (Math.abs(answer-currentGuess)==0){
        text = document.createTextNode("You win");
        alert("Congratulations, you win!");
    }
    else if(Math.abs(answer-currentGuess)<=5){
        guessLeft++;
        text = document.createTextNode(currentGuess + " Very Hot");
    }
    else if (Math.abs(answer-currentGuess)<=8){
        text = document.createTextNode(currentGuess + " Hot");
    }
    else if (Math.abs(answer-currentGuess)<=15){
        text = document.createTextNode(currentGuess + " Very Warm");
    }
    else if (Math.abs(answer-currentGuess)<=20){
        text = document.createTextNode(currentGuess + " Warm");
    }
    else if (Math.abs(answer-currentGuess)<=30){
        text = document.createTextNode(currentGuess + " Cool");
    }
    else if (Math.abs(answer-currentGuess)<=40){
        text = document.createTextNode(currentGuess + " Very Cool");
    }
    else if (Math.abs(answer-currentGuess)<=55){
        text = document.createTextNode(currentGuess + " Cold");
    }
    else if(Math.abs(answer-currentGuess)>55){
        text = document.createTextNode(currentGuess + " Very Cold");
    }
    newLog.appendChild(text);
    let element = document.getElementById("log");
    element.appendChild(newLog);
    guessLeft--;
    let guess = document.getElementById("remain");
    guess.innerHTML = "Guess Remaining: "+guessLeft;
    console.log(guessLeft);
}

