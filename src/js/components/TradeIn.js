import TradeInData from '../../data/tradeInData.json';
import PanelCard from "./PanelCard";
import Modal from "./modal/Modal";
import TradeInVideoModal from "./modal/TradeInVideoModal";

const TradeIn = () => {
  let tradeIn = document.createElement("div");
  tradeIn.classList.add("opti-panels-accordion", "opti-tradeIn");

  tradeIn.innerHTML = `
    <h2 class="opti-panels-accordion__inner-title">${TradeInData.title}</h2>

    <button class="opti-tradeIn__video-button">
      <svg width="24px" height="24px" viewBox="0 0 24 24">
          <title>icon_play bue</title>
          <desc>Created with Sketch.</desc>
          <g id="icon_play-bue" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Icon/16/play" transform="translate(2.000000, 2.000000)">
                  <circle id="Oval" stroke="#0077C8" stroke-width="2" cx="10" cy="10" r="10"></circle>
                  <polygon
                      id="Triangle"
                      fill="#0077C8"
                      transform="translate(11.428571, 10.000000) rotate(-270.000000) translate(-11.428571, -10.000000) "
                      points="11.4285714 6.42857143 15.7142857 13.5714286 7.14285714 13.5714286"
                  ></polygon>
              </g>
          </g>
      </svg>
      <span>watch the video</span>
    </button>
    
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

  tradeIn
    .querySelector(".opti-tradeIn__video-button")
    .addEventListener("click", (e) => {
      e.preventDefault();
      new Modal(TradeInVideoModal(), "modal-trade-in-video", "transparent");
  });  


  return tradeIn
}

export default TradeIn