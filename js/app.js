const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const switchBtn = document.getElementById('switch');
const modeTexts = document.querySelectorAll('.mode-text');
const body = document.body;
const header = document.querySelector('header');
const about = document.querySelector('.about');
const skills = document.querySelector('.skills');
const projects = document.querySelector('.projects');
const footer = document.querySelector('footer');


// Color Theme Switcher
switchBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    about.classList.toggle('dark');
    skills.classList.toggle('dark');
    projects.classList.toggle('dark');
    footer.classList.toggle('dark');
    modeTexts.forEach(modeText => {
        modeText.classList.toggle('mode-change');
    })
})

// Event listeners
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('bar-change');
})

// Sticky navbar
window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', scrollY > 0)
})


// Smooth scroll with the help of Jquery
$(document).ready(function(){
    $(".nav-links a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
          window.location.hash = hash;
        });
      }
    });
});

// Animate on Screen
AOS.init({
  disable: false, 
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate', 
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0, 
  duration: 500, 
  easing: 'ease', 
  once: true, 
  mirror: false, 
  anchorPlacement: 'top-bottom',
});