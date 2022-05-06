const counterValue = document.querySelector("#value");

let num = 0;


const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
console.log(decrementBtn.dataset.action)
console.log(decrementBtn.textContent)

const addValue = () => {
    num += 1
    counterValue.innerHTML = num
}

const minusValue = () => {
    num -= 1
    counterValue.innerHTML = num
}

incrementBtn.addEventListener("click", addValue)
decrementBtn.addEventListener("click", minusValue)