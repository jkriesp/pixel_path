const container = document.querySelector('.container');
const resetButton = document.querySelector('#reset')
let square = document.createElement('div');

let fixed_size = 400;
let rowSquares = 3;

makeGrid();

resetButton.addEventListener('click', function () {
    rowSquares = prompt("Grid size?");
    removeGrid();
    makeGrid();

});

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function makeGrid() {
    let size = fixed_size/ rowSquares;
    container.style.width = fixed_size +"px";
    container.style.height = fixed_size + "px";

    for (let i = 0; i < rowSquares; i++) {
        for (let j = 0; j < rowSquares; j++) {
            square = document.createElement('div');
            square.setAttribute('id', 'square');
            square.setAttribute('row-id', i);
            square.style.cssFloat = "left";
            square.style.background = "white";
            square.style.opacity = "1.0";
            square.style.width = size + "px";
            square.style.height = size + "px";
            container.appendChild(square);

        }
        // square = document.createElement('div');
        // square.setAttribute('id', 'square');
        // square.setAttribute('column-id', i);
        // square.style.background = "white";
        // square.style.opacity = "1.0";
        // square.style.width = size + "px";
        // square.style.height = size + "px";
        // container.appendChild(square); 
    }
    const cells = document.querySelectorAll('#square');

    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', (e) => {
            if(e.target.style.background !== 'white') {
                if(e.target.opacity < 0) return;
                e.target.style.opacity = e.target.style.opacity - 0.1;
                
            } else {
                e.target.style.background = addRandomColor();
            }
            
        });
    });
}

function addBlack () {
    console.log(arguments[0]);
}

function createSquare() {
    square = document.createElement('div');
    square.setAttribute('id', 'square');
    square.setAttribute(arguments[0], arguments[1]);
    square.style.cssFloat = "left";
    square.style.background = "white";
    square.style.width = size + "px";
    square.style.height = size + "px";
    container.appendChild(square);
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

