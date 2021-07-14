import arrayProjects from "./arrayProjects.js";

const rootRef = document.querySelector(".section__wrapper__projects-root");
const wrapperBtnRef = document.querySelector('.section__wrapper__list__btn');

const renderProjectsFn = (array) => {
  array.map((item) => {
    rootRef.insertAdjacentHTML(
      "beforeend",
      `<div class="wrapper__projects-root__card">
    <div class="projects-root__card__wrapperImg">
      <div class='projects-root__card__wrapperImg__wrapper_description'>
      <p class='projects-root__card__description'>${item.description}</p>
      </div>
    <img class="projects-root__card__Img" src="${item.img}" alt="img_project">
    </div>
    <div class="wrapper__projects-root__card__wrapper__text">
      <h3 class="wrapper__projects-root__card__title"><a target='_blank' href="${item.link}">${item.name}</a></h3>
    <h4 class="wrapper__projects-root__card__subtitle">${item.type}</h4>
  </div>
  </div>`
    );
  });
};

renderProjectsFn(arrayProjects);


const onClickBtnFilter = (event) => {
  const activeBtnRef = event.currentTarget.querySelector('.active');
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  if (activeBtnRef) {
    activeBtnRef.classList.remove('active');
  }
  event.target.classList.add('active');

  if (event.target.dataset.value === 'site') {
    document.querySelectorAll('.wrapper__projects-root__card').forEach(item => { item.remove() });
    return renderProjectsFn(arrayProjects.filter(item => item.type === 'website'));
  }
  if (event.target.dataset.value === 'program') {
    document.querySelectorAll('.wrapper__projects-root__card').forEach(item => { item.remove() });
    return renderProjectsFn(arrayProjects.filter(item => item.type === 'web-program'));
  }
  if (event.target.dataset.value === 'design') {
    document.querySelectorAll('.wrapper__projects-root__card').forEach(item => { item.remove() });
    return renderProjectsFn(arrayProjects.filter(item => item.type === 'design'));
  }
  if (event.target.dataset.value === 'all') {
    document.querySelectorAll('.wrapper__projects-root__card').forEach(item => { item.remove() });
    return renderProjectsFn(arrayProjects);
  }
};


wrapperBtnRef.addEventListener('click', onClickBtnFilter);

const closeSideBarRef = document.querySelector(".address__close--js");
const burgerRef = document.querySelector(".header__burger--js");
const sideBarRef = document.querySelector(".header__content-wrapper--js");
const overlayRef = document.querySelector(".form-modal__overlay");
const closeModalRef = document.querySelector(".form__close--js");
const openModalRef = [...document.querySelectorAll(".open-form--js")];
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
openModalRef.forEach(element => {
  element.addEventListener("click", () => {
    formModalRef.classList.remove("form-modal--hidden");
    window.addEventListener("keydown", closeEsc);
    overlayRef.addEventListener("click", closeOverlay);
    closeModalRef.addEventListener("click", closeCrossBtn);
  })
});