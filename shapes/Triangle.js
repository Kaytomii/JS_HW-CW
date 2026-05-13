import Shape from "./Shape.js";

class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get name() {
        return "Triangle";
    }

    info() {
        return this.name + ": sides = " + this.a + ", " + this.b + ", " + this.c;
    }

    area() {
        const p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }

    perimeter() {
        return this.a + this.b + this.c;
    }
}
export default Triangle;