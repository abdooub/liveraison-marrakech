// Menu mobile toggle
function toggleMenu() {
    const overlay = document.getElementById("overlayMenu");
    const menuIcon = document.querySelector(".menu-icon i");
    if (!overlay || !menuIcon) return;
    
    if (overlay.style.width === "250px") {
        overlay.style.width = "0";
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    } else {
        overlay.style.width = "250px";
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const overlay = document.getElementById("overlayMenu");
    const menuIcon = document.querySelector(".menu-icon");
    
    if (overlay && overlay.style.width === "250px" && 
        !overlay.contains(event.target) && 
        !menuIcon.contains(event.target)) {
        toggleMenu();
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fermer le menu quand on clique sur un lien dans l'overlay
var overlayLinks = document.querySelectorAll('.overlay-content a');
if (overlayLinks.length > 0) {
    overlayLinks.forEach(item => {
        item.addEventListener('click', () => {
            const overlay = document.getElementById("overlayMenu");
            const menuIcon = document.querySelector(".menu-icon i");
            if (overlay) overlay.style.width = "0";
            if (menuIcon) {
                menuIcon.classList.remove("fa-times");
                menuIcon.classList.add("fa-bars");
            }
        });
    });
}

// Redirection WhatsApp
function redirectToWhatsApp() {
    window.location.href = "https://wa.me/212688664962";
}

// Add click event to WhatsApp button
document.querySelector('.whatsapp-button2')?.addEventListener('click', function(e) {
    e.preventDefault();
    redirectToWhatsApp();
}); 