// Smooth scrolling when clicking on nav links
const navLinks = document.querySelectorAll('nav a');
for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
    event.preventDefault();
    const targetId =;
}