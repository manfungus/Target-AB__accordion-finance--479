export default class Modal {
  constructor(content, type, transparent = false) {
    let modal = document.createElement("div");
    modal.classList.add("opti-modal", type);

    modal.innerHTML = `
      <div class="opti-modal__container ${
        transparent ? "opti-modal__container--transparent" : ""
      }">
        <a href="#" role="button" class="opti-modal__close">
          <span class="opti-modal__close-visual">close modal</span>
         </a>
        <div class="opti-modal__content"></div>
      </div>
    `;

    modal.querySelector(".opti-modal__close").addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".opti-modal").remove();
    });

    modal.querySelector(".opti-modal__content").appendChild(content);

    // $("body").prepend(modal);

    document.querySelector('body').append(modal)
  }
}
