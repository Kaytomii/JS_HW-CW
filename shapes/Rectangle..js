import Shape from "./Shape.js";

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    get name() {
        return "Rectangle";
    }

    info() {
        return this.name + ": width = " + this.width + ", height = " + this.height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}
export default Rectangle;