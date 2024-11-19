const canvas = document.querySelector("#canvas-container");

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
}

function restartCanvas() {
    canvas.textContent = "";
  }

document.addEventListener("load", createCanvas());

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", (event) => {
    cell.classList.add("drawn");
  });
});
