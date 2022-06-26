import { writable, derived } from "svelte/store";
import { v4 as uuid } from "uuid";

import type { Todo, Filter } from "src/types";

const createTodoStore = (initial: Todo[]) => {
  const { subscribe, update } = writable(initial);

  const addTodo = (title: string) => {
    update((todos) => [{ id: uuid(), title, completed: false }, ...todos]);
  };

  const removeTodo = (id: string) => {
    update((todos) => todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id: string) => {
    update((todos) =>
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  };

  const updateTitle = (id: string, title: string) => {
    update((todos) =>
      todos.map((todo) => {
        if (todo.id === id) todo.title = title;
        return todo;
      })
    );
  };

  const clearCompleted = () => {
    update((todos) => todos.filter((t) => !t.completed));
  };

  return {
    subscribe,
    addTodo,
    removeTodo,
    toggleTodo,
    updateTitle,
    clearCompleted,
  };
};

const initial = JSON.parse(localStorage.getItem("todos")) ?? [];
export const todos = createTodoStore(initial);
todos.subscribe((values) => localStorage.setItem("todos", JSON.stringify(values)));

export const filter = writable<Filter>("all");

export const remainingCount = derived(todos, ($todos) => $todos.filter((t) => !t.completed).length);
export const completedTodos = derived(todos, ($todos) => $todos.filter((t) => t.completed));
export const activeTodos = derived(todos, ($todos) => $todos.filter((t) => !t.completed));
