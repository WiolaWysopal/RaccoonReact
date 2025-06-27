import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [];
  filter = "all";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(text) {
    this.todos.push({ id: Date.now(), text, done: false });
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleTodo(id) {
    const todoVariable = this.todos.find((todo) => todo.id === id);
    if (todoVariable) {
      todoVariable.done = !todoVariable.done;
    }
  }

  setFilter(filter) {
    this.filter = filter;
  }

  get filteredTodos() {
    if (this.filter === "done") return this.todos.filter((todo) => todo.done);
    if (this.filter === "pending")
      return this.todos.filter((todo) => !todo.done);
    return this.todos;
  }
}

const todoStore = new TodoStore();
export default todoStore;
