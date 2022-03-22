const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener('click', function() {
    const cardIndex = card.id
    window.location.href = `/recipes/${cardIndex}`
  })
}

const toggleButtons = document.querySelectorAll('.toggle-button')

for (let toggleButton of toggleButtons) {
  toggleButton.addEventListener('click', function() {
    const toggleSection = ((toggleButton.parentElement).parentElement)
    const toggledContent = toggleSection.querySelector('.toggled-content')
    toggledContent.classList.toggle('hidden')
    toggleButton.innerHTML = toggledContent.classList.contains('hidden') ? 'Mostrar' : 'Esconder'
  })
}