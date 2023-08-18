var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6; // Ternary operator
            reset();
        });
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++){
        // Add click event listeners to the squares
        squares[i].addEventListener("click", function(){
            // Grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // Compare color to pickedColor
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!  "
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}

function reset(){
    // Generate all new colors
    colors = generateRandomColors(numOfSquares);
    // Pick a new random color from the array
    pickedColor = pickColor();
    // Change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"
    // Change colors of squares
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i]
        }
        else{
            squares[i].style.display = "none";  
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    // Loop through all squares
    for (var i = 0; i < squares.length; i++){
        // Change each color to match the given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
    // Make an array
    var arr = [];
    // Repeat num times
    for (var i = 0; i < num; i++){
        // Get random color and push into array
        // Using the push array method: arr.push(randomColor());
        arr[i] = randomColor(); // Assigning random colors as array elements
    }
    return arr;
}

function randomColor(){
    // Pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // Pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // Pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}