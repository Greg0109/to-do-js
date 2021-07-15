const localStorageConst = {
  initialStorageData: () => JSON.parse(localStorage.getItem('todolist')) || [
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
  ],

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