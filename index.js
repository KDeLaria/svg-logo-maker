const fs = require("fs");
const inquirer = require("inquirer");
import {Shape, Circle, Triangle, Square} from "./lib/shapes.js";

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
    const logoData = prepLogoObj(response);
    writeToFile("logo.svg", logoData);
});

// Creates a file and writes the data to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    );
}

// Creates a new shape object and
// returns a rendered shape object
function getShape (shape, color) {
    let renderedShape;
    if (shape === "circle") {
        renderedShape = new Circle;
        // `<text x="147" y="117" font-size="60" text-anchor="middle" fill="${textColor}">`
    }
    else if (shape === "triangle") {
        renderedShape = new Triangle;
        // `<text x="150" y="170" font-size="60" text-anchor="middle" fill="${textColor}">`
    }
    else if (shape === "square"){
        renderedShape = new Square;
        // `<text x="125" y="112" font-size="60" text-anchor="middle" fill="${textColor}">`
    }
    renderedShape.setColor(color);
    return renderedShape.render();
}

// Creates the svg object ready to be written to file
function prepLogoObj (logoResponse) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${getShape(logoResponse.shape, logoResponse.shapeColor)}
  
    <text x="140" y="133" font-size="60" text-anchor="middle" fill="${logoResponse.textColor}">${logoResponse.text.substr(0,3)}</text>
  
</svg>`;
}

}

function init () {
    askLogoQuestions();
}
init();