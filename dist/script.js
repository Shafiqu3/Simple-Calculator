class Calculator {
  constructor(previousOperandTextEl, currentOperandTextEl) {
    this.previousOperandTextEl = previousOperandTextEl;
    this.currentOperandTextEl = currentOperandTextEl;
    this.clear();
  }

  //append Number
  appendDigit(digit) {
    if (digit === "." && this.currentValue.includes(".")) 
      return;
    
    this.currentValue = this.currentValue.toString() + digit.toString();
  }

  updateDisplay() {
    this.currentOperandTextEl.innerText = this.currentValue;
    this.previousOperandTextEl.innerText = this.previousValue;
  }

  clear() {
    this.currentValue = "";
    this.previousValue = "";
    this.operation = null;
  }
  
  chooseOperation(operation) {
if (this.currentValue === "") {
    return;
}
if (this.previousValue!== "") {
  this.calculate();
}
    this.operation = operation;
    this.previousValue = this.currentValue;
    this.currentValue = "";
    }

    calculate() {
      let computation;
      let prev = parseFloat(this.previousValue);
      let current = parseFloat(this.currentValue);
console.log(typeof(prev))
console.log(typeof(current))


        if (prev === null || current === null) {
          return;
        }
    
        switch (this.operation) {
          case "+":
            computation = prev + current;
            break;
          case "-":
            if (this.operation==="-") {
              return

              
            }
            computation = prev - current;
            console.log(prev);
            console.log(current);

          case "x":
            computation = prev * current;
          case "/":
            if (this.currentValue == 0) {
              //Handle division by zero
              this.currentValue = "Error";
            }
            computation = prev / current;
            break;
        }
        this.currentValue = computation;
        this.operation = null;
        this.previousValue = "";
      }
    
}



class ToggleSign {
  constructor() {}
}

 
  

//select DOM elements
const dataAllClearBtn = document.querySelector("[data-all-clear]");
const operationBtn = document.querySelectorAll("#operatorBtns");
const numberDataset = document.querySelectorAll("#numberBtns");
const previousOperandTextEl = document.querySelector("#previousNum");
const currentOperandTextEl = document.querySelector("#currentNum");
const equalButton = document.querySelector("#equalsBtn");
const allClearButton = document.querySelector("#allClear"); 

const calculator = new Calculator(previousOperandTextEl, currentOperandTextEl);
console.log(calculator);
console.log(numberDataset);
console.log(previousOperandTextEl);
console.log(currentOperandTextEl);
console.log(operationBtn);
console.log(equalButton);
console.log(allClearButton)

numberDataset.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendDigit(button.innerText);
    calculator.updateDisplay();
  });
});

operationBtn.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener("click",(button) => {
    calculator.calculate();
    calculator.updateDisplay();
})

allClearButton.addEventListener("click", () => {
calculator.clear();
calculator.updateDisplay();
})