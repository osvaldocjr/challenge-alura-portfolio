window.sr = ScrollReveal({ reset : true });

ScrollReveal().reveal('#sobre-mim', {delay:300});
ScrollReveal().reveal('#skills', {delay:300});
ScrollReveal().reveal('#hobbies', {delay:300});
ScrollReveal().reveal('#formacao', {delay:300});
ScrollReveal().reveal('#projeto', {delay:300});
ScrollReveal().reveal('#contato', {delay:300});

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});