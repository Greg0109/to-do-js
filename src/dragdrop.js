import localStorageConst from './localstorage';

let dragSrcEl;
function createNewList() {
  const newListElements = document.getElementsByTagName('li');
  console.log(newListElements);
  let newList = [];
  for (let i = 0; i < newListElements.length; i += 1) {
    let newItem = {};
    const title = newListElements[i].textContent;
    newItem['description'] = title;
    const index = newListElements[i].getAttribute('index');
    newItem['index'] = index;
    const completed = newListElements[i].getAttribute('completed');
    console.log(completed);
    if (String(completed) === "true") {
        newItem['completed'] = true;
    } else {
        newItem['completed'] = false;
    }
    newList.push(newItem)
  }
  localStorageConst.saveList(newList, false);
}

const DragDrop = {
  dragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  },

  dragEnter() {
    this.classList.add('over');
  },

  dragLeave(e) {
    e.stopPropagation();
    this.classList.remove('over');
  },

  dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  },

  dragDrop(e) {
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  },

  dragEnd() {
    const listItens = document.querySelectorAll('.draggable');
    [].forEach.call(listItens, (item) => {
      item.classList.remove('over');
    });
    createNewList();
    this.style.opacity = '1';
  },
};

export default DragDrop;