"use strict";

window.addEventListener("DOMContentLoaded", main);

function main() {
    console.log("Hello, World!");
    const numberToGuess = 42;
    //numberToGuess = Math.floor(Math.random() * 100) + 1;
    document.getElementById("guess-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.getElementById("guess-input");
        const guess = input.value;
        addGuessToList(guess, numberToGuess);
        if (parseInt(guess) === numberToGuess) {
            showSuccessMessage();
        }
        input.value = "";
    });
    document.getElementById("play-again").addEventListener("click", clearGuessList);
}

function addGuessToList(guess, numberToGuess) {
    const ul = document.getElementById("guess-list");
    const li = document.createElement("li");
    li.textContent = guess + (guess<numberToGuess ? " is too low." : guess>numberToGuess ? " is too high." : " is correct!");
    ul.appendChild(li);
}

function clearGuessList() {
    const ul = document.getElementById("guess-list");
    ul.innerHTML = "";
    document.getElementById("play-again").disabled = true;
    document.getElementById("guess-input").disabled = false;
    document.getElementById("success-message").style.display = "none";
}

function showSuccessMessage() {
    document.getElementById("play-again").disabled = false;
    document.getElementById("guess-input").disabled = true;
    document.getElementById("success-message").style.display = "block";
}
