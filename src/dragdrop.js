let dragSrcEl;
const DragDrop = {
  dragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  },

  dragEnter(e) {
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

  dragEnd(e) {
    const listItens = document.querySelectorAll('.draggable');
    [].forEach.call(listItens, (item) => {
      item.classList.remove('over');
    });
    this.style.opacity = '1';
  },
};

export default DragDrop;