window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "rgba(44, 62, 80, 0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.backgroundColor = "#2c3e50";
    header.style.backdropFilter = "none";
  }
});

document.querySelectorAll(".sidebar a").forEach((link) => {
  link.addEventListener("click", function (e) {
    document
      .querySelectorAll(".sidebar a")
      .forEach((a) => a.classList.remove("active"));
    this.classList.add("active");
  });
});
