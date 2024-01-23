const Shape = require("./shapes");
const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

// Tests for a blue triangle
describe("Tests for a blue triangle", () => {
    it("should return the a blue triangle", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

// Tests for a red circle
describe("Tests for a red circle", () => {
    it("should return the a red circle", () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
});

// Tests for a green square
describe("Tests for a green square", () => {
    it("should return the a green square", () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x="50" y="20" width="160" height="160" fill="green" />');
    });
});