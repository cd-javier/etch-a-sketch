const canvas = document.querySelector("#canvas");
const restartButton = document.querySelector("#restart-button");

let canvasDimensions = 25;
let cellColor = '#282828'

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
    "What size do you want the new canvas to be?\nInsert a value between 10 and 100",
    25
  );
  if (canvasDimensions > 100 || canvasDimensions < 25) {
    alert("I said between 25 and 100!");
    createNewCanvas();
  }
  createCanvas();
}

document.addEventListener("load", createCanvas());

restartButton.addEventListener("click", createNewCanvas);
