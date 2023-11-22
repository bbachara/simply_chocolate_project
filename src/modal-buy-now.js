(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-buy]'),
    closeModalBtn: document.querySelector('[data-modal-close-buy]'),
    modal: document.querySelector('[data-modal-buy]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalBuy);
  refs.closeModalBtn.addEventListener('click', toggleModalBuy);

  function toggleModalBuy() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
