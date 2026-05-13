import Square from "../shapes/Square.js";
import Rectangle from "../shapes/Rectangle..js";
import Triangle from "../shapes/Triangle.js";


const shapes = [
    new Square(5),
    new Rectangle(4, 7),
    new Triangle(3, 4, 5)
];

shapes.forEach(s => {
    console.log(s.info() + "\nArea: " + s.area() + "\nPerimeter: " + s.perimeter() + "\n");
});
