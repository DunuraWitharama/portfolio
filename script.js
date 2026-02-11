/* DUNURA WITHARAMA - FULL SYSTEM LOGIC */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. LOADER SYSTEM
    const loader = document.getElementById('loader');
    const progressFill = document.querySelector('.progress-fill');
    
    let progress = 0;
    const loadInterval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress > 100) progress = 100;
        progressFill.style.width = progress + '%';
        
        if (progress === 100) {
            clearInterval(loadInterval);
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 500);
            }, 500);
        }
    }, 150);

    // 2. SKILL RADAR HEXAGON
    const ctx = document.getElementById('skillRadar').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['HTML/CSS', 'JS', 'PYTHON', 'JAVA', 'UI/UX', 'DB'],
            datasets: [{
                label: 'Proficiency',
                data: [95, 88, 82, 78, 90, 85],
                backgroundColor: 'rgba(0, 243, 255, 0.2)',
                borderColor: '#00f3ff',
                pointBackgroundColor: '#00f3ff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(255,255,255,0.1)' },
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    pointLabels: { color: '#f8fafc', font: { family: 'JetBrains Mono' } },
                    ticks: { display: false },
                    suggestedMin: 0
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    // 3. SCROLL-TRIGGERED PROGRESS BARS
    const skillSection = document.getElementById('skills');
    const progressLines = document.querySelectorAll('.progress-line span');

    const animateSkills = () => {
        const sectionPos = skillSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            progressLines.forEach(line => {
                line.style.width = line.getAttribute('data-width');
            });
        }
    };

    // 4. NAV ACTIVE LINK TRACKING
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

    const activeNav = () => {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', () => {
        animateSkills();
        activeNav();
    });

    // 5. MOBILE MENU
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
});