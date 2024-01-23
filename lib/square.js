const Shape = require("./shapes");

// Square shape object
class Square extends Shape {
    constructor() {
        super();
    }
    setColor = function (color) {
        this.color = color;
        this.shape = `<rect x="50" y="20" width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = Square;