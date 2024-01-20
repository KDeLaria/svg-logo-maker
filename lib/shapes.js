class Shape {
    constructor () {
    }
    render() {
        return this.shape;
    }
}

// Circle shape object
class Circle extends Shape {
    constructor() {
        super();
    }
    setColor = function (color) {
        this.color = color;
        this.shape = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
        console.log(`The shape color has been set to ${this.color}`);
    }
}

// Triangle shape object
class Triangle extends Shape {
    constructor() {
        super();
    }
    setColor = function (color) {
        this.color = color;
        this.shape = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
        console.log(`The shape color has been set to ${this.color}`);
    }
}

// Square shape object
class Square extends Shape {
    constructor() {
        super();
    }
    setColor = function (color) {
        this.color = color;
        this.shape = `<rect x="50" y="20" width="150" height="150" fill="${this.color}" />`;
        console.log(`The shape color has been set to ${this.color}`);
    }
}