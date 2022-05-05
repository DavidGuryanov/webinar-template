console.log('setup');
const initialItems = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars',
];

const itemListWrapper = document.querySelector('.items');
const form = document.querySelector('.add_form');
// insertAdjacentHTML

const renderItem = (wrap, title) => {
  wrap.insertAdjacentHTML(
    'beforeend',
    `
      <li class="todo_item">
                  <h3 class="todo_item__header">${title}</h3>
                  <div class="buttons">
                      <button type="button" class="button button__edit"></button>
                      <button type="button" class="button button__duplicate"></button>
                      <button type="button" class="button button__delete"></button>
                  </div>
              </li>
      `
  );
};

initialItems.forEach((title) => {
  renderItem(itemListWrapper, title);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  renderItem(itemListWrapper, title);
  e.target.title.value = '';
});
