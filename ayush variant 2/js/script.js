



// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize header functionality
  toggleSearch();
  handleStickyHeader();
  initializeSmoothScroll();
  initializeNavbarScroll();
  initializeTooltips();
  initializeFormValidation();
  initializeAnimations();
  setActiveNavLink();
  renderCards("container-id", dataArray, createSpecificCard);
  renderCards("featured-products", productData, createProductCard);
  // sendEmail();
});



// Initialize Swiper
const swiper = new Swiper(".hero-swiper", {

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "progressbar",
  },
});




// Smooth scrolling for anchor links
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}

// Navbar scroll behavior
function initializeNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    });
  }
}

// Initialize Bootstrap tooltips
function initializeTooltips() {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  var formData = new FormData(this);
  fetch('send_email.php', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.text())
  .then(data => {
    alert(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

// Search functionality
function toggleSearch() {
  document.getElementById("searchOverlay").classList.toggle("active");
}

// Initialize animations
function initializeAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".animate-on-scroll")
    .forEach((el) => observer.observe(el));
}

// Set active navigation link based on current page
function setActiveNavLink() {
  const currentLocation = window.location.pathname;
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("active");
    }
  });
}

// Newsletter subscription handler
function handleNewsletterSubmit(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  // Add newsletter subscription logic here
  console.log("Newsletter subscription for:", email);
  // Show success message
  alert("Thank you for subscribing to our newsletter!");
  event.target.reset();
}

// Initialize all forms with the newsletter-form class
document.querySelectorAll(".newsletter-form").forEach((form) => {
  form.addEventListener("submit", handleNewsletterSubmit);
});

// Handle sticky header
function handleStickyHeader() {
  const navbar = document.querySelector(".navbar");
  const offset = 100;

  function updateNavbar() {
    if (window.scrollY > offset) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  window.addEventListener("scroll", updateNavbar);
  updateNavbar(); // Initial check
}



/* function sendEmail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("comments").value,
  };

  emailjs
    .send("service_iky31bm", "template_h5h9jmm", parms)
    .then(function (response) {
      console.log("SUCCESS", response.status, response.text);
      alert("Your message has been sent successfully!");
    })
} */