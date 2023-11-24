(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-r]'),
    closeModalBtn: document.querySelector('[data-modal-close-r]'),
    modal: document.querySelector('[data-modal-r]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
