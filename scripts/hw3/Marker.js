class Marker {
    constructor(color, ink) {
        this.color = color;
        this.ink = ink;
    }

    print(text) {
        let output = "";
        for (let char of text) {
            if (this.ink <= 0) break;
            output += char;
            if (char !== " ") this.ink -= 0.5;
        }

        const p = document.createElement("p");
        p.style.color = this.color;
        p.textContent = output;
        document.body.append(p);
    }
}

export default Marker;