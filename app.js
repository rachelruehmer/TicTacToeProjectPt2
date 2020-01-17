let cells = document.querySelectorAll('.cell');
cellCount = 0;
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
        checkWin()
        if (shape == 'X') {
            shape = 'O'
            let snd = new Audio("Rooster Crowing-SoundBible.com-43612401.mp3");
            snd.play();
        }
        else { shape = 'X' 
        let snd = new Audio("Rooster Crowing-SoundBible.com-43612401.mp3");
            snd.play();
    }

    };
};

function checkWin() {
    cellCount++
    for (i = 0; i < wins.length; i++) {
        let shapeCount = 0;
        for (j = 0; j < wins[i].length; j++) {
            if (wins[i][j].innerHTML == shape) {
                shapeCount++
            };
            if (shapeCount == 3) {
                alert(shape + ' is a winner winner chicken dinner!')
                reset()
                return;
            }

            if (cellCount == 9 && shapeCount == 3) {
                alert(shape + ' is a winner winner chicken dinner!')
                reset()
                return;
            }
            else if (shapeCount != 3 && cellCount == 9) {
                alert('Ya tied!')
                reset()
                return;
            }
        };
    };
};

function reset() {
    for (i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ''
        shape = 'O';
        cellCount = 0
    }
}


