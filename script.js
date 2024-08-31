// Dark Mode Toggle Function
function toggleDarkMode() {
    alert('Dark Mode functionality not yet implemented.');
    
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

//alert function after post button is clicked / post is submitted
function post_button() {
    alert("Thank you for your post! It will be reviewed by our team before it is published.");

    // Clear the comment box (assuming the comment box has an id of 'discussionBox')
    document.getElementById('discussionBox').value = '';
  }

//  Create a function where 