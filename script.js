
class Calculator{
    constructor(previousOperandTextEl, currentOperandTextEl){
        this.previousOperandTextEl = previousOperandTextEl;
        this.currentOperandTextEl = currentOperandTextEl;
        this.clear();
    }

    appendDigit(digit){
            this.currentValue = this.currentValue.toString() + digit.toString();
       
        }

    updateDisplay(){
        this.currentOperandTextEl.innerText = this.currentValue;
    }

    clear(){    
            this.currentValue = "";
            this.previousValue = "";
            this.operation = null;
        }
    }
    
class ToggleSign{
  constructor(){

  }

}


class ChooseOperation{
    constructor(operation){
this.previousValue = this.currentValue;
this.currentValue = 0;
this.operation = operation;
}
}

class Calculatore{

    calculate() {
    if (this.previousValue === null || this.currentValue === null) {
        return;
    }

    switch (this.operation) {
        case "+":
            this.currentValue = this.previousValue + this.currentValue;
            break;
        case "-":
            this.currentValue = this.previousValue - this.currentValue;
        case "x":
            this.currentValue = this.previousValue * this.currentValue;
        case "/":
            if (this.currentValue == 0) {
                //Handle division by zero
                this.currentValue = "Error";
            }
            this.currentValue = this.previousValue / this.currentValue;
            break;
    }
        this.previousValue = null;
        this.currentValue = null;
}
}


const display = document.querySelector(".display");
const dataAllClearBtn = document.querySelector("[data-all-clear]");
const operationBtn = document.querySelector("[data-operation]");
const numberDataset = document.querySelectorAll("#numberBtns");
const previousOperandTextEl = document.querySelector("#previousNum");
const currentOperandTextEl = document.querySelector("#currentNum");


const calculator = new Calculator(previousOperandTextEl, currentOperandTextEl); 
console.log(calculator);
console.log(numberDataset);
console.log(previousOperandTextEl);
console.log(currentOperandTextEl);




numberDataset.forEach( button => {
    button.addEventListener("click", ()=> {
        calculator.appendDigit(button.innerText);
        calculator.updateDisplay();
    })
});