class Shape {
    setColor(color) {
        this.color = color;
    }
    render() {
        return this.shape;
    }
}

class Circle extends Shape {
constructor (){
    this.shape = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
}
}

class Triangle extends Shape {
    constructor () {
    this.shape = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor () {
        this.shape = `<rect x="50" y="20" width="150" height="150" fill="${this.color}" />`;
    }
}
