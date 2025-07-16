const textarea = document.getElementById("inquiry");
const counter = document.getElementById("counter");


textarea?.addEventListener("input", function () {
  if (!(this instanceof HTMLTextAreaElement && counter instanceof HTMLDivElement)) {
    return;
  }
  const currentLength = this.value.length;
  const maxLengthSt = this.getAttribute("maxLength");
  const maxLength = maxLengthSt ? parseInt(maxLengthSt) : 0;
  counter.textContent = `${currentLength}/${maxLength}`;

  if (currentLength > maxLength * 0.8) {
    counter.style.color = "red";
  } else {
    counter.style.color = "blue";
  }
});