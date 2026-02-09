// --- 1. INTRO ANIMATION & REDIRECT ---
window.addEventListener('load', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainNav = document.getElementById('main-nav');

    // After 5 seconds (5000ms), hide intro
    setTimeout(() => {
        welcomeScreen.style.display = 'none'; // Remove the full screen
        mainNav.style.opacity = '1'; // Show the navigation bar
    }, 5000);
});

// --- 2. NAVIGATION BETWEEN SECTIONS ---
function navigateTo(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.classList.remove('active-section'));

    // Show target section
    document.getElementById(sectionId).classList.add('active-section');

    // Update Nav buttons active state
    const buttons = document.querySelectorAll('.nav-links button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Highlight the clicked button (event.target refers to the button clicked)
    event.target.classList.add('active');
    
    // Scroll to top
    window.scrollTo(0,0);
}

// --- 3. CATEGORY FILTER LOGIC ---
function filterProducts(category, btnElement) {
    const products = document.querySelectorAll('.product-card');
    
    // Filter Logic
    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });

    // Update Button Styles
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
}

// --- 4. REAL-TIME GOLD PRICE SIMULATION ---
function updateGoldPrice() {
    const priceDisplay = document.getElementById('gold-price-display');
    // Base price 6250, fluctuate between -20 and +20
    let basePrice = 6250;
    let fluctuation = Math.floor(Math.random() * 40) - 20; 
    let currentPrice = basePrice + fluctuation;
    
    priceDisplay.innerText = `₹${currentPrice}/g`;
    
    // Color change based on price change (Visual Feedback)
    if(fluctuation > 0) {
        priceDisplay.style.color = '#00ff00'; // Green for up
    } else {
        priceDisplay.style.color = '#ff4444'; // Red for down
    }
    
    // Reset color after a moment
    setTimeout(() => {
        priceDisplay.style.color = 'var(--primary-gold)';
    }, 800);
}

// Update price every 3 seconds
setInterval(updateGoldPrice, 3000);

// --- 5. CONTACT FORM HANDLING ---
function handleFormSubmit(e) {
    e.preventDefault(); // Stop actual page reload
    
    // Show Toast Notification
    const toast = document.getElementById("toast");
    toast.className = "show";
    
    // Hide toast after 3 seconds
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
    // Clear form
    e.target.reset();
}