import './style.css';
import localStorageConst from './localstorage';
import dd from './dragdrop';
import completedChange from './completed';
import addremove from './addremove';

function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dd.dragStart, false);
  el.addEventListener('dragenter', dd.dragEnter, false);
  el.addEventListener('dragover', dd.dragOver, false);
  el.addEventListener('dragleave', dd.dragLeave, false);
  el.addEventListener('drop', dd.dragDrop, false);
  el.addEventListener('dragend', dd.dragEnd, false);
}

function editUI(show, index) {
  if (show) {
    const formDiv = document.getElementById('editForm');
    formDiv.innerHTML = "<form action='' class='form  text-center bg-dark w-100 h-100 m-auto'><br><div class='title-border-top'></div><h2 class='add-book-title'>Add a new book</h2><br><input type='text' name='title' id='title' placeholder='Title'><br><br></form><div class='form-btn'> <button type='submit' class='text-center ' id='add-button'>Add</button></div>";

    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', () => {
      const title = document.getElementById('title').value;
      addremove.edit(title, index);
      editUI(false);
    });
  } else {
    const formDiv = document.getElementById('editForm');
    formDiv.innerHTML = '';
  }
}

function todolist() {
  const todoarray = localStorageConst.retrievelist();

  const element = document.createElement('div');
  element.classList.add('todolist');

  todoarray.forEach((todoitem, index) => {
    todoitem['index'] = index;
    todoarray[index] = todoitem;
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

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.addEventListener('click', () => {
      addremove.remove(index);
    });

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.addEventListener('click', () => {
      editUI(true, index);
    });

    item.appendChild(title);
    item.appendChild(editButton);
    item.appendChild(deleteButton);
    element.appendChild(item);
  });
  localStorageConst.saveList(todoarray, false);
  return element;
}

const newItemTitle = document.getElementById('newItemTitle');
const newItemButton = document.getElementById('newItemButton');
newItemButton.addEventListener('click', () => {
  addremove.add(newItemTitle.value);
});

const removeCompletedButton = document.getElementById('removeCompletedButton');
removeCompletedButton.addEventListener('click', () => {
  addremove.removeCompleted();
});

const todolistdiv = document.getElementById('todo-list');
todolistdiv.appendChild(todolist());
editUI(false);
