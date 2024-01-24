const Shape = require("./shapes");

// Circle shape object
class Circle extends Shape {
    constructor() {
        super();
    }
    setColor (color = "") {
        this._color = color;
        this._shape = `<circle cx="150" cy="100" r="80" fill="${this._color}" />`;
    }
    setText(text = "", textColor = "") {
        this._text = text;
        this._textColor = textColor;
        this._decoratedText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this._textColor}">${this._text}</text>`;
        
    }
}

module.exports = Circle;