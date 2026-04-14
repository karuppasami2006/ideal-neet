// MAIN JAVASCRIPT - IDEAL NEET ACADEMY

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INITIALIZE LUCIDE ICONS
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. STICKY NAVBAR LOGIC
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. MOBILE MENU TOGGLE
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle icon between menu and x
            const icon = navToggle.querySelector('i, svg');
            if (navLinks.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            if (window.lucide) window.lucide.createIcons();
        });
    }

    // 4. ANIMATED COUNTERS (Achievements)
    const stats = document.querySelectorAll('.stat-number');
    const statsSection = document.getElementById('achievements');
    let started = false;

    const startCounters = () => {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const increment = target / 50; 
            let count = 0;

            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    stat.innerText = Math.ceil(count) + (target > 50 ? '+' : '+');
                    setTimeout(updateCount, 20);
                } else {
                    stat.innerText = target + (target > 50 ? '+' : '+');
                }
            };
            updateCount();
        });
    };

    // Intersection Observer for Counters
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                startCounters();
                started = true;
            }
        });
    }, { threshold: 0.5 });

    if (statsSection) {
        observer.observe(statsSection);
    }

    // 5. HYBRID SPA ROUTING
    const router = () => {
        const path = window.location.pathname;
        const hash = window.location.hash;
        
        // Priority 1: Scroll to Hash if present (e.g. /#features)
        if (hash) {
            const targetSection = document.querySelector(hash);
            if (targetSection) {
                setTimeout(() => {
                    const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }, 100);
                return;
            }
        }

        // Priority 2: Scroll to Path-based section (e.g. /about)
        let normalizedPath = path === '/' || path === '/index.html' ? 'home' : path.replace(/\.html$/, '').substring(1);
        const targetSection = document.getElementById(normalizedPath);
        
        if (targetSection) {
            setTimeout(() => {
                const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }, 50);
        }
    };

    // Intercept internal link clicks
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a');
        if (!anchor) return;
        
        const href = anchor.getAttribute('href');
        const target = anchor.getAttribute('target');
        
        // Skip external, blank, or non-relative links
        if (!href || !href.startsWith('/') || target === '_blank') return;

        const onHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '/home';
        const isHashLink = href.includes('#');

        // Navigation logic:
        // 1. If we are on Home and click a hash link or path that exists on Home -> SPA scroll
        // 2. If we are NOT on Home and click a hash link -> Let it navigate to Home#hash
        // 3. If we click a separate page (e.g. /about) -> Let it navigate (for actual page load and SEO)
        
        if (onHomePage) {
            // Try to see if target exists on current page
            const targetId = isHashLink ? href.split('#')[1] : href.substring(1);
            if (document.getElementById(targetId) || targetId === '' || targetId === 'home') {
                e.preventDefault();
                window.history.pushState(null, '', href);
                router();
                
                // Close mobile menu
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = navToggle?.querySelector('i, svg');
                    if (icon) icon.setAttribute('data-lucide', 'menu');
                    if (window.lucide) window.lucide.createIcons();
                }
            }
        }
        // If not on home, let default navigation happen so the browser loads index.html#hash or about.html
    });

    // Listen to browser Back/Forward navigation
    window.addEventListener('popstate', router);

    // Initial load
    router();

    // 6. GALLERY SECTION - Video Control Logic
    const reels = document.querySelectorAll('.reel-container');
    
    // Mute/Unmute Toggle
    reels.forEach(reel => {
        const video = reel.querySelector('video');
        const muteBtn = reel.querySelector('.mute-toggle');
        const icon = muteBtn.querySelector('i');

        muteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            video.muted = !video.muted;
            
            // Update icon
            if (video.muted) {
                muteBtn.innerHTML = '<i data-lucide="volume-x"></i>';
            } else {
                muteBtn.innerHTML = '<i data-lucide="volume-2"></i>';
            }
            if (window.lucide) window.lucide.createIcons();
        });
    });

    // Auto-play on Intersection
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('video');
            if (entry.isIntersecting) {
                video.play().catch(error => console.log("Auto-play prevented:", error));
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.6 });

    reels.forEach(reel => videoObserver.observe(reel));

    // 7. FORM SUBMISSION TO WHATSAPP
    const contactForm = document.getElementById('contact-form');
    
    // Real-time Phone Validation (Only numbers)
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    });

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Extract values
            const name = contactForm.querySelector('input[type="text"]').value.trim();
            const phone = contactForm.querySelector('input[type="tel"]').value.trim();
            const email = contactForm.querySelector('input[type="email"]').value.trim();
            const course = contactForm.querySelector('select').value;
            const message = contactForm.querySelector('textarea').value.trim();
            
            // Advanced Validation
            if (phone.length !== 10) {
                alert("Please enter a valid 10-digit mobile number.");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a complete and valid email address (e.g., name@domain.com).");
                return;
            }

            if (name.length < 2) {
                alert("Please enter your full name.");
                return;
            }
            
            let whatsappText = `Hi, I want to get in touch!\n\n`;
            whatsappText += `*Name:* ${name}\n`;
            whatsappText += `*Phone:* ${phone}\n`;
            whatsappText += `*Email:* ${email}\n`;
            whatsappText += `*Course:* ${course}\n\n`;
            if (message) whatsappText += `*Message:* ${message}`;
            
            const encodedText = encodeURIComponent(whatsappText);
            window.open(`https://wa.me/917358603244?text=${encodedText}`, '_blank');
            
            contactForm.reset();
        });
    }

    // 8. HERO TRANSITIONS (Background & Typing)
    const bgItems = document.querySelectorAll('.hero-bg-item');
    const typeTarget = document.getElementById('type-target');
    
    if (bgItems.length > 0 && typeTarget) {
        
        let currentIdx = 0;
        const typingSentences = [
            "Trichy's Affordable NEET Academy",
            "Trichy's Leading NEET Academy",
            "Best Result Oriented Coaching"
        ];
        
        // Background Carousel Logic (Works on all screen sizes)
        function cycleBackground() {
            bgItems[currentIdx].classList.remove('active');
            currentIdx = (currentIdx + 1) % bgItems.length;
            bgItems[currentIdx].classList.add('active');
        }
        
        // Change image every 6 seconds
        setInterval(cycleBackground, 6000);

        let sentenceIdx = 0;
        let charIdx = 0;
        let isDeleting = false;

        // Typing Effect Logic
        function type() {
            const currentSentence = typingSentences[sentenceIdx];
            const typingSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIdx < currentSentence.length) {
                typeTarget.textContent += currentSentence.charAt(charIdx);
                charIdx++;
                setTimeout(type, typingSpeed);
            } else if (isDeleting && charIdx > 0) {
                typeTarget.textContent = currentSentence.substring(0, charIdx - 1);
                charIdx--;
                setTimeout(type, typingSpeed);
            } else if (!isDeleting && charIdx === currentSentence.length) {
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, 2000);
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                sentenceIdx = (sentenceIdx + 1) % typingSentences.length;
                setTimeout(type, 500);
            }
        }

        type();
    }
});
