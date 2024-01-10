
document.getElementById('signupLink').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

function validateLoginForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Please enter both email and password.');
        return false;
    }
    return true;
}


function validateSignupForm() {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    var age = parseFloat(document.getElementById('age').value);

    if (firstName.trim() === '' || lastName.trim() === '' || newUsername.trim() === '' || newPassword.trim() === '') {
        alert('Please fill in all required fields.');
        return false;
    }
    if (isNaN(age) || age <= 16) {
        alert('Please enter a valid age. To create an account you have to be at least 16 years old.');
        return false;
    }

    return true;
}


document.getElementById('loginFormButton').addEventListener('click', function(event) {
    if (!validateLoginForm()) {
        event.preventDefault(); // se lejon me submit
    }
});


document.getElementById('signupButton').addEventListener('click', function(event) {
    if (!validateSignupForm()) {
        event.preventDefault(); 
    }
});