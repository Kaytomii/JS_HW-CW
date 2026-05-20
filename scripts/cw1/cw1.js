const div = document.createElement("div")

const p1 = document.createElement("p")
p1.innerText = "C++"

const p2 = document.createElement("p")
p2.innerText = "C#"

const p3 = document.createElement("p")
p3.innerText = "JS"

div.append(p1)
div.append(p2)
div.append(p3)

document.body.append(div)

const btn = document.createElement("button")
btn.innerText = "Show"
document.body.append(btn)

btn.onclick = function () {
    const lang = prompt("Enter next programming language:")
    if (lang) {
        const newP = document.createElement("p")
        newP.innerText = lang
        div.append(newP)
    }
}
