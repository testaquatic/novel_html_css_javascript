function updateScreenSize() {
  document.getElementById("screenSize").textContent = window.innerWidth;
}

window.addEventListener("resize", updateScreenSize);

updateScreenSize();
