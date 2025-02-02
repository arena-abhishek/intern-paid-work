function makeElement(
  myElem = "div",
  myClass,
  attribute = "",
  value = "",
  content = ""
) {
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

document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector(".header");
  let content1 = ` <div class="search-overlay" id="searchOverlay">
          <div class="search-form">
              <i class="fas fa-times close-search" onclick="toggleSearch()"></i>
              <div class="input-group">
                  <input type="text" class="form-control form-control-lg" placeholder="Search..." />
                  <button class="btn ">Search</button>
              </div>
          </div>
      </div>
     
          <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3">
              <div class="container">
                  <a class="navbar-brand fw-bold text-warning" href="index.html">
                      <img src="images/home/ayush-logo.png" alt="ayush" height="40" class="me-2">
                      
                  </a>
                  <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav mx-auto">
                          <li class="nav-item">
                              <a class="nav-link" href="about.html">About Us</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="brands.html">Brands</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="sustainability.html">Sustainability</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="careers.html">Careers</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="investors.html">Investors</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="media.html">Media</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="contact.php">Contact</a>
                          </li>
                      </ul>
                      <div class="d-flex align-items-center gap-3">
                          <button class=" bg-transparent border-0 text-dark p-0 " onclick="toggleSearch()">
                              <i class="fas fa-search"></i>
                          </button>
                          <div class="d-flex gap-3">
                              <a href="https://facebook.com" target="_blank" class="text-secondary social-icon facebook">
                                  <i class="fab fs-5 fa-facebook"></i>
                              </a>
                              <a href="https://twitter.com" target="_blank" class="text-secondary social-icon twitter">
                                  <i class="fab fs-5 fa-twitter"></i>
                              </a>
                              <a href="https://linkedin.com" target="_blank" class="text-secondary social-icon linkedin">
                                  <i class="fab fs-5 fa-linkedin"></i>
                              </a>
                              <a href="https://instagram.com" target="_blank" class="text-secondary social-icon instagram">
                                  <i class="fab fs-5 fa-instagram"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
`;
  myHeader = makeElement("div", "", "", "", content1);
  header.append(myHeader);

  let footer = document.querySelector(".footer");

  if (footer) {
    let content2 = `
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-3 col-md-6">
                        <h3 class="h5 fw-semibold mb-3">About AYUSH</h3>
                        <p class="text-muted">
                            Pure and natural mustard oil for your family's health. Pressed
                            with care for a healthy lifestyle.
                        </p>
                      
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="h5 fw-semibold mb-3">Quick Links</h3>
                        <ul class="list-unstyled">
                            <li class="mb-2">
                                <a href="about.html" class="text-muted text-decoration-none btn-hover-warning">About Us</a>
                            </li>
                            <li class="mb-2">
                                <a href="brands.html" class="text-muted text-decoration-none btn-hover-warning">Our Brands</a>
                            </li>
                            <li class="mb-2">
                                <a href="sustainability.html" class="text-muted text-decoration-none btn-hover-warning">Sustainability</a>
                            </li>
                            <li class="mb-2">
                                <a href="careers.html" class="text-muted text-decoration-none btn-hover-warning">Careers</a>
                            </li>
                            <li class="mb-2">
                                <a href="careers.html" class="text-muted text-decoration-none btn-hover-warning">Investors</a>
                            </li>
                            <li class="mb-2">
                                <a href="careers.html" class="text-muted text-decoration-none btn-hover-warning">Media</a>
                            </li>
                           
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="h5 fw-semibold mb-3">Contact With Us</h3>
                       <div class="d-flex gap-3">
                              <a href="https://facebook.com" target="_blank" class="text-secondary social-icon facebook">
                                  <i class="fab fa-facebook"></i>
                              </a>
                              <a href="https://twitter.com" target="_blank" class="text-secondary social-icon twitter">
                                  <i class="fab fa-twitter"></i>
                              </a>
                              <a href="https://linkedin.com" target="_blank" class="text-secondary social-icon linkedin">
                                  <i class="fab fa-linkedin"></i>
                              </a>
                              <a href="https://instagram.com" target="_blank" class="text-secondary social-icon instagram">
                                  <i class="fab fa-instagram"></i>
                              </a>
                          </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="h5 fw-semibold mb-3">Newsletter</h3>
                        <p class="text-muted small">
                            Subscribe to our newsletter for updates and exclusive offers.
                        </p>
                        <form class="mt-3 newsletter-form">
                            <div class="input-group">
                                <input type="email" class="form-control" placeholder="Your email" required />
                                <button class="btn btn-warning" type="submit">
                                    <i class="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="border-top  pt-4">
                    <div class="row align-items-center">
                        <div class="col-md-6 text-center text-md-start">
                            <p class="text-muted mb-0">
                                &copy; 2022 AYUSH IP MANAGEMENT LLP
                            </p>
                        </div>
                        <div class="col-md-6 text-center text-md-end mt-3 mt-md-0">
                            <a href="terms.html" class="text-muted text-decoration-none me-3 btn-hover-warning">Terms</a>
                            <a href="privacy.html" class="text-muted text-decoration-none me-3 btn-hover-warning">Privacy</a>
                            <a href="cookies.html" class="text-muted text-decoration-none btn-hover-warning">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

    // Append the footer content directly to the footer element
    footer.innerHTML = content2;
  } else {
    console.log("Footer element not found!");
  }
});
