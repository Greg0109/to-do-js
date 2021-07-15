import localStorageConst from './localstorage';

const addremove = {
  add: (title) => {
    const list = localStorageConst.retrievelist();
    const newItem = {};
    newItem.description = title;
    newItem.completed = false;
    newItem.index = list.length + 2;
    list.push(newItem);
    localStorageConst.saveList(list);
  },
  remove: () => {
    const list = localStorageConst.retrievelist();
    for (let i = 0; i < list.length; i += 1) {
      const item = list[i];
      if (item.completed === true) {
        list.splice(i, 1);
      }
    }
    localStorageConst.saveList(list);
  },
};

export default addremove;