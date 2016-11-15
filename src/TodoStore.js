class TodoStore {
    todos = [];
    get completedTodosCount() {
        return this.todos.filter(todo => todo.completed === 1).length;
    }

    report() {
        if(this.todos.length === 0) {
            return '<none>';
        }

        return `first todo's task is ${this.todos[0].task}. Progress ${this.completedTodosCount}/${this.todos.length}`;
    }

    add(task) {
        const cfg = {
            completed: false,
            assignee: null
        };

        this.todos.push({ ...cfg, task });
    }
}

window.TodoStore = TodoStore;