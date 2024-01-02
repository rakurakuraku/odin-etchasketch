
const gridContainer = document.getElementById("gridContainer");
let gridSize = 100;
let gridWidth = (window.innerWidth / 2);
let pointSize = (gridWidth / gridSize);
const gridPoint = document.getElementById("gridPoint");




for (let step = 0; step < (gridSize ** 2); step++) {
const gridPoint = document.createElement("div");
gridPoint.id = "gridPoint";
gridPoint.style.width = pointSize + "px";
gridPoint.style.height = pointSize + "px";
document.getElementById("gridContainer").appendChild(gridPoint);
console.log('x');
}

