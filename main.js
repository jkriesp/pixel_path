const container = document.querySelector('.container');
const resetButton = document.querySelector('#reset')
let square = document.createElement('div');

let fixed_size = 640;
let rowSquares = 4;

makeGrid();

resetButton.addEventListener('click', function () {
    try {
        rowSquares = prompt("How many squares per side?");
        if (rowSquares == "") throw "empty";
        if (rowSquares > 64) throw "too high";
        if (rowSquares < 2) throw "too low";
        removeGrid();
        makeGrid();
    } catch (error) {
        alert("Please input a value from 2-64. Error: " + error);
    }
});

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function makeGrid() {
    let size = fixed_size / rowSquares;
    container.style.width = fixed_size + "px";
    container.style.height = fixed_size + "px";

    for (let i = 0; i < rowSquares; i++) {
        for (let j = 0; j < rowSquares; j++) {
            square = document.createElement('div');
            square.setAttribute('id', 'square');
            square.style.cssFloat = "left";
            square.style.background = "whitesmoke";
            square.style.opacity = "1.0";
            square.style.width = size + "px";
            square.style.height = size + "px";
            container.appendChild(square);

        }
    }
    const cells = document.querySelectorAll('#square');

    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', (e) => {
            // Fade to black on each mouseenter
            if (e.target.style.background !== 'whitesmoke') {
                if (e.target.opacity < 0) return;
                e.target.style.opacity = e.target.style.opacity - 0.1;
            } else {
                e.target.style.background = addRandomColor();
            }
        });
    });
}

function addRandomColor() {
    const red = getRandomInt(255);
    const green = getRandomInt(255);
    const blue = getRandomInt(255);
    const opacity = 1.0;

    return "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
}

function getRandomInt(max) {
    // Helper method to get random integer
    return Math.floor(Math.random() * Math.floor(max));
}