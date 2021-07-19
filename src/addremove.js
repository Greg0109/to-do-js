import localStorageConst from './localstorage';

const addremove = {
  add: (title) => {
    const list = localStorageConst.retrievelist();
    const newItem = {};
    newItem.description = title;
    newItem.completed = false;
    newItem.index = list.length;
    list.push(newItem);
    localStorageConst.saveList(list, true);
  },

  remove: (index) => {
    const list = localStorageConst.retrievelist();
    list.splice(index, 1);
    localStorageConst.saveList(list, true);
  },

  edit: (title, index) => {
    const list = localStorageConst.retrievelist();
    const item = list[index];
    item.description = title;
    list[index] = item;
    localStorageConst.saveList(list, true);
  },

  removeCompleted: () => {
    const list = localStorageConst.retrievelist();
    for (let i = 0; i < list.length; i += 1) {
      const item = list[i];
      if (item.completed === true) {
        list.splice(i, 1);
        i -= 1;
      }
    }
    localStorageConst.saveList(list, true);
  },
};

export default addremove;