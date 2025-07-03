document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you! Your message has been received.');
    });
  }
});

function toggleFaq(button) {
  const content = button.nextElementSibling;
  content.classList.toggle("hidden");
}

const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const servicesIcon = document.getElementById('servicesIcon');

    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Toggle dropdown on mobile
    dropdownToggle.addEventListener('click', (e) => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        servicesIcon.textContent = servicesIcon.textContent === '+' ? '-' : '+';
        dropdownMenu.classList.toggle('hidden');
      }
    });