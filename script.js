const hamburger = document.querySelector(".hamburger");
const block_menu_m = document.querySelector(".block_menu_m");

const allSections = document.querySelectorAll(".section");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  block_menu_m.classList.toggle("active");
});

document.querySelectorAll(".block_m_2").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    block_menu_m.classList.remove("active");
  })
);

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.12,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
