document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    const errorMessage = document.querySelector('.error-message');

    form.addEventListener('submit', function (event) {
        const inputs = form.querySelectorAll('input, textarea');

        let isEmpty = false;
        let errorText = '';

        inputs.forEach(function (input) {
            if (input.required && input.value.trim() === '') {
                isEmpty = true;
                input.classList.add('error');
                errorText = 'Please fill in all required fields.';
            } else {
                input.classList.remove('error');
            }
        });

        if (isEmpty) {
            event.preventDefault(); // Prevent form submission if fields are empty
            errorMessage.textContent = errorText; // Display error message
        } else {
            errorMessage.textContent = ''; // Clear error message if no errors
        }
    });
});