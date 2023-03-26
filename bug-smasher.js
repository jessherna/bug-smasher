"use strict";

const gameArea = document.querySelector("#game-area");
const bug = document.querySelector("#bug");
const scoreDisplay = document.querySelector("#score");
const resetScoreButton = document.querySelector("#reset-score");
const resetSpeedButton = document.querySelector("#reset-speed");
    
let score = 0;
let hoppingInterval = 1000;
let bugTimeoutId;

bug.addEventListener("click", incrementScore);
resetScoreButton.addEventListener("click", resetScore);
resetSpeedButton.addEventListener("click", resetSpeed);
    
hopBug();

function hopBug() {
    const maxX = gameArea.clientWidth - bug.clientWidth;
    const maxY = gameArea.clientHeight - bug.clientHeight;
        
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
        
    bug.style.left = newX + "px";
    bug.style.top = newY + "px";
        
    bugTimeoutId = setTimeout(hopBug, hoppingInterval);
}
    
function incrementScore() {
    score++;
    scoreDisplay.textContent = score;
    hoppingInterval -= 50;
    if (hoppingInterval < 50) {
        hoppingInterval = 50;
    }
}
    
function resetScore() {
    score = 0;
    scoreDisplay.textContent = score;
}
    
function resetSpeed() {
    hoppingInterval = 1000;
    clearTimeout(bugTimeoutId);
    hopBug();
}
    
