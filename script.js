


class Calculator{
    constructor(){
        this.currentValue = 0;
        this.previousValue = null;
        this.operation = null;
    }
}


class Clear{
    constructor(){
        this.currentValue = 0;
        this.previousValue = null;
        this.operation = null;
    }
}


class AppendDigit{
    constructor(digit){
        this.currentValue = this.currentValue * 10 + digit;
    }
}


class ToggleSign{
  constructor(){

  }

}


class HandlButtonClick{
  constructor(btn){
        switch (btn) {
            case "AC":
                Clear();
                break;
        case "-/+":
            ToggleSign();
            case "%":

                break;
        }


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

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function(value) {
        const value = button.value;
        
    })
});

const dataAllClearBtn = document.querySelector("[data-all-clear]");
const operationBtn = document.querySelector("[data-operation]");
const numberBtns = document.querySelector("[data-number]");