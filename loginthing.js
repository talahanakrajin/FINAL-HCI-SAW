// Function to check if user data exists in data.php
function checkUserData(username) {
    return fetch('data.php?username=' + username)
        .then(response => response.json())
        .then(data => data.exists);
}

// Example usage
checkUserData('exampleUser').then(exists => {
    if (!exists) {
        document.getElementById('account-link').href = 'login.html';
        document.getElementById('account-text').textContent = 'Log in to your account';
    }
});
