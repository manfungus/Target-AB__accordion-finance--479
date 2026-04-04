const PanelCard = (data) => {
  const panelCard = document.createElement('div');
  panelCard.classList.add('opti-panel-card');

  panelCard.innerHTML = `
    <div class="opti-panel-card__image-container">
      <img class="opti-panel-card__image" src="${data.imageSrc}" alt="${data.imageAlt}"/>
    </div>
    <div class="opti-panel-card__title-container">
      <h4 class="opti-panel-card__title">${data.panelTitle}</h4>
    </div>
    <p class="opti-panel-card__description">${data.panelDescription}</div>
  `;

  return panelCard;
}

export default PanelCard;