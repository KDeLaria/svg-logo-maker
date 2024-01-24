const fs = require("fs");
const inquirer = require("inquirer");
const Shape = require("./lib/shapes");
const Circle = require("./lib/circle");
const Triangle = require("./lib/triangle");
const Square = require("./lib/square");

// Ask the user questions about the logo
function askLogoQuestions () {
inquirer.prompt([
    {
        type: "input",
        message: "What is the text for your logo (up to 3 characters)? ",
        name: "text"
    },
    {
        type: "input",
        message: "What color (or hexadecimal color) do you want the text to be? ",
        name: "textColor"
    },
    {
        type: "list",
        message: "Which shape do you want to use? ",
        choices: ["circle", "triangle", "square"],
        name: "shape"
    },
    {
        type: "input",
        message: "What color (or hexadecimal color) do you want the shape to be? ",
        name: "shapeColor"
    }
])
.then(response =>{
    const logoData = getLogo(response);
    writeToFile("logo.svg", logoData);
});

// Creates a file and writes the data to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg'));
}

// Creates a new logo out of the responses
// by creating a new shape object
function getLogo (data) {
    let renderedShape;
    if (data.shape === "circle") {
        renderedShape = new Circle;
    }
    else if (data.shape === "triangle") {
        renderedShape = new Triangle;
    }
    else if (data.shape === "square"){
        renderedShape = new Square;
    }
    renderedShape.setColor(data.shapeColor);
    renderedShape.setText(data.text, data.textColor);
    return renderedShape.renderSVG();
}

}

function init () {
    askLogoQuestions();
}
init();