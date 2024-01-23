const Shape = require("./shapes");

// Triangle shape object
class Triangle extends Shape {
    constructor() {
        super();
    }
    setColor = function (color) {
        this.color = color;
        this.shape = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = Triangle;