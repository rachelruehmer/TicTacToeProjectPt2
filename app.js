let cells = document.querySelectorAll('.cell');
let cellCount = 0;
let shape = 'X'
// variables

let wins = [
    [cells[0], cells[1], cells[2]],
    [cells[0], cells[3], cells[6]],
    [cells[0], cells[4], cells[8]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[4], cells[6]],
    [cells[2], cells[5], cells[8]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],

]
// Functions

for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', clickedCell)
};

function clickedCell(cell) {
    if (cell.target.textContent == '') {
        cell.target.textContent = shape
    
        if (shape == 'X') {
            shape = 'O'
        } else
         { shape = 'X'}
    };

    function checkWin() {
        cellcount++
        for (i = 0; i < wins.length; i++) {
            let shapeCount = 0;
            for (j = 0; j < wins[i].length; j++) {

            }

        }
    };