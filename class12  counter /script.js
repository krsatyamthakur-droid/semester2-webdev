const counter = document.querySelector(".center h1");
const decrement = document.querySelector(".button1");
const reset = document.querySelector(".button2");
const increment = document.querySelector(".button3");

let count = parseInt(counter.innerText);

increment.addEventListener("click", () => {
    count++;
    counter.innerText = count;
});

decrement.addEventListener("click", () => {
    count--;
    counter.innerText = count;
});

reset.addEventListener("click", () => {
    count = 0;
    counter.innerText = count;
});
