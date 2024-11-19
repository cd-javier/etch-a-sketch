const canvas = document.querySelector("#canvas-container");

let canvasDimensions = 50;
let totalCells = canvasDimensions ** 2;

function createCanvas() {
  canvas.style.width = canvasDimensions * 10 + "px";
  canvas.style.height = canvasDimensions * 10 + "px";
  for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    canvas.appendChild(cell);
  }
}

document.addEventListener("load", createCanvas());

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", (event) => {
    cell.classList.add("drawn");
  });
});
