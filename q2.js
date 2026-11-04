
// Select HTML elements
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Create function
function checkInput() {

    const value = userInput.value.trim();
    const number = Number(value);

    if (value === "" || isNaN(number)) {
        result.textContent = "Please enter a valid number!";
    }
    else if (number < 10) {
        result.textContent = "The number is lower than 10";
    }
    else if (number > 10) {
        result.textContent = "The number is higher than 10";
    }
    else {
        result.textContent = "The number is equal to 10";
    }
}

// Add click event
checkBtn.addEventListener("click", checkInput);
