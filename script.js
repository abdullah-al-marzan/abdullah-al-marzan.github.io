document.addEventListener('DOMContentLoaded', () => {

    // --- HERO IMAGE SLIDER (Your working code) ---
    const sliderData = [
        { image: 'media/home/slider/Lab Activities of Abdullah Al Marzan.jpg', caption: 'Gel Electrophoresis' },
        { image: 'media/home/slider/Research Activites of Marzan.jpg', caption: 'Blood Culture Media preparation' },
        { image: 'media/home/slider/Research Activities of Abdullah Al Marzan.jpg', caption: 'Bacterial Streaking' },
        { image: 'media/home/slider/Bacterial growth in Blood Agard Media.jpg', caption: 'Bacterial Growth in Blood Agar Media' },
        { image: 'media/home/slider/Bacterial Stain Under Microscope.jpg', caption: 'Bacterial Stain Under Microscope' },
        { image: 'media/home/slider/Bacterial Stain 2.jpg', caption: 'Bacterial Staining' },
        { image: 'media/home/slider/Bacterial Stain 3.jpg', caption: 'Bacterial Staining' },
        { image: 'media/home/slider/Bacterial Stain 4.jpg', caption: 'Bacterial Staining' },
        { image: 'media/home/slider/Bacterial Growth in Petri Dish.jpg', caption: 'Bacterial Growth in Petri Dish' },
        { image: 'media/home/slider/Anaerobic Culture.jpg', caption: 'Anaerobic Culture' },
        { image: 'media/home/slider/Bacterial Culture.jpg', caption: 'Bacterial Culture' },
        { image: 'media/home/slider/Antimicrobial Resistance.jpg', caption: 'Antimicrobial Resistance Analysis' }, 
        { image: 'media/home/slider/Elisa.jpg', caption: 'ELISA Assay' },
        { image: 'media/home/slider/Poster Presentation of Abdullah Al Marzan.jpg', caption: 'Poster Presentation' },
        { image: 'media/home/slider/Wild Protein.jpg', caption: 'Wild Protein Analysis' },
        { image: 'media/home/slider/Mutant Protein.jpg', caption: 'Mutant Protein Analysis' },
        { image: 'media/home/slider/Python Plot.jpg', caption: 'Data Analysis with Python' },
        { image: 'media/home/slider/Leminar Airflow.jpg', caption: 'Laminar Airflow Hood' },
        { image: 'media/home/slider/Biochemical Assay.jpg', caption: 'Biochemical Assay' },
        { image: 'media/home/slider/Research Activities.jpg', caption: 'Research Activities' },
        { image: 'media/home/slider/Research Activities of Abdullah Al Marzan..jpg', caption: 'Research Interests' },
        { image: 'media/home/slider/Weekly Meeting.jpg', caption: 'Research Webinar' },
        { image: 'media/home/slider/Research Meeting with University team.jpg', caption: 'Research Meeting with University Team' }
    ];
    const sliderContainer = document.getElementById('hero-slider');
    let currentSlide = 0;
    let slideInterval;

    function buildSlider() {
        if (!sliderContainer) return;
        sliderData.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = 'slide' + (index === 0 ? ' active' : '');
            slideElement.style.backgroundImage = `url("${slide.image}")`;
            const captionElement = document.createElement('div');
            captionElement.className = 'slide-caption';
            captionElement.textContent = slide.caption;
            slideElement.appendChild(captionElement);
            sliderContainer.appendChild(slideElement);
        });
    }

    function showSlide(index) {
        if (!sliderContainer) return;
        const slides = sliderContainer.querySelectorAll('.slide');
        if (slides.length === 0) return;
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    function startSlider() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
    }

    buildSlider();
    startSlider();

    const prevButton = document.getElementById('slider-prev');
    const nextButton = document.getElementById('slider-next');

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            showSlide(currentSlide - 1);
            startSlider();
        });
    }
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            showSlide(currentSlide + 1);
            startSlider();
        });
    }

    // --- RESPONSIVE HAMBURGER MENU (Your working code) ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainNav = document.querySelector('.main-nav');
    const hasSubmenu = document.querySelectorAll('.has-submenu > a');
    const body = document.body;

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
            body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    hasSubmenu.forEach(menuItem => {
        menuItem.addEventListener('click', function(e) {
            if (window.innerWidth <= 1100) {
                e.preventDefault();
                this.parentElement.classList.toggle('open');
            }
        });
    });

// --- VIDEO PLAYER (Corrected for Single-Click Play) ---
const videoWrappers = document.querySelectorAll('.video-wrapper');

videoWrappers.forEach(wrapper => {
    const youtubeSrc = wrapper.getAttribute('data-youtube-embed-src');
    if (youtubeSrc) {
        const playButton = document.createElement('div');
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        playButton.className = 'video-play-button';
        wrapper.appendChild(playButton);

        wrapper.addEventListener('click', () => {
            const iframe = document.createElement('iframe');
            
            // This new logic checks if the URL already has parameters
            const autoplayUrl = youtubeSrc.includes('?') 
                ? `${youtubeSrc}&autoplay=1` 
                : `${youtubeSrc}?autoplay=1`;

            iframe.setAttribute('src', autoplayUrl);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            
            wrapper.innerHTML = '';
            wrapper.appendChild(iframe);
        }, { once: true });
    }
});

    // --- NEWSLETTER FORM (Your working code) ---
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterMessage = document.getElementById('newsletter-message');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (newsletterMessage) {
                newsletterMessage.textContent = 'Thank you! (Demo only)';
                newsletterMessage.style.color = '#4CAF50';
            }
            newsletterForm.reset();
        });
    }

    // --- FLICKER-FIX SCRIPT (Your working code) ---
    let resizeTimer;
    window.addEventListener('resize', () => {
        document.body.classList.add('is-resizing');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('is-resizing');
        }, 100);
    });

    // --- NEW: Scroll Animation for Homepage Sections ---
    const animatedSections = document.querySelectorAll('.animated-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05 // Trigger when 15% of the section is visible
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // --- NEW: Universal Button Click Sound with Navigation Delay ---
    const clickSound = document.getElementById('click-sound');
    
    document.body.addEventListener('click', function(event) {
        const clickedButton = event.target.closest('.btn');
        
        // Check if the clicked element (or its parent) is a button with a link
        if (clickedButton && clickSound && clickedButton.tagName === 'A' && clickedButton.href) {
            
            // 1. Prevent the browser from navigating immediately
            event.preventDefault(); 
            
            const destination = clickedButton.href;

            // 2. Play the sound
            clickSound.currentTime = 0;
            clickSound.play();
            
            // 3. Wait for a tiny moment, then navigate to the new page
            setTimeout(() => {
                window.location.href = destination;
            }, 200); // 300 milliseconds is a perfect, short delay
        }
        // This handles buttons that don't navigate (like form submits)
        else if (clickedButton && clickSound) {
            clickSound.currentTime = 0;
            clickSound.play();
        }
    });

});

// --- NEW: Conditional Welcome Animation ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const body = document.body;

    // Check if the animation has already been played in this session
    if (sessionStorage.getItem('animationPlayed')) {
        // If it has been played, hide the preloader and show the site immediately
        if (preloader) {
            preloader.style.display = 'none';
        }
        body.classList.add('loaded');
        return; // Stop the function here
    }

    // If the animation has NOT been played, run the sequence
    const welcomeText = document.getElementById('welcome-text');
    const identity = document.getElementById('identity-container');
    const exploreText = document.getElementById('explore-text');

    if (preloader) {
        // Step 1: Add a class to start the CSS animations
        preloader.classList.add('start-animation');

        // Step 2: Set a timer to hide everything when the animation is over
        setTimeout(() => {
            preloader.classList.add('hidden');
            body.classList.add('loaded');
            
            // Step 3: Set a flag to remember the animation has played
            sessionStorage.setItem('animationPlayed', 'true');
        }, 11000); // 11000ms = 11 seconds
    } else {
        body.classList.add('loaded');
    }
});

// --- NEW: Universal Scroll Animation Trigger ---
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.005 // CORRECTED: Lowered threshold for earlier triggering on mobile
});

animatedElements.forEach(element => {
    observer.observe(element);
});

// --- NEW: PWA Service Worker Registration ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
