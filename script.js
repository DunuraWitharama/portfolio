/* DUNURA WITHARAMA - FULL SYSTEM LOGIC */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. LOADER SYSTEM
    const loader = document.getElementById('loader');
    const progressFill = document.querySelector('.progress-fill');
    const loadText = document.getElementById('load-text');
    
    let progress = 0;
    const phrases = ["INITIALIZING_SYSTEM...", "LOADING_CORE_MODULES...", "ESTABLISHING_CONNECTION...", "SYSTEM_READY"];
    
    const loadInterval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress > 100) progress = 100;
        
        if (progressFill) progressFill.style.width = `${progress}%`;
        
        // Update loader text based on progress
        if (loadText) {
            if (progress < 30) loadText.innerText = phrases[0];
            else if (progress < 60) loadText.innerText = phrases[1];
            else if (progress < 90) loadText.innerText = phrases[2];
            else loadText.innerText = phrases[3];
        }
        
        if (progress === 100) {
            clearInterval(loadInterval);
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    startTyping(); // Start hero typing after loader finishes
                }, 500);
            }, 500);
        }
    }, 150);

    // 2. HERO TYPING EFFECT
    const typingText = document.querySelector('.running-text');
    const content = typingText ? typingText.innerText : "";
    if (typingText) typingText.innerText = ""; 

    function startTyping() {
        let i = 0;
        const speed = 50; 
        function type() {
            if (i < content.length) {
                typingText.innerHTML += content.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // 2. SKILL RADAR HEXAGON (Professional Version)
const radarCtx = document.getElementById('skillRadar').getContext('2d');
new Chart(radarCtx, {
    type: 'radar',
    data: {
        labels: ['LOGIC', 'LEADERSHIP', 'DESIGN', 'SPEED', 'AGILITY', 'COMMS'],
        datasets: [{
            label: 'Attributes',
            data: [95, 80, 90, 85, 92, 88], // Updated values
            backgroundColor: 'rgba(0, 243, 255, 0.2)',
            borderColor: '#00f3ff',
            pointBackgroundColor: '#00f3ff',
            pointBorderColor: '#fff',
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
                pointLabels: { 
                    color: '#f8fafc', 
                    font: { family: 'JetBrains Mono', size: 11 } 
                },
                ticks: { display: false },
                suggestedMin: 0
            }
        },
        plugins: { legend: { display: false } }
    }
});

    // 4. SCROLL-TRIGGERED PROGRESS BARS
    const skillSection = document.getElementById('skills');
    const progressLines = document.querySelectorAll('.progress-line span');

    const animateSkills = () => {
        if (!skillSection) return;
        const sectionPos = skillSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            progressLines.forEach(line => {
                const width = line.getAttribute('data-width');
                line.style.width = width;
            });
        }
    };

    // 5. NAV ACTIVE LINK TRACKING & SMOOTH SCROLL
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');

    const activeNav = () => {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 200;
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

    // Smooth Scroll for Nav Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
            // Close mobile menu on click
            if (navList.classList.contains('show')) {
                navList.classList.remove('show');
                mobileMenu.classList.remove('is-active');
            }
        });
    });

    window.addEventListener('scroll', () => {
        animateSkills();
        activeNav();
    });

    // 6. MOBILE MENU TOGGLE
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-links');
    
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('show');
            mobileMenu.classList.toggle('is-active'); // For "X" animation if you have CSS for it
        });
    }
});