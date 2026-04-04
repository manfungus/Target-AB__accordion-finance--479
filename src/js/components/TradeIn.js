import TradeInData from '../../data/tradeInData.json';
import PanelCard from "./PanelCard";

const TradeIn = () => {
  let tradeIn = document.createElement("div");
  tradeIn.classList.add("opti-panels-accordion", "opti-tradeIn");

  tradeIn.innerHTML = `
    <h2 class="opti-panels-accordion__inner-title">${TradeInData.title}</h2>
    
    <p class="opti-panels-accordion__paragraph">${TradeInData.description}</p>

    <div class="opti-panels-accordion__panels">
    </div>

    <div class="opti-panels-cta-wrap opti__cta-wrapper">
      <a class="opti-panels-cta opti-panels-trade-in-cta opti__cta" role="button" href="#">${TradeInData.ctaText}</a>
    </div>
  `;

  // add video modal from prod

  // let checkTargetExist = setInterval(function () {
  //   let target = document.querySelector(".tariff-accordian__see-more");

  //   if (target) {
  //     $(".opti-panels-trade-in-cta").on("click", (e) => {
  //       e.preventDefault();

  //       // 
  //     });

  //     clearInterval(checkTargetExist);
  //   }
  // }, 1000);

  TradeInData.panels
    .map((data) => {
      tradeIn
        .querySelector(".opti-panels-accordion__panels")
        .appendChild(PanelCard(data));
    })
    .join("");


  return tradeIn
}

export default TradeIn