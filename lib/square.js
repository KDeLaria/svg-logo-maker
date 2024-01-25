const Shape = require("./shapes");

// Square shape object
class Square extends Shape {
    constructor(color = "", text = "", textColor = "") {
        super();
        this._color = color;
        this._text = text;
        this._textColor = textColor;
        this._shape = `<rect x="90" y="40" width="120" height="120" fill="${this._color}" />`;
        this._decoratedText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this._textColor}">${this._text}</text>`;
    }
    setColor (color = "") {
        this._color = color;
        this._shape = `<rect x="90" y="40" width="120" height="120" fill="${this._color}" />`;
    }
    setText(text = "", textColor = "") {
        this._text = text;
        this._textColor = textColor;
        this._decoratedText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this._textColor}">${this._text}</text>`; 
    }
}

module.exports = Square;