const Shape = require("./shapes");

// Triangle shape object
class Triangle extends Shape {
    constructor(color = "", text = "", textColor = "") {
        super();
        this._color = color;
        this._text = text;
        this._textColor = textColor;
        this._shape = `<polygon points="150, 18 244, 182 56, 182" fill="${this._color}" />`;
        this._decoratedText = `<text x="150" y="160" font-size="60" text-anchor="middle" fill="${this._textColor}">${this._text}</text>`;
    }
}

module.exports = Triangle;