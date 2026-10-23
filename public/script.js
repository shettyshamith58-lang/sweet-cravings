document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const status = document.querySelector('.form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get('name')?.toString().trim() || 'friend';

      status.textContent = `Thanks, ${name}! Your request has been received. We’ll get back to you shortly.`;
      contactForm.reset();
    });
  }
});
