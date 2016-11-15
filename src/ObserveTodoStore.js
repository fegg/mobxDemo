import mobx, { observable, computed } from 'mobx';

class ObserveTodoStore {
    @observable todos = [];
    @observable pendingRequests = 0;

    constructor() {
        mobx.autorun(() => console.log(this.report));
    }

    @computed get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    @computed get report() {
        if (this.todos.length === 0) {
            return "<none>";
        }

        return `first todo's task name is: "${this.todos[0].task}". Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }

    add(task) {
        const cfg = {
            completed: false,
            assignee: null
        };

        this.todos.push({ ...cfg, task });
    }
}

window.ObserveTodoStore = ObserveTodoStore;