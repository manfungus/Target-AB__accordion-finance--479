import Accordion from "./js/components/Accordion";

if (import.meta.env.DEV) {
  import("./js/baseFunctions.js")
  import("./css/baseStyles.scss")
}

const financeAccordions = () => {
  const elementExists = setInterval(() => {
    if (document.querySelector('.hubble-pd-expand')) {
      // events()
      resetHandles();
      addElements();
      console.log('TEST HERE 01')
      clearInterval(elementExists);
    }
  }, 1000)

  //Closes all active accordions
  function resetHandles() {
    const accordions = document.querySelectorAll('.hubble-pd-expand')

    for (let i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove('is-opened', 'is-opened-active');
    }
  }

  const addElements = () => {
    document.querySelector('#downBoxHtml .hubble-pd-expand:nth-child(2)').after(Accordion('test123', 'test456', false));
    
  }
}

financeAccordions()