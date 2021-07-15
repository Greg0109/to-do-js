const initialStorageData = JSON.parse(localStorage.getItem('todolist')) || [
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

const localStorage = {
    retrievelist: () => {
        const list = JSON.parse(localStorage.getItem('todolist')) || [];
        return list;
    }

    saveList: (changes) => {
        const list = this.retrievelist();
        list.push(changes);
        localStorage.setItem("todolist", JSON.stringify(list));
    }
}

class dragdrop {
    constructor(index) {
        this.index = index;
    }
    drag (i) {
        draggedIndex = i;
    }

    dragover (element) {
        element.preventDefault();
    }
    
    drop (i) {

    }

    dragstart (element) {

    }
}