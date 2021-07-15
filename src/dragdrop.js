class dragdrop {
  constructor(index) {
    this.index = index;
  }

  drag(i) {
    draggedIndex = i;
  }

  dragover(element) {
    element.preventDefault();
  }

  drop(i) {
    const list = localStorageConst.retrievelist();
    const tempChange = list[this.draggedIndex];
    list[this.draggedIndex] = list[i];
    list[i] = tempChange;
    localStorageConst.saveList(list);
  }

  dragstart(element) {

  }
}