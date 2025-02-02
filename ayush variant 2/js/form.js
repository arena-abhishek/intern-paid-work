/* document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  var formData = new FormData(this);
  
  // Show loading state
  const submitButton = this.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;
  submitButton.innerHTML = 'Sending...';
  submitButton.disabled = true;

  fetch('php/send_email.php', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    if (data.success) {
      // Reset form on success
      this.reset();
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred while sending the message. Please try again later.');
  })
  .finally(() => {
    // Reset button state
    submitButton.innerHTML = originalText;
    submitButton.disabled = false;
  });
});
 */