document.addEventListener('DOMContentLoaded', function() {
    // 导航功能
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = link.getAttribute('href');
        });
    });
});
