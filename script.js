const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');
    
for (let card of cards) {
  card.addEventListener("click", function() {
    modal.classList.add('modal--active');
  })
}
    
document.querySelector('.modal__close-button').
  addEventListener("click", function() {
    modal.classList.remove('modal--active');
  })