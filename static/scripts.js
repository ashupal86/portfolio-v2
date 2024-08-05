// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});



document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const data = new FormData(form);
    const action = form.action;

    fetch(action, {
        method: 'POST',
        body: data,
    })
    .then(response => {
        if (response.ok) {
            form.reset();
            showAlert('success');
        } else {
            showAlert('error');
        }
    })
    .catch(() => showAlert('error'));
});

function showAlert(type) {
    const successAlert = document.querySelector('.alert.success');
    const errorAlert = document.querySelector('.alert.error');

    if (type === 'success') {
        successAlert.style.display = 'block';
        errorAlert.style.display = 'none';
    } else {
        successAlert.style.display = 'none';
        errorAlert.style.display = 'block';
    }
}