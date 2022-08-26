alert('Wasi Automobiles')

let togglerBtn = document.querySelector("nav .togglerBtn");

togglerBtn.addEventListener("click", sidebarOpen);

function sidebarOpen() {
  let sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("activeSideBar");
}