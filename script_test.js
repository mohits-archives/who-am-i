const generateBtn = document.getElementById("generateBtn");
const revealBtn = document.getElementById("revealBtn");
const cluesEl = document.getElementById("clues");
const answerEl = document.getElementById("answer");

let players = [];
let currentPlayer = null;

fetch('players.json')
.then(response => response.json())
.then(data => {
    players = data;
})
.catch(error => {
    console.error('Error loading players:', error);
});

generateBtn.addEventListener("click", () => {
    cluesEl.innerHTML = "";
    answerEl.textContent = "";
    revealBtn.disabled = false;

    const randomIndex = Math.floor(Math.random() * players.length);
    currentPlayer = players[randomIndex];

    const clues = [
        `Nationality: ${currentPlayer.nationality}`,
        `Club: ${currentPlayer.club}`,
        `Position: ${currentPlayer.position}`,
        `Games played: ${currentPlayer.games}`,
        `Goals scored: ${currentPlayer.goals}`
    ];

    clues.forEach(clue => {
        const li = document.createElement("li");
        li.textContent = clue;
        cluesEl.appendChild(li);
    })
});

    revealBtn.addEventListener("click", () => {
        if(!currentPlayer) return;
        answerEl.textContent = `It's ${currentPlayer.name}! 🔥🔥🔥`;
});