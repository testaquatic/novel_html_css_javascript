const textarea = document.getElementById("inquiry")!;
const counter = document.getElementById("counter")!;

textarea.addEventListener("input", function () {
    const currentLength = (this as HTMLInputElement).value.length;
    const maxLength = this.getAttribute("maxLength") ?? "0";
    if (counter) {
        counter.textContent = `${currentLength}/${maxLength}`;
        if (currentLength > Number(maxLength) * 0.8) {
            counter.style.color = "red";
        } else {
            counter.style.color = "gray";
        }
    }
});
