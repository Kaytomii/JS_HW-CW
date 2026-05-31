// const list = document.createElement("div");
// document.getElementById("block").append(list);

// const clearBtn = document.createElement("button");
// clearBtn.innerText = "Clear";
// clearBtn.style.marginTop = "20px";
// document.getElementById("block").append(clearBtn);

// function render() {
//   const items = JSON.parse(localStorage.getItem("products") || "[]");
//   list.innerHTML = "";
//   items.forEach(([p, pr]) => {
//     const row = document.createElement("p");
//     row.innerText = `${p} — ${pr}`;
//     list.append(row);
//   });
// }

// render();

// const form = document.getElementById("form-add");

// form.addEventListener("submit", e => {
//   e.preventDefault();
//   const data = Object.fromEntries(new FormData(form).entries());
//   const items = JSON.parse(localStorage.getItem("products") || "[]");
//   items.push([data.product, data.price]);
//   localStorage.setItem("products", JSON.stringify(items));
//   form.reset();
//   render();
// });

// clearBtn.onclick = () => {
//   localStorage.removeItem("products");
//   render();
// };

//Task 2
const n = 10;

const promise = new Promise((resolve, reject) => {
  const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 100));
  const even = arr.filter(x => x % 2 === 0).length;
  const odd = n - even;
  even > odd ? resolve(even) : reject(odd);
});

promise
  .then(evenCount => console.log("Resolved:", evenCount))
  .catch(oddCount => console.log("Rejected:", oddCount));
