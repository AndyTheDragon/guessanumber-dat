"use strict";

window.addEventListener("DOMContentLoaded", main);

function main() {
    console.log("Hello, World!");
    document.getElementById("guess-form").addEventListener("change", (event) => { console.log("Feedback changed. " + event.target.id + " was selected"); });
}

function performGuess(prevGuess, tooLow) {
    if (tooLow) {
        return prevGuess + 1;
    } else {
        return prevGuess - 1;
    }
}

function addGuessToList(guess) {
    const ul = document.getElementById("guess-list");
    const li = document.createElement("li");
    li.insertAdjacentHTML('beforeend', `I'm guessing ${guess} - <div class="d-inline" id="guess-feedback">is that 
                        <div class="form-check form-check-inline">
                            <input class="btn-check" type="radio" id="too-low" name="feedback40" value="low">
                            <label class="btn btn-sml btn-primary" for="too-low">too low</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="btn-check" type="radio" id="too-high" name="feedback40" value="high">
                            <label class="btn btn-sml btn-primary" for="too-high">too high</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="btn-check" type="radio" id="correct" name="feedback40" value="correct">
                            <label class="btn btn-sml btn-primary" for="correct">correct</label>
                        </div>
                        ?</div>`);
    ul.appendChild(li);
}

function handleClick(event) {
    let feedback = "";
    if (event.target.id === "too-low") {
        feedback = "User indicated the guess was too low.";
    } else if (event.target.id === "too-high") {
        feedback = "User indicated the guess was too high.";
    } else if (event.target.id === "correct") {
        feedback = "User indicated the guess was correct.";
    }
    document.getElementById("guess-feedback").replaceWith(feedback);
}

function initGame() {
    let currentGuess = 50;
    let minGuess = 1;
    let maxGuess = 100;
    addGuessToList(currentGuess);
    document.getElementById("guess-form").addEventListener("change", handleClick);
    
}