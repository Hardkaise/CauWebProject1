class Calculator {

    constructor() {
        this.refInput = document.querySelector("#calculator .head-calculator input");
    }

    listOnDigit() {
        const digit = document.querySelectorAll("#calculator .body-calculator .calculator-digit .button");
        const input = this.refInput;

        console.log(this.refInput);
        digit.forEach(d => d.addEventListener("click", () => input.value += d.getAttribute("data-value")));
        console.log(digit);
    }

    run() {
        this.listOnDigit()
    }

    calcul() {

    }
}

const calculator = new Calculator();
calculator.run();