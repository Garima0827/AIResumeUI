// Toggle Menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



// Ensure seamless scrolling by duplicating logos dynamically
const container = document.getElementById('logo-container');

const clone = container.innerHTML;
container.innerHTML += clone;


const scrollRevealoption = {
  distance: "100px",
  // origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".logo-carousel", {
  ...scrollRevealoption,
  origin: "top",
  duration: 2000,
});


ScrollReveal().reveal(".contentH1", {
  ...scrollRevealoption,
  origin: "left",
  duration: 2000,
});

ScrollReveal().reveal(".contentP", {
  ...scrollRevealoption,
  origin: "right",
  duration: 2000,
});

ScrollReveal().reveal(".headingButtonsDiv", {
  ...scrollRevealoption,
  origin: "bottom",
  duration: 2000,
});

