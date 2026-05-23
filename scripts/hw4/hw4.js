// const btn = document.getElementById("toggleBtn");
// const text = document.getElementById("text");

// btn.onclick = () => {
//     if (text.style.display === "none") {
//         text.style.display = "block";
//         btn.textContent = "Hide";
//     } else {
//         text.style.display = "none";
//         btn.textContent = "Show";
//     }
// };

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach(tab => {
    tab.onclick = () => {
        tabs.forEach(t => t.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.target).classList.add("active");
    };
});
