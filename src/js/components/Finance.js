import FinanceData from "../../data/financeData.json";
import PanelCard from "./PanelCard";

const Finance = () => {
  let price = import.meta.env.DEV ? 1200 : BC_MODEL.allPrice;
  const monthlyPrice = Math.ceil((price / 36) * 100) / 100;

  const financeOptions = document.createElement("div");
  financeOptions.classList.add('opti-panels-accordion', 'opti-financeOptions');

  financeOptions.innerHTML = `
    <h2 class="opti-panels-accordion__inner-title">${FinanceData.title}</h2>
    <p class="opti-panels-accordion__paragraph"> 
      ${FinanceData.description}
    </p>

    <div class="opti-panels-accordion__panels">
    </div>

    <a class="opti-panels-accordion__link opti-panels-accordion-finance-popup" href="#">
      Pay as little as £${monthlyPrice.toFixed(2)} a month* &gt;
    </a>

    <div class="opti__cta-wrapper">
      <a href="#" role="button" class="opti-panels-accordion-finance-popup opti__cta">
        ${FinanceData.ctaText}
      </a>
    </div>

    <p class="opti-panels-accordion__disclaimer">${FinanceData.TandC}</p>
  `

  FinanceData.panels
    .map((data) => {
      financeOptions
        .querySelector(".opti-panels-accordion__panels")
        .appendChild(PanelCard(data));
    })
    .join("");

  const btns = financeOptions.querySelectorAll(
    ".opti-panels-accordion-finance-popup"
  );

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
      e.preventDefault();

      // opens prod popup
      document.querySelector(".hubble-product__offer-list.emi .hubble-product__offer-emi .hubble-pd-popup-opener").click();
    });
  }

  return financeOptions
}

export default Finance;