(() => {
  const refs = {
    openModalBuyBtn: document.querySelector('[data-modal-open-buy]'),
    closeModalBuyBtn: document.querySelector('[data-modal-close-buy]'),
    modal: document.querySelector('[data-modal-buy]'),
  };

  refs.openModalBuyBtn.addEventListener('click', toggleModal);
  refs.closeModalBuyBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
