document.addEventListener('DOMContentLoaded', function() {
    // 导航功能
    const navContainer = document.getElementById('nav-container');

    if (navContainer) {
        fetch('nav.html')
            .then(response => response.text())
            .then(data => {
                navContainer.innerHTML = data;

                // 为所有导航链接添加事件监听器
                const links = navContainer.querySelectorAll('nav ul li a');
                links.forEach(link => {
                    link.addEventListener('click', function(event) {
                        event.preventDefault();
                        window.location.href = link.getAttribute('href');
                    });
                });
            })
            .catch(error => console.error('Error loading navigation:', error));
    }
});
