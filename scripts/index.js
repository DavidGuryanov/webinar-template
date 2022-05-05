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
const template = document.getElementById('item');

const getItemElement = (title) => {
  const newItemElement = template.content.cloneNode(true);
  const newItemTitle = newItemElement.querySelector('.todo_item__header');
  newItemTitle.textContent = title;
  return newItemElement;
};

const renderItem = (wrap, title) => {
  wrap.append(getItemElement(title));
};

initialItems.forEach((title) => {
  renderItem(itemListWrapper, title);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTitle = e.target.title.value;
  if (newTitle) {
    renderItem(itemListWrapper, newTitle);
  }
  e.target.title.value = '';
});
