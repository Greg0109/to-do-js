import './style.css';

function todolist() {
  const todoarray = [
    {
      index: 0,
      completed: false,
      description: 'Pick up the trash',
    },
    {
      index: 1,
      completed: true,
      description: 'Create To-Do list milestone 1',
    },
    {
      index: 2,
      completed: false,
      description: 'Take the dog for a walk',
    },
  ];

  const element = document.createElement('div');
  element.classList.add('todolist');

  todoarray.forEach((todoitem) => {
    const item = document.createElement('div');
    item.classList.add('todo-item');
    const title = document.createElement('p');
    title.classList.add('todo-title');
    title.textContent = todoitem.description;
    if (todoitem.completed) {
      const completed = document.createElement('i');
      completed.classList.add('far');
      completed.classList.add('fa-check-square');
      title.appendChild(completed);
    } else {
      const completed = document.createElement('i');
      completed.classList.add('far');
      completed.classList.add('fa-square');
      title.appendChild(completed);
    }
    item.appendChild(title);
    element.appendChild(item);
  });
  return element;
}

const todolistdiv = document.getElementById('todo-list');
todolistdiv.appendChild(todolist());
