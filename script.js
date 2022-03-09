let currentOperand = "";
let previousOperand = "";
let currentOperation = null;
const ESCAPE_KEY = 27;

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

operandButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        chooseOperation(button.textContent);
        console.log("Button " + e.target.textContent + " clicked.");
    })
})

clearButton.addEventListener("click", (e) => {
    clear();
    console.log("Button " + e.target.textContent + " clicked.");
})

deleteButton.addEventListener("click", (e) => {
    deletebut();
    console.log("Button " + e.target.textContent + " clicked.");
})

equalButton.addEventListener("click", (e) => {
    compute();
    console.log("Button " + e.target.textContent + " clicked.");
})

window.addEventListener("keydown", keyboardSupport);

function appendNumber(number) {
    currentOperand += number;
    currentOperandText.textContent += number;
}

function clear() {
    currentOperandText.textContent = "";
    previousOperandText.textContent = "";
    currentOperand = "";
    previousOperand = "";
    currentOperation = null;
}

function deletebut() {
    currentOperandText.textContent = currentOperandText.textContent
    .toString()
    .slice(0, -1)
    currentOperand = currentOperand
    .toString()
    .slice(0, -1)
}

function chooseOperation(operation) {
    if (currentOperand === "") return
    if (previousOperand !== "" || currentOperation !== null) {
        compute();
    }
    previousOperandText.textContent = currentOperandText.textContent;
    currentOperandText.textContent = "";
    previousOperand = currentOperand;
    currentOperand = "";
    currentOperation = operation;
}

function compute() {
    if (currentOperation === null) return
    else currentOperandText.textContent = results(calculation(currentOperation,currentOperand, previousOperand))
    currentOperand = currentOperandText.textContent;
    currentOperation = null;
}

function results(number) {
    return Math.round(number * 1000) / 1000
}

function calculation(operation, currentOperand, previousOperand) {
    a = parseFloat(currentOperand)
    b = parseFloat(previousOperand)
    switch(operation) {
        case "+":
            return a + b
            break
        case "-":
            if (a > b) return "-" + (a - b)
            else return a - b
            break
        case "÷":
            if (a === 0) {
                alert("Can't divide by 0!")
                return null
            }
            else return b / a
            break
        case "x":
            return a * b
            break
        default:
            return null
        
    }
}

function keyboardSupport(e) {
    if (e.key >= 0 && e.key <= 9 || e.key == ".") appendNumber(e.key)
    if (e.key == "Enter") compute()
    if (e.key == "Backspace") deletebut()
    if (e.key == "Escape") clear()
    if (e.key === "+" || e.key === "-") chooseOperation(e.key)
    if (e.key === "*") chooseOperation("x")
    if (e.key === "/") chooseOperation("÷")
}