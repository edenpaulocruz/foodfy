const modal = document.querySelector(".modal");
const modalContainer = modal.querySelector(".modal__container");
const cards = document.querySelectorAll(".card");


for (let card of cards) {
  card.addEventListener("click", function() {
    modal.classList.add("modal--active");

    modalContainer.querySelector("img").src = card.querySelector("img").getAttribute("src");
    modalContainer.querySelector("img").alt = card.querySelector("img").getAttribute("alt");
    modalContainer.querySelector("h2").innerText = card.querySelector("h3").innerText;
    modalContainer.querySelector("p").innerText = card.querySelector("p").innerText;
    
  })
}

document.querySelector(".modal__container__close-button").
addEventListener("click", function() {
  modal.classList.remove("modal--active");
})