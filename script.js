const container = document.querySelector(".img");
const prev = document.querySelector("#btn-prev")
const next = document.querySelector("#btn-suiv")

let index = 0;
const totalImages = container.querySelectorAll("img").length;

next.addEventListener("click", () => {
    index++;
    if (index >= totalImages) {
        index = 0; // retour au début
    }
    container.style.transform = `translateX(-${index * 600}px)`;
});

prev.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = totalImages - 1; // retour à la dernière image
    }
    container.style.transform = `translateX(-${index * 600}px)`;
});