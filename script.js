
const gridContainer = document.getElementById("gridContainer");
const gridPoint = document.getElementsByClassName("gridPoint");
const resizeButton = document.getElementById("resizeButton");
let gridSize = 16;
let gridWidth = (window.innerWidth / 2);
let pointSize = (gridWidth / gridSize);
let targetDone = null;
let executed = 0;

drawGrid();

resizeButton.addEventListener("click", function() {
    gridSize = prompt("Please enter grid division (max: 100, gets laggy above 45ish!)", 16);
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
gridContainer.appendChild(point);
}}


gridContainer.addEventListener("mouseover", function(event) {
    let target = event.target;
    
    if(target.classList.contains("gridPoint") && executed === 0) {

    let computedStyle = window.getComputedStyle(target);
    let opacity = parseFloat(computedStyle.opacity);
    //console.log(opacity);
    target.style.backgroundColor = "rgba(" + randoRgbValue() + ", " + randoRgbValue() + ", " + randoRgbValue() + ")";
    if (opacity === 0.99) {
        target.style.opacity = 0.1.toString();
        //executed = 1;
        //targetDone = target;
    }
    if (parseFloat(opacity) < 0.9) {
        let newOpacity = (parseFloat(opacity));
        newOpacity += 0.1;
        //console.log(newOpacity);
        target.style.opacity = newOpacity.toString();
        //executed = 1;
        //targetDone = target;
    }
    
}




});
/*
gridContainer.addEventListener("mouseleave", function(event) {
    if(targetDone) {
        executed = 0;
        targetDone = null;
    }
});

point.addEventListener("mouseover", (event) => {
    let computedStyle = window.getComputedStyle(point);
    let opacity = computedStyle.opacity;
    //let alpha = bgColor.slice(-5, -1);
    //console.log(opacity);
    //console.log(alpha);
    point.style.backgroundColor = "rgba(" + randoRgbValue() + ", " + randoRgbValue() + ", " + randoRgbValue() + ")";
    if (opacity === "0.99") {
        point.style.opacity = "0.1";
    }
    if (parseFloat(opacity) < 0.9) {
        let newOpacity = (parseFloat(opacity));
        newOpacity += 0.1;
        //console.log(newOpacity);
        point.style.opacity = `${newOpacity}`;
    }
});
*/




function clearGrid() {
const trash = document.getElementById("gridContainer");
while(trash.firstChild) {
    trash.removeChild(trash.firstChild);
}
}

function randoRgbValue() {
    num = Math.floor(Math.random() * 255);
    return(num);
};
