import Accordion from "./js/components/Accordion";
import ComparisonTable from "./js/components/ComparisonTable.js";
import Finance from "./js/components/Finance.js";

import './css/styles.scss';

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
    document.querySelector('#downBoxHtml .hubble-pd-expand:nth-child(2)').after(
      Accordion('Compare the models', ComparisonTable(), true)
    );
    
    document.querySelector('#downBoxHtml .hubble-pd-expand:nth-child(4)').after(
      Accordion('Finance', Finance(), false)
    );
  }
}

financeAccordions()