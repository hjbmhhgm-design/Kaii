// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Proposal response function
function showResponse(response) {
    const responseMessage = document.getElementById('response-message');
    const yesBtn = document.querySelector('.yes-btn');
    const maybeBtn = document.querySelector('.maybe-btn');
    
    if (response === 'yes') {
        responseMessage.innerHTML = `
            <div class="celebration">🎉✨💕✨🎉</div>
            <h3>OH MY GOD, YES! 😭💕</h3>
            <p>You just made me the happiest person in the entire universe! I can't believe my amazing, brilliant, beautiful Kainat said YES! 💖</p>
            <p>I promise to love you more than all the stars in the sky, support all your incredible research dreams, and make you smile every single day! 🌟</p>
            <p>You're officially my girlfriend now! The most amazing environmental scientist and the woman of my dreams! 👑💕</p>
            <div class="celebration">🥳💐🎊💐🥳</div>
        `;
        responseMessage.className = 'response-message response-yes show';
        
        // Hide buttons after selection
        yesBtn.style.display = 'none';
        maybeBtn.style.display = 'none';
        
        // Add celebration animation
        setTimeout(() => {
            createCelebration();
        }, 500);
        
    } else if (response === 'maybe') {
        responseMessage.innerHTML = `
            <h3>I understand, my love 💙</h3>
            <p>Take all the time you need, beautiful. I know this is a big decision, and I respect that you want to think about it. 💭</p>
            <p>Just know that my love for you isn't going anywhere. Whether it takes days, weeks, or months - I'll be here, supporting your research, cheering for your achievements, and loving you unconditionally. 💕</p>
            <p>You're worth waiting for, Kainat. Always. 🌟</p>
        `;
        responseMessage.className = 'response-message response-maybe show';
    }
}

// Celebration animation function
function createCelebration() {
    const celebration = document.createElement('div');
    celebration.style.position = 'fixed';
    celebration.style.top = '0';
    celebration.style.left = '0';
    celebration.style.width = '100%';
    celebration.style.height = '100%';
    celebration.style.pointerEvents = 'none';
    celebration.style.zIndex = '9999';
    
    // Create heart rain
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'absolute';
            heart.style.top = '-50px';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = Math.random() * 30 + 20 + 'px';
            heart.style.animation = 'fallDown 3s linear forwards';
            celebration.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100);
    }
    
    document.body.appendChild(celebration);
    
    // Remove celebration container after animation
    setTimeout(() => {
        celebration.remove();
    }, 8000);
}

// Add CSS for celebration animation
const celebrationCSS = `
@keyframes fallDown {
    to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}
`;

const style = document.createElement('style');
style.textContent = celebrationCSS;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.about-card, .timeline-item, .research-card, .memory-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add typewriter effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typewriter effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText.replace(/<[^>]*>/g, ''), 150);
    }
});

// Add floating animation to cards on hover
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.about-card, .research-card, .memory-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add scroll progress indicator
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '4px';
    progressBar.style.background = 'linear-gradient(45deg, #ff6b6b, #ffd93d)';
    progressBar.style.zIndex = '10001';
    progressBar.style.transition = 'width 0.3s ease';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
addScrollProgress();

// Add particles animation to background
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '6px';
    particle.style.height = '6px';
    particle.style.background = 'rgba(255, 255, 255, 0.6)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '100vh';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    particle.style.animation = 'floatUp 15s linear forwards';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 15000);
}

// Add floating particle CSS
const particleCSS = `
@keyframes floatUp {
    to {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
    }
}
`;

const particleStyle = document.createElement('style');
particleStyle.textContent = particleCSS;
document.head.appendChild(particleStyle);

// Create particles periodically
setInterval(createParticle, 3000);

// Add click effect for buttons
document.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = (e.clientX - e.target.offsetLeft) + 'px';
        ripple.style.top = (e.clientY - e.target.offsetTop) + 'px';
        
        e.target.style.position = 'relative';
        e.target.style.overflow = 'hidden';
        e.target.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add ripple effect CSS
const rippleCSS = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

const rippleStyle = document.createElement('style');
rippleStyle.textContent = rippleCSS;
document.head.appendChild(rippleStyle);