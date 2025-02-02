document.addEventListener("DOMContentLoaded", function () {
  // Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Dynamically add the header content
  let header = document.querySelector(".header");
  let content1 = `  
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <img src="images/home/MAULIK LOGO WEB.png" alt="Maulik Logo" class="logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Market &amp; Solutions</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="solutions.html#automotive">Automotive</a></li>
              <li><a class="dropdown-item" href="solutions.html#textiles">Textiles</a></li>
              <li><a class="dropdown-item" href="solutions.html#pharma">Pharmaceuticals</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="innovation.html">Innovation</a></li>
          <li class="nav-item"><a class="nav-link" href="sustainability.html">Sustainability</a></li>
          <li class="nav-item"><a class="nav-link" href="news.html">News</a></li>
        </ul>
        <div class="search-container">
          <input type="text" class="search-input" placeholder="Search...">
          <button class="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  let myHeader = makeElement("nav", "navbar navbar-expand-lg", "", "", content1);
  header.append(myHeader);

  // Now call the smooth scroll function after the header is appended
  initSmoothScroll();

  // Footer content (if needed)
  let footer = document.querySelector(".footer");

  if (footer) {
    let content2 = `
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <img src="images/home/MAULIK LOGO WEB.png" alt="Maulik Logo" class="footer-logo" />
            <p>Innovating for a sustainable future</p>
          </div>
          <div class="col-md-3">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="about.html">About</a></li>
              <li><a href="marketAndSolutions.html">Market &amp; Solutions</a></li>
              <li><a href="innovation.html">Innovation</a></li>
              <li><a href="sustainability.html">Sustainability</a></li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4>Contact Us</h4>
            <ul class="contact-info">
              <li><i class="fas fa-envelope"></i> contact@maulik.com</li>
              <li><i class="fas fa-phone"></i> +91 011-4558-3939</li>
              <li><i class="fas fa-map-marker-alt"></i> 407, Aggarwal Prestige Mall, Plot No. 02, Road No. 44, Pitampura, New Delhi 110034, India</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4>Social links</h4>
            <div class="d-flex gap-3 social-links">
              <a href="https://facebook.com" target="_blank"><i class="fab fs-5 fa-facebook"></i></a>
              <a href="https://twitter.com" target="_blank"><i class="fab fs-5 fa-twitter"></i></a>
              <a href="https://linkedin.com" target="_blank"><i class="fab fs-5 fa-linkedin"></i></a>
              <a href="https://instagram.com" target="_blank"><i class="fab fs-5 fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    `;
    footer.innerHTML = content2;
  } else {
    console.log("Footer element not found!");
  }
});

// Function to initialize smooth scroll for navbar links
function initSmoothScroll() {
  // Apply smooth scroll behavior to navbar links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Function to create dynamic elements
function makeElement(myElem = "div", myClass, attribute = "", value = "", content = "") {
  let i = 0;
  let elem = document.createElement(myElem);
  if (content) {
    elem.innerHTML = content;
  }
  elem.className = myClass;
  if (attribute) {
    attribute.forEach((element) => {
      elem.setAttribute(element, value[i]);
      i++;
    });
  }
  return elem;
}
