let input = document.getElementById("input"); // Ensure this ID matches your HTML
let buttons = document.querySelectorAll(".calc button");

// Loop through each button and attach a click event listener
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent; // Get the button's text content
        console.log(value); // Debugging: Log the clicked button's value

        if (value === 'c') {
            input.innerText = ""; // Clear the input field
        } else if (value === "~") {
            input.innerText = input.innerText.slice(0, -1); // Remove the last character
        } else if (value === "=") {
            try {
                // Evaluate the input as a mathematical expression
                input.innerText = eval(input.innerText);
            } catch (err) {
                input.innerText = "Error"; // Handle invalid expressions gracefully
            }
        } else {
            input.innerText += value; // Append the clicked button's value to the input
        }

        // Optional: Scroll the input to the right for long expressions
        input.scrollLeft = input.scrollWidth;
    });
});
