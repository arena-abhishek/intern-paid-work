/* // Function to dynamically load CSS and JavaScript files
function loadDependencies() {
  const dependencies = {
    css: [
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
      "css/styles.css"
    ],
    js: [
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
      "js/script.js"
    ]
  };

  // Load CSS files
  dependencies.css.forEach(href => {
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  });

  // Load JavaScript files
  dependencies.js.forEach(src => {
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      document.body.appendChild(script);
    }
  });
}

// Load dependencies when the script runs
loadDependencies();
 */