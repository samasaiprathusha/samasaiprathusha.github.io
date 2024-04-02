
const multiplyForm = document.getElementById('multiplyForm');
const resultElement = document.getElementById('result');

// Add event listener to the form for when it is submitted
multiplyForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the input fields
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  // Check if the input values are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = 'Please enter valid numbers';
  } else {
    // Perform the multiplication and display the result
    const result = num1 * num2;
    resultElement.textContent = `Result: ${result}`;
  }
});

  
  
