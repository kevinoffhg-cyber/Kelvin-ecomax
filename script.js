// script.js

// Navigation Functionality
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Handling
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    // Handle form data submission logic (e.g., send to server)
    console.log('Form submitted:', Object.fromEntries(formData));
});

// Interactive Elements
const interactiveElements = document.querySelectorAll('.interactive');
interactiveElements.forEach(element => {
    element.addEventListener('click', function() {
        this.classList.toggle('active');
        // Additional interactive logic can go here
    });
});
