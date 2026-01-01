

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
    
    // --- Product Slider/Carousel Functionality ---
   // app.js
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;

// Function to move the slider
function updateSlider() {
    const card = slider.querySelector('div');
    const cardWidth = card.clientWidth + 16; // width + gap (gap-4 = 16px)
    slider.style.transform = `translateX(${-counter * cardWidth}px)`;
}

// Logic for Next Button
nextBtn.addEventListener('click', () => {
    const visibleCards = getVisibleCards();
    const totalCards = slider.children.length;
    
    // Increment if there are more cards to show
    if (counter < totalCards - visibleCards) {
        counter++;
    } else {
        counter = 0; // Loop back to start
    }
    updateSlider();
});

// Logic for Prev Button
prevBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
    } else {
        const visibleCards = getVisibleCards();
        counter = slider.children.length - visibleCards; // Go to end
    }
    updateSlider();
});

// Detect how many cards are visible based on screen size
function getVisibleCards() {
    if (window.innerWidth >= 1024) return 5; // lg
    if (window.innerWidth >= 640) return 2;  // sm
    return 1; // mobile
}

// Handle window resizing to keep positioning accurate
window.addEventListener('resize', () => {
    counter = 0;
    updateSlider();
});
    // --- FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const icon = this.querySelector('svg');
            
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherItem = otherQuestion.parentElement;
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherQuestion.querySelector('svg');
                    if (otherAnswer) otherAnswer.classList.add('hidden');
                    if (otherIcon) otherIcon.classList.remove('rotate-45');
                }
            });
            
            if (answer) answer.classList.toggle('hidden');
            if (icon) icon.classList.toggle('rotate-45');
        });
    });
    
    // --- Smooth Scroll for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // --- Testimonial Bubble Animation on Scroll ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.testimonial-bubble').forEach(bubble => {
        bubble.style.opacity = '0';
        bubble.style.transform = 'translateY(20px)';
        bubble.style.transition = 'all 0.6s ease-out';
        observer.observe(bubble);
    });
    
    // --- Add to Cart Notification Helper ---
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'fixed bottom-4 right-4 bg-stone-800 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300';
        notification.textContent = message;
        notification.style.transform = 'translateY(100px)';
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateY(100px)';
            setTimeout(() => { notification.remove(); }, 300);
        }, 3000);
    }
    
    // --- Newsletter Form Submission ---
    const newsletterBtn = document.querySelector('footer button');
    const newsletterForm = document.querySelector('footer input[type="email"]');
    
    if (newsletterBtn && newsletterForm) {
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const email = newsletterForm.value;
            if (email && email.includes('@')) {
                showNotification('Thank you for subscribing!');
                newsletterForm.value = '';
            } else {
                showNotification('Please enter a valid email address');
            }
        });
    }
});




const accountBtn = document.getElementById("accountBtn");

if (accountBtn) {
  accountBtn.addEventListener("click", () => {
    window.location.href = "account.html";
  });
}


