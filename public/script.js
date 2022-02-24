const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener('click', function() {
    const cardIndex = card.id
    window.location.href = `/recipes/${cardIndex}`
  })
}