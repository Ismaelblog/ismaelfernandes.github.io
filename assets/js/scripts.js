// Alternância entre temas claro e escuro
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

function applyTheme(theme) {
  rootHtml.setAttribute("data-theme", theme);

  if (theme === "dark") {
    toggleTheme.classList.remove("bi-sun");
    toggleTheme.classList.add("bi-moon");
  } else {
    toggleTheme.classList.remove("bi-moon");
    toggleTheme.classList.add("bi-sun");
  }
}

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  applyTheme(newTheme);

  localStorage.setItem("theme", newTheme);
}

toggleTheme.addEventListener("click", changeTheme);

// Fechamento e abertura do acordeão dos cursos
const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    document.querySelectorAll(".accordion__item").forEach((item) => {
      item.classList.remove("active");
    });

    if (!accordionActive) {
      accordionItem.classList.add("active");
    }
  });
});

// Escolha do link ativo no menu de navegação
const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.forEach((link) => link.classList.remove("active"));
    item.classList.add("active");
  });
});
