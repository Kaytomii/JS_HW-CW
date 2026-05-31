const container = document.getElementById("container");
const button = document.getElementById("add");

button.onclick = () => {
  const block = document.createElement("div");
  block.className = "block";
  block.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  block.onclick = () => block.remove();
  container.appendChild(block);
};
