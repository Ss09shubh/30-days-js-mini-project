const expenseForm = document.getElementById("expenseform");
const expenseList = document.getElementById("expenseList");

// Create a variable to track the total amount
let totalAmount = 0;

// Create an element to display the total amount
const totalAmountElement = document.createElement("div");
totalAmountElement.id = "totalAmount";
totalAmountElement.style.marginTop = "20px";
totalAmountElement.innerHTML = `<strong>Total Amount: </strong> $0.00`;

// Append the total amount element below the table
document.querySelector(".container").appendChild(totalAmountElement);

expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    const description = document.getElementById("description").value.trim();
    const category = document.getElementById("category").value;
    const amount = parseFloat(document.getElementById("amount").value);

    // Validation
    if (!description) {
        alert("Please enter a description.");
        return;
    }
    if (!category) {
        alert("Please select a category.");
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount greater than 0.");
        return;
    }

    // Create a new row
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${description}</td>
        <td>${category}</td>
        <td>$${amount.toFixed(2)}</td>
    `;

    // Append the new row to the table
    expenseList.appendChild(newRow);

    // Update the total amount
    totalAmount += amount;

    // Update the total amount element
    totalAmountElement.innerHTML = `<strong>Total Amount: </strong> $${totalAmount.toFixed(2)}`;

    // Clear the form inputs
    expenseForm.reset();
});
