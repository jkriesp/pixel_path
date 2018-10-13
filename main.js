const container = document.querySelector('.container');
let square = document.createElement('div');

let size = 32;

makeGrid(20);

function makeGrid() {
    if (arguments.length > 1) {
        return;
    }

    for (let i = 0; i < arguments[0]; i++) {
        for (let j = 0; j < arguments[0]; j++) {
            square = document.createElement('div');
            square.setAttribute('id', 'square');
            square.setAttribute('row-id', i);
            square.style.cssFloat = "left";
            square.style.background = "black";
            square.style.width = size +"px";
            square.style.height = size + "px";
            container.appendChild(square);

        }
        square = document.createElement('div');
        square.setAttribute('id', 'square');
        square.setAttribute('column-id', i);
        square.style.background = "black";
        square.style.width = size + "px";
        square.style.height = size +"px";
        container.appendChild(square);
    }
}
const cells = document.querySelectorAll('#square');

cells.forEach((cell) => {
    cell.addEventListener('mouseenter', (e) => {
        console.log(e.target);
        
        if (e.target.style.background == "blue" ||
            e.target.style.background == "pink") {
            e.target.style.background = "pink";
        }else {

            e.target.style.background = "blue";
        }
    });
});

