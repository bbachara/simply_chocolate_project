(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-r]'),
    closeModalBtn: document.querySelector('[data-modal-close-r]'),
    modal: document.querySelector('[data-modal-r]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalR);
  refs.closeModalBtn.addEventListener('click', toggleModalR);

  function toggleModalR() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
