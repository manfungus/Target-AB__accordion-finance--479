let ComparisonTableCard = (data) => {
  
  let comparisonCard = document.createElement('div');
  comparisonCard.classList.add('opti-comparisonCard')
  comparisonCard.innerHTML = `
    <div class="opti-comparisonCard__image-container"> 
      <img class="opti-comparisonCard__image" src=${data.imageURL} alt=${data.imageAlt}/>
    </div>
    
    ${data.colours.length > 0 ?  
      `
        <div class="opti-comparisonCard__colours"> 
          <ul>
            ${data.colours.map((item) => {
              return `
                <li>
                  <button data-colour=${item}>
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
        <div class="opti-comparisonCard__colours"> 
          <ul>
            ${data.coloursLn2.map((item) => {
              return `
                <li>
                  <button data-colour=${item}>
                    ${item}
                  </button>
                </li>
              `
            }).join('')}
          </ul>
        </div>
      `: ''
    }
  `


  let colourChips = comparisonCard.querySelectorAll('button');

  for (let i = 0; i < colourChips.length; i++) {
    colourChips[i].addEventListener('click', (e) => {
      let colour = e.target.dataset.colour;
      comparisonCard.querySelector('.opti-comparisonCard__image').src = `https://images.samsung.com/uk/smartphones/${data.shortFamilySeries}/models/images/${data.shortModel}_models_colors_${colour}.jpg`
    })
  }

  return comparisonCard
};

export default ComparisonTableCard;