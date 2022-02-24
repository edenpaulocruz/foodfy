const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener('click', function() {
    const cardTitle = card.querySelector('.card__title').innerHTML
    let cardIndex
    cards.forEach((item, index) => {
      if (item.querySelector('.card__title').innerHTML == cardTitle) {
        return cardIndex = index
      }
    })
    window.location.href = `/recipes/${cardIndex}`
  })
}