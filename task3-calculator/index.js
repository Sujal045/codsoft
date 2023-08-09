let displayValue = "";

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = displayValue;
}

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (
    displayValue.length > 0 &&
    "+-*/".indexOf(displayValue[displayValue.length - 1]) === -1
  ) {
    displayValue += operator;
    updateDisplay();
  }
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

updateDisplay();
