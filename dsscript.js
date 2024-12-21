document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const formData = new FormData(contactForm);
      
      // Here you can process the form data, e.g., send it to a server.
      alert(`Thank you, ${formData.get('name')}! Your message has been sent.`);
      
      contactForm.reset();
    });
  });
  