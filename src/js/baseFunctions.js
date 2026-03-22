function baseFunctions() {

  const eleExists = setInterval(() => {
    if (document.querySelector('.hubble-pd-expand')) {
      events()
      clearInterval(eleExists);
    }
  }, 1000)
}

function events() {
  const accordions = document.querySelectorAll('.hubble-pd-expand')

  for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function(e) {
      e.preventDefault()
      e.target.closest('.hubble-pd-expand').classList.toggle('is-opened')
      e.target.closest('.hubble-pd-expand').classList.toggle('is-opened-active')
    });
  }
}

baseFunctions()