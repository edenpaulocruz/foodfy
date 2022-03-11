const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener('click', function() {
    const cardIndex = card.id
    window.location.href = `/recipes/${cardIndex}`
  })
}

const toggles = document.querySelectorAll('.toggle')

for (let toggle of toggles) {
  toggle.addEventListener('click', function() {
    const toggleSection = ((toggle.parentElement).parentElement)
    const toggledContent = toggleSection.querySelector('.toggled-content')
    if (toggledContent.style.display === '') {
      toggledContent.style.display = 'none'
      toggle.innerHTML = 'Mostrar'
    } else {
      toggledContent.style.display = ''
      toggle.innerHTML = 'Esconder'
    }
  })
}