let Accordion = (title, value, isOpen = false) => {
  console.log('TEST HERE 9')

  let accordion = document.createElement('section');
  accordion.classList.add('hubble-pd-expand', 'bc-feature-faq-wrap', 'bc-feturefaqcomponent0');

  isOpen ? accordion.classList.add('opti-accordion', 'opti-accordion--open') : accordion.classList.add('opti-accordion');

  accordion.innerHTML = `
    <a href="#" class="opti-accordion-handle">
      <h2 class="opti-title">${title}</h2>
      <span class="opti-icon">
        <span class="hidden">Click to Expand</span>
      </span>
    </a>

    <div class="opti-accordion-container">
      ${value}
    </div>
  `

  return accordion
};

export default Accordion;