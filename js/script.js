import arrayProjects from "./arrayProjects.js";

const rootRef = document.querySelector(".section__wrapper__projects-root");
const wrapperBtnRef = document.querySelector('.section__wrapper__list__btn');

const renderProjectsFn = (array) => {
  array.map((item) => {
    rootRef.insertAdjacentHTML(
      "afterbegin",
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
    if(event.target.tagName !== 'BUTTON') {
        return;
    }
    if(activeBtnRef) {
        activeBtnRef.classList.remove('active');
    }
    event.target.classList.add('active');

    if(event.target.dataset.value === 'site') {
        document.querySelectorAll('.wrapper__projects-root__card').forEach(item => {item.remove()});
       return renderProjectsFn(arrayProjects.filter(item => item.type === 'website'));
    }
    if(event.target.dataset.value === 'program') {
        document.querySelectorAll('.wrapper__projects-root__card').forEach(item => {item.remove()});
       return renderProjectsFn(arrayProjects.filter(item => item.type === 'web-program'));
    }
    if(event.target.dataset.value === 'design') {
        document.querySelectorAll('.wrapper__projects-root__card').forEach(item => {item.remove()});
       return renderProjectsFn(arrayProjects.filter(item => item.type === 'design'));
    }
    if(event.target.dataset.value === 'all') {
        document.querySelectorAll('.wrapper__projects-root__card').forEach(item => {item.remove()});
       return renderProjectsFn(arrayProjects);
    }
};


wrapperBtnRef.addEventListener('click', onClickBtnFilter);