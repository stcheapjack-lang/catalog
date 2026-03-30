const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase().trim();

  cards.forEach(card => {
    const name = card.getAttribute("data-name").toLowerCase();
    if (name.includes(value)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});

// Disable right click on homepage
document.addEventListener("contextmenu", e => e.preventDefault());

// Disable common shortcuts
document.addEventListener("keydown", function(e) {
  const key = e.key.toLowerCase();

  if (
    (e.ctrlKey && key === "s") ||
    (e.ctrlKey && key === "u") ||
    (e.ctrlKey && key === "p") ||
    (e.ctrlKey && e.shiftKey && key === "i") ||
    key === "f12"
  ) {
    e.preventDefault();
  }
});