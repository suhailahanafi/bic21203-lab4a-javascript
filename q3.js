
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {

    // Clear existing list
    numberList.textContent = "";

    // Generate numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {

        // Create a new list item
        const li = document.createElement("li");

        // Set the text
        li.textContent = "The number is " + i;

        // Add item to the list
        numberList.appendChild(li);
    }
}

// Add click event
generateBtn.addEventListener("click", generateNumbers);
