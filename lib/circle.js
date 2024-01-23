const Shape = require("./shapes");

// Circle shape object
class Circle extends Shape {
    constructor() {
        super();
    }
    setColor = function (color) {
        this.color = color;
        this.shape = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

module.exports = Circle;