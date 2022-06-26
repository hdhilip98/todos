<script lang="ts">
  import type { Todo, Mode } from "../types";
  import TodoPreview from "./TodoPreview.svelte";
  import { todos } from "../stores/todos";

  export let todo: Todo;
  let mode: Mode = "preview";

  const toggle = () => {
    todos.toggleTodo(todo.id);
  };

  const remove = () => {
    todos.removeTodo(todo.id);
  };
</script>

<div class="card" class:bg-light={todo.completed}>
  <div class="card-body d-flex justify-content-between align-items-center">
    <div class="flex-grow-1 d-flex align-items-center gap-2">
      <input class="form-check-input" type="checkbox" checked={todo.completed} on:change={toggle} />
      {#if mode === "edit"}
        <input type="text" class="form-control form-control-sm" bind:value={todo.title} />
      {:else}
        <TodoPreview {todo} on:dblclick={() => (mode = "edit")} />
      {/if}
    </div>
    <button type="button" class="btn-close" aria-label="Close" on:click={remove} />
  </div>
</div>
