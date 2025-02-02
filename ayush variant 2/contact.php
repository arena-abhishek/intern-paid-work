<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - AYUSH</title>
    <link rel="stylesheet"
      href="css/styles.css">
    <link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap">
    <link rel="stylesheet"
      href="https://unpkg.com/swiper/swiper-bundle.min.css">

    <script src="js/script.js" defer></script>
    <script src="js/layout.js" defer></script>
    <!-- <script src="js/form.js" defer></script> -->
    <script
      src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  </head>
  <body>

    <header class="header"></header>
    <!-- Contact Section -->
    <section class="py-5 mt-5 bg-white">
      <div class="container">
        <h1 class="text-center mb-4 ">Contact Us</h1>
        <div class="row">
          <!-- Contact Form -->
          <div class="col-md-6">
            <h2 class="h3  mb-3">Get in Touch</h2>
            <p class="text-muted mb-4">
              We'd love to hear from you. Please fill out the form below and
              we'll get back to you as soon as
              possible.
            </p>
            <form id="contactForm" class="needs-validation"  method="post" action="" >
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name="name"  required>
                <div class="invalid-feedback">
                  Please provide your name.
                </div>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email"  required>
                <div class="invalid-feedback">
                  Please provide a valid email.
                </div>
              </div>
              <div class="mb-3">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" class="form-control" id="subject" name="subject"  required>
                <div class="invalid-feedback">
                  Please provide a subject.
                </div>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" name="message" rows="4"
                   required></textarea>
                <div class="invalid-feedback">
                  Please provide your message.
                </div>
              </div>
              <button type="submit" class="btn btn-warning" name="submit" Value="submit" >Send
                Message</button>
            </form>
          </div>
          <!-- Contact Information -->
          <div class="col-md-6">
            <h2 class="h3  mb-3">Contact Information</h2>
            <div class="d-flex flex-column gap-4">
              <div class="d-flex align-items-start">
                <i class="fas fa-map-marker-alt  me-3 mt-1"></i>
                <div>
                  <h3 class="h5 mb-1">Address</h3>
                  <p class="text-muted">407, Aggarwal Prestige Mall, <br> Plot No. 02, Road No. 44, Pitampura, <br>New Delhi 110034, <br> India</p>
                </div>
              </div>
              <div class="d-flex align-items-start">
                <i class="fas fa-phone  me-3 mt-1"></i>
                <div>
                  <h3 class="h5 mb-1">Phone</h3>
                  <p class="text-muted">+91 011-4558-3939</p>
                </div>
              </div>
              <div class="d-flex align-items-start">
                <i class="fas fa-envelope  me-3 mt-1"></i>
                <div>
                  <h3 class="h5 mb-1">Email</h3>
                  <p class="text-muted">info@ayushgroup.com</p>
                </div>
              </div>
              <!-- <div class="d-flex align-items-start">
                <i class="fas fa-clock  me-3 mt-1"></i>
                <div>
                  <h3 class="h5 mb-1">Business Hours</h3>
                  <p class="text-muted">Monday - Friday: 9:00 AM - 6:00 PM<br>
                    Saturday: 9:00 AM - 1:00 PM<br>
                    Sunday: Closed</p>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Bootstrap JS and dependencies -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JS -->
    <footer class="footer"></footer>
  </body>
</html>



