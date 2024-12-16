document.addEventListener('DOMContentLoaded', function() {
    const joinForm = document.getElementById('join-form');
    
    if (joinForm) {
        joinForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            alert('Form submitted successfully!');
        });
    }
});