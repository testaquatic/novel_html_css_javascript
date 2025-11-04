"use strict";
document.querySelector("form")?.addEventListener("submit", (e) => {
    // 폼이 전솔될 때 실제 전송을 막음
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) {
        return;
    }
    const formData = new FormData(e.target);
    console.log("전송될 데이터");
    for (const [key, value] of formData.entries()) {
        if (key.includes("Password")) {
            console.log(`${key}: ${"*".repeat(value.toString().length)}`);
        }
        else {
            console.log(`${key}: ${value}`);
        }
    }
});
//# sourceMappingURL=index.js.map