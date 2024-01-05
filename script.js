
const gridContainer = document.getElementById("gridContainer");
const gridPoint = document.getElementsByClassName("gridPoint");
const resizeButton = document.getElementById("resizeButton");
let gridSize = 16;
let gridWidth = (window.innerWidth / 2);
let pointSize = (gridWidth / gridSize);

drawGrid();

resizeButton.addEventListener("click", function() {
    gridSize = prompt("Please enter grid division (max: 100)", 16);
    if (gridSize > 100) {
        gridSize = 100;
    }
    gridWidth = (window.innerWidth / 2);
    pointSize = (gridWidth / gridSize);
    clearGrid();
    drawGrid();
});

function drawGrid() {
for (let step = 0; step < (gridSize ** 2); step++) {
gridContainer.style.width = gridWidth + "px";
gridContainer.style.height = gridWidth + "px";
const point = document.createElement("div");
point.classList.add("gridPoint");
point.style.width = pointSize + "px";
point.style.height = pointSize + "px";
point.addEventListener("mouseover", (event) => {
    //point.classList.add("etchedPoint");
    //point.style.backgroundColor = "purple";
    point.style.backgroundColor = "rgb(" + randoRgbValue() + ", " + randoRgbValue() + ", " + randoRgbValue() + ")";
});
gridContainer.appendChild(point);

//console.log('x');
}
}

function clearGrid() {
const trash = document.getElementById("gridContainer");
while(trash.firstChild) {
    trash.removeChild(trash.firstChild);
}
}

function randoRgbValue() {
    num = Math.floor(Math.random() * 255);
    return(num);
}

