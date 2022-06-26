import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";

import type { Todo } from "src/types";

const createTodoStore = (initial: Todo[] = []) => {
  const { subscribe, set, update } = writable(initial);

  const addTodo = (title: string) => {
    update((todos) => [...todos, { id: uuid(), title, completed: false }]);
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

  return {
    subscribe,
    addTodo,
    removeTodo,
    toggleTodo,
  };
};

export const todos = createTodoStore();
