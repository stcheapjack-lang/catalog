const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const sidebarLinks = document.querySelectorAll("#sidebarList a");
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

// ===== SEARCH =====
if (searchInput) {
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

    sidebarLinks.forEach(link => {
      const text = link.textContent.toLowerCase();
      if (text.includes(value)) {
        link.parentElement.classList.remove("hidden");
      } else {
        link.parentElement.classList.add("hidden");
      }
    });
  });
}

// ===== ACTIVE SIDEBAR LINK =====
const currentUrl = window.location.href;
sidebarLinks.forEach(link => {
  if (currentUrl.includes(link.getAttribute("href"))) {
    link.classList.add("active-link");
  }
});

// ===== MOBILE SIDEBAR TOGGLE =====
if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("show");
  });
}
