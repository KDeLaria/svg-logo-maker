const Shape = require("./shapes");
const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

describe("SVG full render tests", () => {
    // Tests for a blue triangle with orange text "CAR"
    describe("Tests for a blue triangle and orange text", () => {
        it("should return the a blue triangle with orange text 'CAR'", () => {
            const shape = new Triangle();
            shape.setColor("blue");
            shape.setText("CAR", "orange");
            expect(shape.renderSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
  
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="orange">CAR</text>
  
</svg>`);
        });
    });

    // Tests for a red circle with yellow text "NEW"
    describe("Tests for a red circle with yellow text", () => {
        it("should return the a red circle with yellow text 'NEW'", () => {
            const shape = new Circle();
            shape.setColor("red");
            shape.setText("NEW", "yellow");
            expect(shape.renderSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="red" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">NEW</text>
  
</svg>`);
        });
    });

    // Tests for a green square with purple text "WIN"
    describe("Tests for a green square with purple text", () => {
        it("should return the a green square with purple text 'WIN'", () => {
            const shape = new Square();
            shape.setColor("green");
            shape.setText("WIN", "purple");
            expect(shape.renderSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="90" y="40" width="120" height="120" fill="green" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">WIN</text>
  
</svg>`);
        });
    });
});
