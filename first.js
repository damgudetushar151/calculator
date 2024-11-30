// Get the input field
const inputField = document.querySelector('.input input ');

// Get all the buttons
const buttons = document.querySelectorAll('.btn');

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        // Clear input field if 'C' is clicked
        if (value === 'C') {
            inputField.value = '';
        }
        // Delete last character if 'del' is clicked
        else if (value === 'del') {
            inputField.value = inputField.value.slice(0, -1);
        }
        // Calculate the result if '=' is clicked
        else if (value === '=') {
            try {
                inputField.value = eval(inputField.value);
            } catch {
                inputField.value = 'Error';
            }
        }
        // Append the button value to the input field
        else {
            inputField.value += value;
        }
    });
});
