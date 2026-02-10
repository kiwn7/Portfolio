document.addEventListener("DOMContentLoaded", () => {
  // Typed (si existe el elemento y la librería)
  const typedEl = document.querySelector("#typed");
  if (typedEl && window.Typed) {
    new Typed("#typed", {
  strings: [
    'SOY <span class="bold">AGUSTÍN WINK</span>',
    '<span class="bold">DESARROLLADOR FRONT-END</span>',
    'ESTUDIANTE DE<span class="bold"> INGENIERÍA </span><br><span class="bold">EN SISTEMAS DE INFORMACIÓN</span>'
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1300,
  loop: true,
  contentType: "html",
  showCursor: false
});
  }

  // Scroll-spy
  const links = document.querySelectorAll('nav a[href^="#"]');
  const sections = document.querySelectorAll("main[id],main section[id], footer[id]");

  function activarLink() {
    const scrollY = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.id;

      if (scrollY >= top - 120 && scrollY < top + height - 120) {
        links.forEach(a => a.classList.remove("pagina"));
        const active = document.querySelector(`nav a[href="#${id}"]`);
        if (active) active.classList.add("pagina");
      }
    });
  }

  window.addEventListener("scroll", activarLink);
  window.addEventListener("load", activarLink); // por si carga con anclas / refresco
  activarLink(); // estado inicial
});