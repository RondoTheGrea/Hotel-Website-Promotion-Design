// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Reveal sections on scroll
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Toggle plans section
const togglePlansButton = document.getElementById('togglePlans');
const plansCardsSection = document.getElementById('plans-cards');

togglePlansButton.addEventListener('click', function() {
    if (plansCardsSection.style.display === 'none' || plansCardsSection.style.display === '') {
        plansCardsSection.style.display = 'block';
        togglePlansButton.textContent = 'HIDE ROOM OPTIONS';
        togglePlansButton.classList.add('active');
        
        // Re-add chevron icon
        const chevronSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        chevronSvg.setAttribute('class', 'chevron-icon');
        chevronSvg.setAttribute('fill', 'none');
        chevronSvg.setAttribute('stroke', 'currentColor');
        chevronSvg.setAttribute('viewBox', '0 0 24 24');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('d', 'M19 9l-7 7-7-7');
        chevronSvg.appendChild(path);
        togglePlansButton.appendChild(chevronSvg);
    } else {
        plansCardsSection.style.display = 'none';
        togglePlansButton.textContent = 'VIEW ROOM OPTIONS';
        togglePlansButton.classList.remove('active');
        
        // Re-add chevron icon
        const chevronSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        chevronSvg.setAttribute('class', 'chevron-icon');
        chevronSvg.setAttribute('fill', 'none');
        chevronSvg.setAttribute('stroke', 'currentColor');
        chevronSvg.setAttribute('viewBox', '0 0 24 24');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('d', 'M19 9l-7 7-7-7');
        chevronSvg.appendChild(path);
        togglePlansButton.appendChild(chevronSvg);
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Trigger initial scroll check for fade-in animations
window.dispatchEvent(new Event('scroll'));
