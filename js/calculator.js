class Calculator {

    constructor() {
        this.refInput = document.querySelector("#calculator .head-calculator input");
        this.history = [];
        this.posHistory = -1;
    }

    listOnDigit() {
        const digit = document.querySelectorAll("#calculator .body-calculator .calculator-digit .button");
        const input = this.refInput;

        digit.forEach(d => d.addEventListener("click", () => input.value += d.getAttribute("data-value")));
    }

    listOnOperator() {
        const operator = document.querySelectorAll("#calculator .body-calculator .calculator-operator .button");
        const input = this.refInput;

        operator.forEach(d => d.addEventListener("click", () => input.value += d.getAttribute("data-value")));
    }

    onEqualClick() {
        const result =  eval(this.refInput.value);
        this.history.push(result);
        this.refInput.value = result;
        this.posHistory += 1;
        console.log(this.history.length);
    }

    clearInput() {
        this.refInput.value = "";
    }

    eraseInput() {
        this.refInput.value = this.refInput.value.slice(0, -1);
    }

    upHistory() {
       if (this.posHistory < this.history.length - 1) {
           this.posHistory += 1;
           this.refInput.value = this.history[this.posHistory];
       }
    }

    downHistory() {
        if (this.posHistory > 0) {
            this.posHistory -= 1;
            this.refInput.value = this.history[this.posHistory];
        }
    }

    run() {
        this.listOnDigit();
        this.listOnOperator();
    }
}

const calculator = new Calculator();
calculator.run();