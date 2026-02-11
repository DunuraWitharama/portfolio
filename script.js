document.addEventListener('DOMContentLoaded', () => {
    // Loader Logic
    const loader = document.getElementById('loader');
    const progress = document.querySelector('.progress-fill');
    const loadText = document.getElementById('load-text');
    
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            loadText.innerText = "ACCESS_GRANTED";
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 500);
            }, 500);
        } else {
            width += Math.random() * 15;
            if(width > 100) width = 100;
            progress.style.width = width + '%';
        }
    }, 150);

    // Mobile Menu
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        const isVisible = navLinks.style.display === 'flex';
        navLinks.style.display = isVisible ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(2, 6, 23, 0.95)';
        navLinks.style.padding = '20px';
    });
});