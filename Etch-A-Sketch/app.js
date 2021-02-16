// function: create drawing board
let createDrawingBoard = function(gridQuantity) {

    let drawingBoard = document.getElementById('drawing-board');

    for (let i = 0; i < gridQuantity; i++) {
        let row = document.createElement('div');
        row.className = 'row flex-default';
    
        for (let i = 0; i < gridQuantity; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            row.append(square);

            //calculate width and height based on gridQuantity
        }

        drawingBoard.append(row);
    }    
}

