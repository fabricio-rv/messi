AOS.init({ duration: 800, once: true });
feather.replace();

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle?.addEventListener("click", () =>
  mobileMenu.classList.toggle("hidden")
);

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      mobileMenu?.classList.add("hidden");
    }
  });
});

const backTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) backTop?.classList.remove("hidden");
  else backTop?.classList.add("hidden");
});
backTop?.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    const top = s.offsetTop,
      h = s.clientHeight;
    if (pageYOffset >= top - 100) current = s.getAttribute("id");
  });
  navLinks.forEach((l) => {
    l.classList.remove("active-nav");
    if (l.getAttribute("href") === `#${current}`) l.classList.add("active-nav");
  });
});

const seasonStats = [
  { season: "2004-05", club: "Barcelona", apps: 9, goals: 1, assists: 0 },
  { season: "2005-06", club: "Barcelona", apps: 25, goals: 8, assists: 3 },
  { season: "2006-07", club: "Barcelona", apps: 36, goals: 17, assists: 3 },
  { season: "2007-08", club: "Barcelona", apps: 40, goals: 16, assists: 13 },
  { season: "2008-09", club: "Barcelona", apps: 51, goals: 38, assists: 17 },
  { season: "2009-10", club: "Barcelona", apps: 53, goals: 47, assists: 12 },
  { season: "2010-11", club: "Barcelona", apps: 55, goals: 53, assists: 24 },
  { season: "2011-12", club: "Barcelona", apps: 60, goals: 73, assists: 29 },
  { season: "2012-13", club: "Barcelona", apps: 50, goals: 60, assists: 16 },
  { season: "2013-14", club: "Barcelona", apps: 46, goals: 41, assists: 14 },
  { season: "2014-15", club: "Barcelona", apps: 57, goals: 58, assists: 28 },
  { season: "2015-16", club: "Barcelona", apps: 49, goals: 41, assists: 23 },
  { season: "2016-17", club: "Barcelona", apps: 52, goals: 54, assists: 19 },
  { season: "2017-18", club: "Barcelona", apps: 54, goals: 45, assists: 18 },
  { season: "2018-19", club: "Barcelona", apps: 50, goals: 51, assists: 19 },
  { season: "2019-20", club: "Barcelona", apps: 44, goals: 31, assists: 27 },
  { season: "2020-21", club: "Barcelona", apps: 47, goals: 38, assists: 14 },
  { season: "2021-22", club: "PSG", apps: 34, goals: 11, assists: 15 },
  { season: "2022-23", club: "PSG", apps: 41, goals: 21, assists: 20 },
  { season: "2023", club: "Inter Miami", apps: 14, goals: 11, assists: 5 },
  { season: "2024", club: "Inter Miami", apps: 25, goals: 23, assists: 13 },
  { season: "2025", club: "Inter Miami", apps: 49, goals: 43, assists: 26 },
  { season: "Seleção", club: "Argentina", apps: 196, goals: 115, assists: 61 },
];

const tbody = document.getElementById("stats-body");
if (tbody) {
  seasonStats.forEach((s) => {
    const tr = document.createElement("tr");
    tr.className = "hover:bg-neutral-50 transition";
    tr.innerHTML = `
      <td>${s.season}</td>
      <td>${s.club}</td>
      <td class="text-center">${s.apps}</td>
      <td class="text-center">${s.goals}</td>
      <td class="text-center">${s.assists}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Lógica do Modo Escuro (Simplificada e Robusta)
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 1. Verifica se o usuário já tem preferência salva
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

// 2. Evento de Clique
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Salva a preferência
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
    // Não precisamos mexer nos ícones aqui, o CSS faz isso sozinho!
});

// Inicializa os ícones (Isso deve ficar no final do arquivo)
feather.replace();