
// Select HTML elements
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

// Create function
function changeMessage() {
    message.textContent = "Hello there!";
}

// Add click event listener
changeBtn.addEventListener("click", changeMessage);
