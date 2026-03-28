let ComparisonTableCard = (data) => {

  let selectedColour = data.colours[0]
  
  let comparisonCard = document.createElement('div');
  comparisonCard.classList.add('opti-comparisonCard');
  comparisonCard.innerHTML = `
    <div class="opti-comparisonCard__image-container"> 
      <img class="opti-comparisonCard__image" src=${data.imageURL} alt=${data.imageAlt}/>
    </div>

    <div class="opti-comparison__cta-container">
      <div class="opti__cta-wrapper">
        <a 
          href="${data.buyURL}"
          class="opti__cta"
          target="_blank"
          tabindex="1"
          role="button"
          aria-disable="false"
          title="See ${data.model}"
        >
          <span class="opti-comparison__cta-text">See Galaxy ${data.ctaText}</span>
        </a>
      </div>
    </div>
    
    ${data.colours.length > 0 ?  
      `
        <span class="opti-comparisonCard__heading">Colours</span>
        <div class="opti-comparisonCard__colours"> 
          <ul>
            ${data.colours.map((item) => {
              return `
                <li>
                  <button data-colour=${item} class="opti-comparisonCard__colours-chip opti-comparisonCard__colours-chip--${item} ${item == selectedColour ? 'opti-comparisonCard__colours-chip--active' : ''}">
                    ${item}
                  </button>
                </li>
              `
            }).join('')}
          </ul>
        </div>
      `: ''
    }

    ${data.coloursLn2.length > 0 ?  
      `
      <span class="opti-comparisonCard__heading">Exclusive Colours</span>
        <div class="opti-comparisonCard__colours"> 
          <ul>
            ${data.coloursLn2.map((item) => {
              return `
                <li>
                  <button data-colour=${item} class="opti-comparisonCard__colours-chip opti-comparisonCard__colours-chip--${item}">
                    ${item}
                    ${selectedColour}
                  </button>
                </li>
              `
            }).join('')}
          </ul>
        </div>
      `: ''
    }

    <span class="opti-comparisonCard__heading">Storage</span>
    <span class="opti-comparisonCard__value">${data.storage}</span>

    <span class="opti-comparisonCard__heading">Dimension</span>
    <span class="opti-comparisonCard__value">${data.dimension}</span>

    <span class="opti-comparisonCard__heading">Weight</span>
    <span class="opti-comparisonCard__value">${data.weight}</span>

    <span class="opti-comparisonCard__heading">Refresh Rate</span>
    <span class="opti-comparisonCard__value">${data.refreshRate}</span>

    <span class="opti-comparisonCard__heading">Front Camera</span>
    <span class="opti-comparisonCard__value">${data.frontCamera}</span>

    <span class="opti-comparisonCard__heading">Rear Camera & Zoom</span>
    ${data.rearCamera.map((value, index) => {
        return `
          <span class="opti-comparisonCard__value ${
            index == 1 || index == 3 ? "opti-comparisonCard__value--extra-top" : "opti-comparisonCard__value--extra"
          }">
            ${value}
          </span>
        `
      }).join('')
    }

    <span class="opti-comparisonCard__heading">Battery</span>
    ${data.battery.map((value, index) => {
        return `
          <span class="opti-comparisonCard__value ${
            index == 1 || index == 3 ? "opti-comparisonCard__value--extra-top" : "opti-comparisonCard__value--extra"
          }">
            ${value}
          </span>
        `
      }).join('')
    }

    <span class="opti-comparisonCard__heading">Display</span>
    ${data.display.map((value, index) => {
        return `
          <span class="opti-comparisonCard__value">
            ${value}
          </span>
`
      }).join('')
    }

    <span class="opti-comparisonCard__heading">sPen</span>
    ${data.sPen.map((value, index) => {
        return `
          <span class="opti-comparisonCard__value">
            ${value}
          </span>
`
      }).join('')
    }

    <span class="opti-comparisonCard__heading">Durability</span>
    ${data.durability.map((value, index) => {
        return `
          <span class="opti-comparisonCard__value">
            ${value}
          </span>
`
      }).join('')
    }
  `

  let colourChips = comparisonCard.querySelectorAll('button');

  for (let i = 0; i < colourChips.length; i++) {
    colourChips[i].addEventListener('click', (e) => {
      let target = e.target;
      comparisonCard.querySelector('.opti-comparisonCard__image').src = `https://images.samsung.com/uk/smartphones/${data.shortFamilySeries}/models/images/${data.shortModel}_models_colors_${target.dataset.colour}.jpg`
      
      for (let i = 0; i < colourChips.length; i++) {
        colourChips[i].classList.remove('opti-comparisonCard__colours-chip--active')
      }


      target.classList.add('opti-comparisonCard__colours-chip--active')
    })
  }

  return comparisonCard
};

export default ComparisonTableCard;