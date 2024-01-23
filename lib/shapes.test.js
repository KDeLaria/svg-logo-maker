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
    })
})