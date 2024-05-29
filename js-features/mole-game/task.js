let dead = 0;
let lost = 0;
let deadDisplay = document.getElementById('dead');
let lostDisplay = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function startGame() {
    for (let i = 1; i <= 9; i++) {
        getHole(i).addEventListener('click', onHoleClick);
    }
}

function onHoleClick(event) {
    if (event.target.classList.contains('hole_has-mole')) {
        dead++;
        deadDisplay.textContent = dead;
        if (dead === 10) {
            alert('Вы выиграли!');
            location.reload();
        }
    } else {
        lost++;
        lostDisplay.textContent = lost;
        if (lost === 5) {
            alert('Игра завершена. Вы проиграли :(');
            location.reload();
        }
    }
}

window.onload = startGame;