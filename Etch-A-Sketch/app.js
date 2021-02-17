// function: create drawing board
let createDrawingBoard = function(gridQuantity) {

    let drawingBoard = document.getElementById('drawing-board');
    let drawingBoardWidth = drawingBoard.offsetWidth;
    let drawingBoardHeight = drawingBoard.offsetHeight;

        for (let i = 0; i < gridQuantity; i++) {
            let row = document.createElement('div');
            row.className = 'row flex-default';
        
            for (let i = 0; i < gridQuantity; i++) {
                let square = document.createElement('div');
                square.classList.add('square');
                square.style.width = ((drawingBoardWidth / gridQuantity) - 2) + 'px';
                square.style.height = ((drawingBoardHeight / gridQuantity) - 2) + 'px';
                row.append(square);
            }
    
            row.style.height = (100 / gridQuantity) + '%';
            drawingBoard.append(row);
        }    
}


