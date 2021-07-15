import './style.css';
import localStorageConst from './localstorage';
import dd from './dragdrop';

function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dd.dragStart, false);
  el.addEventListener('dragenter', dd.dragEnter, false);
  el.addEventListener('dragover', dd.dragOver, false);
  el.addEventListener('dragleave', dd.dragLeave, false);
  el.addEventListener('drop', dd.dragDrop, false);
  el.addEventListener('dragend', dd.dragEnd, false);
}

function todolist() {
  const todoarray = localStorageConst.retrievelist();

  const element = document.createElement('div');
  element.classList.add('todolist');

  todoarray.forEach((todoitem) => {
    const item = document.createElement('li');
    item.classList.add('todo-item');
    item.classList.add('dropzone');
    const title = document.createElement('p');
    title.classList.add('todo-title');
    title.textContent = todoitem.description;
    if (todoitem.completed) {
      const completed = document.createElement('input');
      completed.type = 'checkbox';
      completed.name = 'completed';
      completed.value = 'value';
      completed.id = 'id';
      completed.checked = true;
      title.appendChild(completed);
    } else {
      const completed = document.createElement('input');
      completed.type = 'checkbox';
      completed.name = 'completed';
      completed.value = 'value';
      completed.id = 'id';
      title.appendChild(completed);
    }
    const attr = document.createAttribute('draggable');
    attr.value = 'true';
    item.classList.add('draggable');
    item.setAttributeNode(attr);
    addEventsDragAndDrop(item);
    item.appendChild(title);
    element.appendChild(item);
  });
  return element;
}

const todolistdiv = document.getElementById('todo-list');
todolistdiv.appendChild(todolist());
