import localStorageConst from "./localstorage";

const completedStatus = {
    changeStatus:(index) => {
        let list = localStorageConst.retrievelist();
        let item = list[index];
        if (item.completed === true) {
            item['completed'] = false;
        } else {
            item['completed'] = true;
        }
        list[index] = item;
        localStorageConst.saveList(list, true);
    }
}

export default completedStatus;