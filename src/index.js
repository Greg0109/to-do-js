import './style.css';
import localStorageConst from './localstorage';
import dd from './dragdrop';
import completedChange from './completed';

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

  todoarray.forEach((todoitem, index) => {
    const item = document.createElement('li');
    item.classList.add('todo-item');
    item.classList.add('dropzone');
    const title = document.createElement('p');
    title.classList.add('todo-title');
    title.textContent = todoitem.description;

    const completedCheckBox = document.createElement('input');
    completedCheckBox.type = 'checkbox';
    completedCheckBox.name = 'completed';
    completedCheckBox.value = 'value';
    completedCheckBox.id = 'id';
    if (todoitem.completed) {
      completedCheckBox.checked = true;
    }
    completedCheckBox.addEventListener('change', () => {
      completedChange.changeStatus(index);
    });
    title.appendChild(completedCheckBox);

    const indexattr = document.createAttribute('index');
    indexattr.value = todoitem.index;
    item.setAttributeNode(indexattr);

    const completedattr = document.createAttribute('completed');
    completedattr.value = todoitem.completed;
    item.setAttributeNode(completedattr);

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
