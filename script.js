const canvas = document.querySelector('#canvas-container')

const CANVAS_DIMENSIONS = 16;
const TOTAL_CELLS = CANVAS_DIMENSIONS ** 2;

for (let i = 1; i <= TOTAL_CELLS; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell')
    canvas.appendChild(cell)
}

const cells = document.querySelectorAll('.cell')

cells.forEach((cell) => {
    cell.addEventListener('mouseover', (event) => {
        cell.classList.add('drawn')
    })
})