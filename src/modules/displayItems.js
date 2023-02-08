import getMeal from './mealApi.js';

const cardsContainer = document.querySelector('.meal-cards');

const renderMeal = async () => {
  cardsContainer.innerHTML = '';
  const result = await getMeal();
  result.categories.forEach((res, index) => {
    const html = `
    <div class="card">
        <div class="img">
          <img src="${
  res.strCategoryThumb
}" alt="honey" width="200" height="150" />
        </div>
        <div class="name">${res.strCategory}</div>
        <div class="like"></div>
        <div class="description">
        ${res.strCategoryDescription.substr(0, 30)}...
        </div>
        <button class="card-btn" id="${index}">Comments</button>
      </div>`;

    cardsContainer.innerHTML += html;
  });
};

export default renderMeal;
