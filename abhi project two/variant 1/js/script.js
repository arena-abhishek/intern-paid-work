// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize Swiper
const solutionsSlider = new Swiper('.solutions-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

// Populate Solutions Slider
const solutions = [
    {
        title: 'Automotive Solutions',
        description: 'Advanced chemical solutions for the automotive industry',
        icon: 'fa-car'
    },
    {
        title: 'Textile Innovation',
        description: 'Sustainable solutions for textile manufacturing',
        icon: 'fa-tshirt'
    },
    {
        title: 'Pharmaceutical Grade',
        description: 'High-purity chemicals for pharmaceutical applications',
        icon: 'fa-pills'
    }
    // Add more solutions as needed
];

const solutionsWrapper = document.querySelector('.solutions-slider .swiper-wrapper');
if (solutionsWrapper) {
    solutions.forEach(solution => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="solution-card" data-aos="fade-up">
                <i class="fas ${solution.icon} mb-4"></i>
                <h3>${solution.title}</h3>
                <p>${solution.description}</p>
                <a href="#" class="btn btn-primary mt-3">Learn More</a>
            </div>
        `;
        solutionsWrapper.appendChild(slide);
    });
}

// Search Functionality
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
    performSearch(searchInput.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch(searchInput.value);
    }
});

function performSearch(query) {
    // Implement search functionality
    console.log('Searching for:', query);
    // Add your search logic here
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        // Implement newsletter subscription logic
        console.log('Newsletter subscription for:', email);
        // Add your newsletter subscription logic here
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Smooth Scroll for Navigation Links
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
