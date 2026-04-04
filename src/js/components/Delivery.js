import DeliveryData from "../../data/deliveryData.json";

let Delivery = () => {
  let delivery = document.createElement("div");
  delivery.classList.add("opti-delivery-accordion");

  delivery.innerHTML = `
    <p class="opti-accordion-paragraph opti-accordion-paragraph--intro">${
      DeliveryData.intro
    }</p>

    <div class="opti-delivery">
      <div class="opti-delivery__column">
        <h3 class="opti-delivery__column-title">${
          DeliveryData.leftColTitle
        }</h3>

        
        ${DeliveryData.purchase
          .map((item) => {
            return `
          <div class="opti-delivery__column-item">
            <h4 class="opti-delivery__column-subtitle">${item.title}</h4>
            <p class="opti-delivery__column-description">${item.description}</p>
          </div>
          `;
          })
          .join("")}
      </div>

      <div class="opti-delivery__column">
        <h3 class="opti-delivery__column-title">${
          DeliveryData.rightColTitle
        }</h3>

        ${DeliveryData.premium
          .map((item) => {
            return `
            <div class="opti-delivery__right-col opti-delivery__column-item">
              <div class="opti-delivery__column-content">
                <h4 class="opti-delivery__column-subtitle">${item.title}</h4>
                <p class="opti-delivery__column-description">${item.description}</p>
              </div>
              <span class="opti-delivery__column-cost">${item.cost}</span>
            </div>
          `;
          })
          .join("")}
      </div>
    </div>

    <p class="opti-accordion-paragraph">${DeliveryData.faq}</p>
  `;

  return delivery;
};

export default Delivery;
