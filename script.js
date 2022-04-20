const hamburger = document.querySelector (".hamburger");
const block_menu_m = document.querySelector (".block_menu_m");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    block_menu_m.classList.toggle("active");
})

document.querySelectorAll(".block_m_2").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    block_menu_m.classList.remove("active");
  }))