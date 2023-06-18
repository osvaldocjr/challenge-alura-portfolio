document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".scroll-link");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));

      target.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});

window.onscroll = function () { mostrarOcultarBotao() };

function mostrarOcultarBotao() {
  const botao = document.querySelector('.volta-menu');

  if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
    botao.style.display = "flex";
  } else {
    botao.style.display = "none";
  }
}