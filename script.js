const canvas = document.querySelector("#canvas-container");
const restartButton = document.querySelector("#restart-button");

let canvasDimensions = 16;

function createCanvas() {
  restartCanvas();
  canvas.style.width = canvasDimensions * 10 + "px";
  canvas.style.height = canvasDimensions * 10 + "px";
  const totalCells = canvasDimensions ** 2;
  for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    canvas.appendChild(cell);
  }
  makeDrawable()
}

function restartCanvas() {
  canvas.textContent = "";
}

function makeDrawable() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("mouseenter", (event) => {
        cell.classList.add("drawn");
      });
    });
  }  

function createNewCanvas() {
  canvasDimensions = prompt("What size do you want the new canvas to be?", 10);
  createCanvas();
}

document.addEventListener("load", createCanvas());

restartButton.addEventListener("click", createNewCanvas);

