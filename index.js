const fs = require("fs");
const inquirer = require("inquirer");

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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    );
}
function getShape (shape, color) {
    let renderedShape = "";
    if (shape === "circle") {
        renderedShape = new Circle;
    }
    else if (shape === "triangle") {
        renderedShape = new Triangle;
    }
    else if (shape === "square"){
        renderedShape = new Square;
    }
    renderedShape.setColor(color);
    return renderedShape.render();
}

function prepLogoObj () {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${getShape(response.shapeColor, response.shapeColor)}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
  
</svg>`;
}

}

function init () {

}