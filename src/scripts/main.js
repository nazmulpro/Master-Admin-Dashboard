import "../css/style.css";

let dropdown = document.getElementById("dropdown");
let dropdownContent = document.getElementById("dropdown-content");

//profile dropdown

dropdown.addEventListener("click", function (event) {
  dropdownContent.classList.toggle("hidden");
});

//sidebar

let sidebarToggle = document.getElementById("sidebarToggle");
let sidebar = document.getElementById("sidebar");
let header = document.getElementById("header");
let content = document.getElementById("content");
let showSidebar = document.getElementById("showSidebar");
let overlay = document.getElementById("overlay-effect");

sidebarToggle.addEventListener("click", function () {
  sidebar.classList.add("hide");
  header.classList.add("hide");
  content.classList.add("hide");
  setTimeout(() => {
    showSidebar.classList.toggle("hidden");
  }, 400);
});

showSidebar.addEventListener("click", function () {
  sidebar.classList.remove("hide");
  header.classList.remove("hide");
  content.classList.remove("hide");
  showSidebar.classList.toggle("hidden");
});

//mobile  sidebar
document
  .getElementById("mobile-sidebar-icon")
  .addEventListener("click", function () {
    sidebar.classList.add("active");
    overlay.style.display = "block";
  });

document
  .getElementById("mobile-sidebar-close-icon")
  .addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.style.display = "none";
  });

// hide overlay effect

window.onclick = function (event) {
  if (event.target == overlay) {
    overlay.style.display = "none";
    sidebar.classList.remove("active");
  }
  if (event.target != dropdown) {
    dropdownContent.classList.add("hidden");
  }
};
