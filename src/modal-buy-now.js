(() => {
  const refs = {
    openModalBuyBtn: document.querySelector('[data-modal-open-b]'),
    closeModalBuyBtn: document.querySelector('[data-modal-close-b]'),
    modal: document.querySelector('[data-modal-b]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
