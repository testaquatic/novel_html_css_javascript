function updateScreenSize() {
    const element = document.getElementById("screenSize");
    if (element) {
        element.textContent = String(window.innerWidth);
    }
}

window.addEventListener("resize", updateScreenSize);
updateScreenSize();
