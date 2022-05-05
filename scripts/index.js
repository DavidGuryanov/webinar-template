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

// document.createElement()

const itemListWrapper = document.querySelector('.items');
const form = document.querySelector('.add_form');
const template = document.getElementById('item');

itemListWrapper.addEventListener('click', (evt) => {
  console.log(evt.target);
  if (evt.target.classList.contains('button__delete')) {
    handleDeleteItem(evt);
  } else if (evt.target.classList.contains('button__duplicate')) {
    handleDuplicateItem(evt);
  } else if (evt.target.classList.contains('button__edit')) {
    handleEditItem(evt);
  }
});

const handleDeleteItem = (evt) => {
  evt.target.closest('.todo_item').remove();
};

const handleDuplicateItem = (evt) => {
  const thisElement = evt.target.closest('.todo_item');
  const newItem = getItemElement(
    thisElement.querySelector('.todo_item__header').textContent
  );
  itemListWrapper.insertBefore(newItem, thisElement.nextSibling);
};

const handleEditItem = (evt) => {
  const title = evt.target
    .closest('.todo_item')
    .querySelector('.todo_item__header');
  const titleText = title.textContent;
  title.remove();
  const newInput = document.createElement('input');
  newInput.value = titleText;
  newInput.classList.add('todo_item__header-editing');
  newInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      title.textContent = newInput.value;
      newInput.remove();
      evt.target.closest('.todo_item').prepend(title);
    }
  });
  evt.target.closest('.todo_item').prepend(newInput);
};

const getItemElement = (title) => {
  const newItemElement = template.content.cloneNode(true);
  const newItemTitle = newItemElement.querySelector('.todo_item__header');
  newItemTitle.textContent = title;
  const deleteButton = newItemElement.querySelector('.button__delete');
  const editButton = newItemElement.querySelector('.button__edit');
  const duplicateButton = newItemElement.querySelector('.button__duplicate');
  //   deleteButton.addEventListener('click', handleDeleteItem);
  //   duplicateButton.addEventListener('click', handleDuplicateItem);
  //   editButton.addEventListener('click', handleEditItem);
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
