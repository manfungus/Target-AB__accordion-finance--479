import PricePromiseData from "../../data/pricePromiseData.json";
import PanelCard from "./PanelCard";
import Modal from "./modal/Modal";
import SelectedStoreModal from "./modal/SelectStoreModal";

const PricePromise = () => {
  let pricePromise = document.createElement("div");
  pricePromise.classList.add("opti-panels-accordion", "opti-pricePromise");

  pricePromise.innerHTML = `
    <h2 class="opti-panels-accordion-inner-title">${PricePromiseData.title}</h2>
    <p class="opti-panels-accordion__paragraph">${
      PricePromiseData.description
    }</p>

    <div class="opti-panels-accordion__panels">
    </div>

    <p class="opti-panels-accordion__disclaimer">${
      PricePromiseData.footNote
    }</p>
    <div class="opti-panels-cta-wrap opti__cta-wrapper">
      <a class="opti-panels-cta opti__cta" role="button" href="${PricePromiseData.ctaURL}">${PricePromiseData.ctaText}</a>
    </div>
    <div class="opti-panels-learn-more__container opti-panels-accordion__paragraph">
      <a class="opti-panels-learn-more" href="${PricePromiseData.learnMoreURL}">${PricePromiseData.learnMoreText}</a>
    </div>

    ${PricePromiseData.TandC.map((data) => {
      return `<p class="opti-panels-accordion__disclaimer opti-panels-accordion__disclaimer--align-left">${data}</p>`;
    }).join("")}
  `;

  PricePromiseData.panels
    .map((data) => {
      pricePromise
        .querySelector(".opti-panels-accordion__panels")
        .appendChild(PanelCard(data));
    })
    .join("");

  pricePromise
    .querySelector(".opti-selected__retailers__btn")
    .addEventListener("click", (e) => {
      e.preventDefault();
      new Modal(SelectedStoreModal(), "modal-selected-stores");
    });

  return pricePromise;
}

export default PricePromise;