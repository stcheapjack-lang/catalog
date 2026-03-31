// ===== ELEMENTS =====
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const sidebarLinks = document.querySelectorAll("#sidebarList a");
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

// ===== SEARCH FUNCTION =====
if (searchInput) {
  searchInput.addEventListener("input", function () {
    const value = this.value.toLowerCase().trim();

    // Filter cards
    cards.forEach(card => {
      const name = (card.getAttribute("data-name") || "").toLowerCase();
      if (name.includes(value)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });

    // Filter sidebar
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
  const href = link.getAttribute("href");

  if (href && currentUrl.includes(href)) {
    link.classList.add("active-link");
  } else {
    link.classList.remove("active-link");
  }
});

// ===== MOBILE SIDEBAR TOGGLE =====
if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("show");
  });
}

// ===== CLOSE SIDEBAR AFTER CLICK (MOBILE FIX) =====
sidebarLinks.forEach(link => {
  link.addEventListener("click", function () {
    if (window.innerWidth <= 900) {
      sidebar.classList.remove("show");
    }
  });
});
