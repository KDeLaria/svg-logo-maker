class Shape {
    constructor () {
    }
    render() {
        return this._shape;
    }

// Creates the svg object
renderSVG () {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${this._shape}
  
    ${this._decoratedText}
  
</svg>`;
}
    
}

module.exports = Shape;