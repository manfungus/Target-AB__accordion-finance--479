let TradeInVideoModal = () => {
  let tradeInVideoModal = document.createElement("div");
  tradeInVideoModal.classList.add("opti-modal-tradeInVideoModal");

  tradeInVideoModal.innerHTML = `
    <iframe
      class="opti-youtube-video"
      frameBorder="0"
      allowfulscreen="1"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      title="Youtube video player"
      src="https://www.youtube.com/embed/wLp3uQpZft0"
      id="widget4"
    ></iframe>
  `;

  return tradeInVideoModal;
};

export default TradeInVideoModal;
