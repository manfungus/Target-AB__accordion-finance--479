let Accordion = (title, value, isOpen = false) => {

  let accordion = document.createElement('section');

  isOpen ? accordion.classList.add('opti-accordion', 'opti-accordion--open') : accordion.classList.add('opti-accordion');

  accordion.innerHTML = `
    <a href="#" class="opti-accordion-handle">
      <h2 class="opti-title">${title}</h2>
      <span class="opti-icon">
        <span class="hidden">Click to Expand</span>
      </span>
    </a>

    <div class="opti-accordion-container"></div>
  `

  accordion.querySelector('.opti-accordion-container').append(value)

  accordion.querySelector('.opti-accordion-handle').addEventListener("click", (e) => {
    console.log(title, 'TEST HERE 10')
    e.preventDefault()
    accordion.classList.toggle('opti-accordion--open')
  })


  return accordion
};

export default Accordion;