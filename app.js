document.addEventListener('DOMContentLoaded', function() {
    // 导航功能
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = link.getAttribute('href');
        });
    });
});
