"use strict";

window.addEventListener("DOMContentLoaded", main);

function main() {
    console.log("Hello, World!");
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
    li.insertAdjacentHTML('beforeend', `I'm guessing ${guess} - <span id="guess-feedback">is that <button class="btn btn-light btn-sm" id="too-low">too low</button>, <button class="btn btn-light btn-sm" id="too-high">too high</button>, or <button class="btn btn-light btn-sm" id="correct">correct</button>?</span>`);
    ul.appendChild(li);
}

