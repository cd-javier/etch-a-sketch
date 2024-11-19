const canvas = document.querySelector("#canvas");
const restartButton = document.querySelector("#restart-button");

let canvasDimensions = 50;
let cellColor = '#282828'

function getCellDimensions() {
  return (500 / canvasDimensions) + "px"
}

function createCanvas() {
  restartCanvas();
  const totalCells = canvasDimensions ** 2;
  for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = getCellDimensions()
    cell.style.height = getCellDimensions()
    canvas.appendChild(cell);
  }
  makeDrawable();
}

function restartCanvas() {
  canvas.textContent = "";
}

function makeDrawable() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", (event) => {
      cell.style.backgroundColor = cellColor;
    });
  });
}

function createNewCanvas() {
  canvasDimensions = prompt(
    "What size do you want the new canvas to be?\nInsert a value between 2 and 100",
    50
  );
  if (canvasDimensions > 100 || canvasDimensions < 2) {
    alert("I said between 2 and 100!");
    createNewCanvas();
  }
  createCanvas();
}

document.addEventListener("load", createCanvas());

restartButton.addEventListener("click", createNewCanvas);
