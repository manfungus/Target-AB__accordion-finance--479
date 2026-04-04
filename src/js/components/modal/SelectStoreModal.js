import data from "../../../data/modalContent.json";

let SelectStoreModal = () => {
  let selectStoreModal = document.createElement("div");
  selectStoreModal.classList.add("opti-modal-selectedStores");

  selectStoreModal.innerHTML = `
    <h4 class="opti-modal-selectedStores__title">${
      data.selectedRetailers.title
    }</h4>
    <p class="opti-modal-selectedStores__intro">${
      data.selectedRetailers.intro
    }</p>
    <ul class="opti-modal-selectedStores__list">
      ${data.selectedRetailers.retailers
        .map((retail) => {
          return `
          <li class="opti-modal-selectedStores__list-item">
            <span class="opti-modal-selectedStores__company-name">${retail.company}</span>
            <a class="opti-modal-selectedStores__company-link" target="_blank" href="${retail.companyURL}">${retail.companyURLText}</a>
          </li>
        `;
        })
        .join("")}
    </ul>
  `;

  return selectStoreModal;
};

export default SelectStoreModal;
