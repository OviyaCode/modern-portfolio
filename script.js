document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  const setActiveSection = () => {
    let currentScroll = window.scrollY;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 50;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
        navLinks.forEach((link) => link.classList.remove("active"));

        navLinks[index].classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", setActiveSection);

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 48,
        behavior: "smooth",
      });
    });
  });
});

function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("portforlio");
  var buttons = document.getElementsByClassName("portforlio-parent")[0].getElementsByClassName("tabs")[0].getElementsByTagName("button");

  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }

  for (i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}