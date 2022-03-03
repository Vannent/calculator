let currentOperand = "";
let previousOperand = "";
let operation = undefined;

const numberButtons = document.querySelectorAll("[data-numbers]");
const operandButtons = document.querySelectorAll("[data-operators]");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalButton = document.getElementById("equals");
const previousOperandText = document.getElementById("previous-operand");
const currentOperandText = document.getElementById("current-operand");

numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        appendNumber(button.textContent);
        console.log("Button " + e.target.textContent + " clicked.");
    })
})

clearButton.addEventListener("click", (e) => {
    clear();
    console.log("Button " + e.target.textContent + " clicked.");
})

function appendNumber(number) {
    currentOperandText.textContent += number;
}

function clear() {
    currentOperandText.textContent = "";
    previousOperandText.textContent = "";
    currentOperand = "";
    previousOperand = "";
    operation = undefined
}
// function addFunc(a, b) {
//     return a + b;
// }
// console.log("Add funct: " + addFunc(2, 4));

// function subFunc(a, b) {
//     return a - b;
// }
// console.log("Substract funct: " + subFunc(2, 4));

// function mulFunc(a, b) {
//     return a * b;
// }
// console.log("Multiply funct: " + mulFunc(2, 4));

// function divFunc(a, b) {
//     return a / b;
// }
// console.log("Divide funct: " + divFunc(2, 4));
