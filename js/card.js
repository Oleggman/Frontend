const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const form = document.querySelector(".numbers-form");

form.addEventListener("submit", onSubmitForm);
modal.addEventListener("click", onCloseModal);

function onSubmitForm(e) {
  e.preventDefault();

  modal.innerHTML = e.target.elements.numbers.value;
  backdrop.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";

  e.target.reset();
}

function onCloseModal(e) {
  backdrop.classList.add("is-hidden");
  document.body.style.overflow = "auto";
}
