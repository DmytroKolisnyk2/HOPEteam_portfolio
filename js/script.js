const closeSideBarRef = document.querySelector('.address__close--js');
const burgerRef = document.querySelector('.header__burger--js');
const sideBarRef = document.querySelector('.header__content-wrapper--js');
burgerRef.addEventListener('click', () =>
  sideBarRef.classList.add('header__content-wrapper--active')
);
closeSideBarRef.addEventListener('click', () => sideBarRef.classList.remove('header__content-wrapper--active'));
