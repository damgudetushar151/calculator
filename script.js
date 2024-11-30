// Get the input element where the expression will be displayed
const inputField = document.querySelector('.input');

// Select all buttons
const buttons = document.querySelectorAll('.btn');

// Variable to store the current input expression
let expression = "";

// Add event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.innerText;

    if (buttonText === 'C') {
      // Clear the input field and expression
      expression = "";
      inputField.value = expression;
    } else if (buttonText === 'DEL') {
      // Remove the last character from the expression
      expression = expression.slice(0, -1);
      inputField.value = expression;
    } else if (buttonText === '=') {
      try {
        // Evaluate the expression and show the result
        expression = eval(expression);
        inputField.value = expression;
      } catch (error) {
        // Handle any invalid expressions
        inputField.value = "Error";
      }
    } else {
      // Append the button text to the expression
      expression += buttonText;
      inputField.value = expression;
    }
  });
});
