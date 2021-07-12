const closeSideBarRef = document.querySelector(".address__close--js");
const burgerRef = document.querySelector(".header__burger--js");
const sideBarRef = document.querySelector(".header__content-wrapper--js");
const overlayRef = document.querySelector(".form-modal__overlay");
const closeModalRef = document.querySelector(".form__close--js");
const openModalRef = document.querySelector(".open-form--js");
const formModalRef = document.querySelector(".form-modal");
const menuRef = document.querySelector('.menu__list');

menuRef.addEventListener('click', (event) => {
  if (!event.target.classList.contains('menu__link')) return;
  [...event.currentTarget.children].forEach(element => element.firstElementChild.classList.remove('menu__link--active'))
  event.target.classList.add('menu__link--active');
});
burgerRef.addEventListener("click", () =>
  sideBarRef.classList.add("header__content-wrapper--active")
);
closeSideBarRef.addEventListener("click", () =>
  sideBarRef.classList.remove("header__content-wrapper--active")
);

const removeListeners = () => {
  window.removeEventListener("keydown", closeEsc);
  overlayRef.removeEventListener("click", closeOverlay);
  closeModalRef.removeEventListener("click", closeCrossBtn);
};
const closeEsc = (event) => {
  if (event.code === "Escape") {
    formModalRef.classList.add("form-modal--hidden");
    removeListeners();
  }
};
const closeOverlay = () => {
  formModalRef.classList.add("form-modal--hidden");
  removeListeners();
};
const closeCrossBtn = () => {
  formModalRef.classList.add("form-modal--hidden");
  removeListeners();
};
openModalRef.addEventListener("click", () => {
  formModalRef.classList.remove("form-modal--hidden");
  window.addEventListener("keydown", closeEsc);
  overlayRef.addEventListener("click", closeOverlay);
  closeModalRef.addEventListener("click", closeCrossBtn);
});
