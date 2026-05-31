import Shape from "./Shape.js";

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    get name() {
        return "Square";
    }

    info() {
        return this.name + ": side = " + this.side;
    }

    area() {
        return this.side * this.side;
    }

    perimeter() {
        return this.side * 4;
    }
}
export default Square;