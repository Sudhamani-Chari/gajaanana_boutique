// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple alert for contact section
document.querySelector('#contact p:first-child').addEventListener('click', function() {
    alert('Contact us at info@gajaananaboutique.com');
});