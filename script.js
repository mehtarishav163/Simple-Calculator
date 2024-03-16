let num1 = Math.floor(Math.random() * 1000001)
let num2 = Math.floor(Math.random() * 1000001)


document.getElementById("num1-el").textContent = num1

document.getElementById("num2-el").textContent = num2

let ansEl = document.getElementById("answer-el")



function add() {
    let result = num1 + num2
    ansEl.textContent = "Answer: " + result
}

function subtract() {
    let result = num1 - num2
    ansEl.textContent = "Answer: " + result
}

function multiply() {
    let result = num1 * num2
    ansEl.textContent = "Answer: " + result
}

function divide() {
    let result = num1 / num2
    ansEl.textContent = "Answer: " + result
}