// Variable Declarations
const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
const minInputValue = 1;
const maxInputValue = 3999;

// Functions

const isInvalidInput = (str) => {
    const regex = /\d+e\d+/i;
    
    if (str.match(regex) || str.includes(".")) {
        return true;
    } else {
        return false;
    }
}; // end isInvalidInput

const convertToRomanNumeral = (decimalNumber) => {

    // Decimal to Roman Numeral Table
    const romanNumerals = [
        {value: 1000, numeral: "M"},
        {value: 900, numeral: "CM"},
        {value: 500, numeral: "D"},
        {value: 400, numeral: "CD"},
        {value: 100, numeral: "C"},
        {value: 90, numeral: "XC"},
        {value: 50, numeral: "L"},
        {value: 40, numeral: "XL"},
        {value: 10, numeral: "X"},
        {value: 9, numeral: "IX"},
        {value: 5, numeral: "V"},
        {value: 4, numeral: "IV"},
        {value: 1, numeral: "I"},
    ];

    if (decimalNumber === 0) {
        return "";
    } else {
        const romanNumeral = romanNumerals.find((element) => element.value <= decimalNumber);
        return romanNumeral.numeral + convertToRomanNumeral(decimalNumber - romanNumeral.value);
    }
}; // end convertToRomanNumeral

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);

    if (isNaN(inputInt) || isInvalidInput(numberInput.value)) {
        numberInput.value = "";
        output.innerHTML = `
        <p class="alert">Please enter a valid number</p>
        `;
        return;
    }

    if (inputInt < minInputValue) {
        numberInput.value = "";
        output.innerHTML = `
        <p class="alert">Please enter a number greater than or equal to ${minInputValue}</p>
        `;
        return;
    } else if (inputInt > maxInputValue) {
        numberInput.value = "";
        output.innerHTML = `
        <p class="alert">Please enter a number less than or equal to ${maxInputValue}</p>
        `;
        return;
    }

    numberInput.value = "";
    output.innerHTML = `
    <p>${convertToRomanNumeral(inputInt)}</p>
    `;
}; // end checkUserInput

// Event Listeners
convertButton.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});