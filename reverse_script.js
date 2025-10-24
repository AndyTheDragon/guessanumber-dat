"use strict";

window.addEventListener("DOMContentLoaded", main);
var currentGuess, minGuess, maxGuess;

function main() {
    document.getElementById("guess-form").addEventListener("change", (event) => { console.log("Feedback changed. " + event.target.id + " was selected"); });
    document.getElementById("start-game").addEventListener("click", initGame);
}

function performGuess(prevGuess, tooLow) {
    if (tooLow) {
        minGuess = prevGuess + 1;
    } else {
        maxGuess = prevGuess - 1;
    }
    let nextGuess = minGuess + Math.floor((maxGuess - minGuess) / 2);
    if (nextGuess < minGuess || nextGuess > maxGuess || nextGuess === prevGuess) {
        nextGuess = 0;
    }
    return nextGuess;
}

function addGuessToList(guess) {
    const ul = document.getElementById("guess-list");
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.insertAdjacentHTML('beforeend', `I'm guessing ${guess} - <div class="d-inline" id="guess-feedback">is that 
                        <div class="form-check mx-1 px-0 form-check-inline">
                            <input class="btn-check" type="radio" id="too-low" name="feedback40" value="low">
                            <label class="btn btn-sm btn-primary" for="too-low">too low</label>
                        </div>
                        <div class="form-check mx-1 px-0 form-check-inline">
                            <input class="btn-check" type="radio" id="too-high" name="feedback40" value="high">
                            <label class="btn btn-sm btn-primary" for="too-high">too high</label>
                        </div>
                        <div class="form-check mx-1 px-0 form-check-inline">
                            <input class="btn-check" type="radio" id="correct" name="feedback40" value="correct">
                            <label class="btn btn-sm btn-primary" for="correct">correct</label>
                        </div>
                        ?</div>`);
    ul.appendChild(li);
}

function handleClick(event) {
    let feedback = "";
    if (event.target.id === "correct") {
        feedback = "User indicated the guess was correct.";
        document.getElementById("guess-feedback").replaceWith(feedback);
        document.getElementById("start-game").textContent = "Start New Game";
        document.getElementById("start-game").disabled = false;
        return;
    } 
    if (event.target.id === "too-low") {
        feedback = "User indicated the guess was too low.";
        currentGuess = performGuess(currentGuess, true);
    } else if (event.target.id === "too-high") {
        feedback = "User indicated the guess was too high.";
        currentGuess = performGuess(currentGuess, false);   
    }
    if (currentGuess === 0 || currentGuess === 100) {
        feedback = "I think something went wrong. Please start a new game.";
        document.getElementById("guess-feedback").replaceWith(feedback);
        document.getElementById("start-game").textContent = "Start New Game";
        document.getElementById("start-game").disabled = false;
        return;
    }
    
    document.getElementById("guess-feedback").replaceWith(feedback);
    addGuessToList(currentGuess);
    document.getElementById("guess-form").addEventListener("change", handleClick);

}

function initGame(event) {
    currentGuess = 50;
    minGuess = 1;
    maxGuess = 100;
    event.preventDefault();
    const ul = document.getElementById("guess-list");
    ul.innerHTML = "";
    event.target.disabled = true;
    event.target.textContent = "Game in progress...";
    addGuessToList(currentGuess);
    document.getElementById("guess-form").addEventListener("change", handleClick);
    
}