(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-s]'),
    closeModalBtn: document.querySelector('[data-modal-close-s]'),
    modal: document.querySelector('[data-modal-s]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalSCB);
  refs.closeModalBtn.addEventListener('click', toggleModalSCB);

  function toggleModalSCB() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
