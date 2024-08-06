// Dark Mode Toggle Function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('.modal-content').classList.toggle('dark-mode');
}

// Search Function Placeholder
function search() {
    const query = document.getElementById('search-input').value;
    // Implement search functionality
    alert('Search functionality not yet implemented.');
}

// Navigate Function Placeholder
function navigateTo(url) {
    window.location.href = url="https://www.google.com";
}

// Modal Functions
function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// GSAP Animations
window.onload = () => {
    gsap.from(".greeting-box", { duration: 2, y: -50, opacity: 0, ease: "power3.out" });
    gsap.from(".media-section .image-box", { duration: 1, x: -100, opacity: 0, stagger: 0.3 });
};
