const projects = {
  anaesthesia: {
    title: "Anaesthesia Medical Toolkit",
    kicker: "Mobile application · 2026",
    image: "assets/anaesthesia-toolkit.jpg",
    alt: "Anaesthesia Toolkit mobile application home screen",
    description: "A cross-platform clinical companion that brings references, drug dosage calculators and Difficult Airway Society decision support into one clear mobile experience.",
    details: ["Built responsive clinical flows and interactive checklists", "Created reusable TypeScript components and custom navigation", "Designed for quick scanning in time-sensitive environments"],
    link: "https://github.com/FatimahZahra30/med-app"
  },
  edvera: {
    title: "Edvera",
    kicker: "Full-stack LMS · 2025",
    image: "assets/edvera.png",
    alt: "Edvera lessons dashboard",
    description: "A full-stack learning management system developed with a cross-functional team, bringing courses, lessons, enrolment and progress into a consistent role-based experience.",
    details: ["Built dynamic lesson pages and progress tracking in Vue.js", "Integrated frontend flows with Node.js and Express services", "Worked through sprint planning, reviews and iterative UI design"],
    link: "https://github.com/FatimahZahra30/Edvera"
  },
  flappy: {
    title: "Flappy Birb",
    kicker: "Browser game · 2025",
    image: "assets/flappy-birb.png",
    alt: "Flappy Birb game over screen",
    description: "A browser-based Flappy Bird interpretation built around Functional Reactive Programming, using observables to keep game state predictable and responsive.",
    details: ["Implemented collision detection, scoring and restart states", "Added a ghost bird that replays previous runs", "Created colour rewards for consecutive wins"],
    link: "https://github.com/FatimahZahra30/FlappyBirb"
  },
  garbage: {
    title: "Garbage Inc.",
    kicker: "Multiplayer game · 2025",
    image: "assets/garbage-inc.png",
    alt: "Garbage Inc terminal game interface",
    description: "A cooperative survival game inspired by Lethal Company, translated into a character-rich terminal world with hazards, inventory and enemy behaviours.",
    details: ["Modelled scalable gameplay with abstraction and polymorphism", "Implemented enemy behaviours and item interactions", "Designed the system architecture with OOP and UML"],
    link: "https://github.com/FatimahZahra30/Garbage-Inc"
  },
  people: {
    title: "Periodic Table of People",
    kicker: "Interactive visualisation · Web",
    image: "assets/periodic-table.png",
    alt: "Three-dimensional periodic table of profile cards",
    description: "A playful visual directory that turns individual profile cards into a collective, explorable 3D composition.",
    details: ["Switches between table, sphere, helix and grid arrangements", "Balances dense profile content with a dramatic spatial view", "Uses motion and layout as part of the navigation experience"],
    link: ""
  }
};

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const dialog = document.querySelector("#project-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogTitle = document.querySelector("#dialog-title");
const dialogKicker = document.querySelector("#dialog-kicker");
const dialogDescription = document.querySelector("#dialog-description");
const dialogDetails = document.querySelector("#dialog-details");
const dialogLink = document.querySelector("#dialog-link");

document.querySelectorAll(".project-card").forEach((card) => {
  card.querySelector("button").addEventListener("click", () => {
    const project = projects[card.dataset.project];
    dialogImage.src = project.image;
    dialogImage.alt = project.alt;
    dialogTitle.textContent = project.title;
    dialogKicker.textContent = project.kicker;
    dialogDescription.textContent = project.description;
    dialogDetails.innerHTML = project.details.map((detail) => `<div><span aria-hidden="true">✦</span><span class="sr-only">Key detail:</span>${detail}</div>`).join("");
    dialogLink.hidden = !project.link;
    if (project.link) dialogLink.href = project.link;
    dialog.showModal();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) dialog.close();
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px" });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
document.querySelector("#year").textContent = new Date().getFullYear();
