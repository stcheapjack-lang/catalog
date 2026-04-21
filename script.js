// ===== ELEMENTS =====
const searchInput = document.getElementById("searchInput");
const sidebarSearch = document.getElementById("sidebarSearch");
const cards = document.querySelectorAll(".card");
const sidebarLinks = document.querySelectorAll("#sidebarList a");
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

// ===== FILTER FUNCTION =====
function filterCatalogs(value) {
  const keyword = value.toLowerCase().trim();

  // Cards
  cards.forEach(card => {
    const name = (card.dataset.name || "").toLowerCase();
    card.classList.toggle("hidden", !name.includes(keyword));
  });

  // Sidebar Links
  sidebarLinks.forEach(link => {
    const text = link.textContent.toLowerCase();
    link.parentElement.classList.toggle("hidden", !text.includes(keyword));
  });
}

// ===== SEARCH EVENTS =====
if (searchInput) {
  searchInput.addEventListener("input", function () {
    filterCatalogs(this.value);
    if (sidebarSearch) sidebarSearch.value = this.value;
  });
}

if (sidebarSearch) {
  sidebarSearch.addEventListener("input", function () {
    filterCatalogs(this.value);
    if (searchInput) searchInput.value = this.value;
  });
}

// ===== ACTIVE SIDEBAR LINK =====
const currentUrl = window.location.href;

sidebarLinks.forEach(link => {
  const href = link.getAttribute("href");
  if (href && currentUrl.includes(href)) {
    link.classList.add("active-link");
  }
});

// ===== MOBILE SIDEBAR TOGGLE =====
if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("show");
  });
}

// Auto close sidebar on mobile after click
sidebarLinks.forEach(link => {
  link.addEventListener("click", function () {
    if (window.innerWidth <= 900 && sidebar) {
      sidebar.classList.remove("show");
    }
  });
});

// ===== SHARE WEBSITE =====
function shareWebsite() {
  const shareData = {
    title: "ST TRADERS CHEAPJACK Catalogs",
    text: "Browse our product catalogs online.",
    url: "https://catalog.stcheapjack.com/"
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    navigator.clipboard.writeText(shareData.url).then(() => {
      alert("Website link copied:\n" + shareData.url);
    });
  }
}

// ===== SHARE INDIVIDUAL CATALOG =====
function shareCatalog(file, title) {
  const url =
    "https://catalog.stcheapjack.com/viewer.html?file=" +
    encodeURIComponent(file) +
    "&title=" +
    encodeURIComponent(title);

  const shareData = {
    title: title,
    text: "Check this catalog: " + title,
    url: url
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    navigator.clipboard.writeText(url).then(() => {
      alert("Catalog link copied:\n" + url);
    });
  }
}
