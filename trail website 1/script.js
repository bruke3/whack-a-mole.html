// script.js

document.addEventListener('DOMContentLoaded', () => {
    const holes = document.querySelectorAll('.hole');
    let activeHole = null;

    function getRandomHole() {
        const index = Math.floor(Math.random() * holes.length);
        return holes[index];
    }

    function activateMole() {
        if (activeHole) {
            activeHole.classList.remove('active');
        }
        activeHole = getRandomHole();
        activeHole.classList.add('active');
    }

    function startGame() {
        setInterval(activateMole, 1000); // Change mole every second
    }

    holes.forEach(hole => {
        hole.addEventListener('click', () => {
            if (hole === activeHole) {
                hole.classList.remove('active');
                activeHole = null;
                // You can add code here to update the score
            }
        });
    });

    startGame();
});
