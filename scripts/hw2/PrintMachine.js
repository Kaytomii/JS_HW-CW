class PrintMachine {
    constructor(fontSize, fontColor, fontFamily) {
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.fontFamily = fontFamily;
    }

    print(text) {
        const p = document.createElement("p");
        p.style.fontSize = this.fontSize;
        p.style.color = this.fontColor;
        p.style.fontFamily = this.fontFamily;
        p.textContent = text;
        document.body.append(p);
    }
}