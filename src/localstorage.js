const localStorageConst = {
  initialStorageData: () => JSON.parse(localStorage.getItem('todolist')) || [],

  retrievelist: () => {
    const list = JSON.parse(localStorage.getItem('todolist')) || localStorageConst.initialStorageData();
    localStorageConst.saveList(list, false);
    return list;
  },

  saveList: (changes, reload) => {
    localStorage.setItem('todolist', JSON.stringify(changes));
    if (reload) {
      window.location.reload();
    }
  },
};

export default localStorageConst;