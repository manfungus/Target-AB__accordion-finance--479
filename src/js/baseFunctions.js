console.log('TEST HERE 02')

function baseFunctions() {
  console.log('TEST HERE 03')

  const eleExists = setInterval(() => {
    if (document.querySelector('.hubble-pd-expand')) {
      console.log('TEST HERE 04')
      events()
      clearInterval(eleExists);
    }
  }, 1000)
}

function events() {
  console.log('TEST HERE 5')
  const accordions = document.querySelectorAll('.hubble-pd-expand')

  for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function(e) {
      e.preventDefault()
      // accordions[i].classList.toggle("red");
      
      e.target.closest('.hubble-pd-expand').classList.toggle('is-opened')
      e.target.closest('.hubble-pd-expand').classList.toggle('is-opened-active')
      console.log(i,e, 'TEST HERE 6')
    });
}
}

baseFunctions()