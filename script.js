const canvas = document.querySelector("#canvas");
const restartButton = document.querySelector("#restart-button");
const classicButton = document.querySelector("#classic-button");
const shadeButton = document.querySelector("#shade-button");
const rainbowButton = document.querySelector("#rainbow-button");

let canvasDimensions = 50;
let cellColor = "#282828";
let currentMode = "classic";

function getCellDimensions() {
  return 500 / canvasDimensions + "px";
}

function getRandomColor() {
  const rainbow = [
    "E6271F",
    "EB7532",
    "F7D137",
    "A3E048",
    "49DA9A",
    "35BCE6",
    "4355DB",
    "D23BE7",
  ];
  return "#" + rainbow[Math.floor(Math.random() * rainbow.length)];
}

function createCanvas() {
  restartCanvas();
  const totalCells = canvasDimensions ** 2;
  for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = getCellDimensions();
    cell.style.height = getCellDimensions();
    cell.style.opacity = 0;
    cell.style.backgroundColor = cellColor;
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
      if (currentMode === "classic") {
        cell.style.backgroundColor = cellColor;
        cell.style.opacity = 1;
      } else if (currentMode === "shade") {
        cell.style.opacity = (cell.style.opacity * 10 + 2) / 10;
      } else if (currentMode === "rainbow") {
        cell.style.backgroundColor = getRandomColor();
        cell.style.opacity = 1;
      }
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
classicButton.addEventListener("click", () => {
  currentMode = "classic";
});
shadeButton.addEventListener("click", () => {
  currentMode = "shade";
});
rainbowButton.addEventListener("click", () => {
  currentMode = "rainbow";
});
