<script lang="ts">
  import { slide } from "svelte/transition";
  import type { Todo, Mode } from "../types";
  import TodoPreview from "./TodoPreview.svelte";

  import { todos } from "../store";
  import TodoEdit from "./TodoEdit.svelte";

  export let todo: Todo;
  let mode: Mode = "preview";

  const toggle = () => {
    todos.toggleTodo(todo.id);
  };

  const remove = () => {
    todos.removeTodo(todo.id);
  };

  const updateTitle = (newTitle: string) => {
    todos.updateTitle(todo.id, newTitle);
    mode = "preview";
  };
</script>

<div transition:slide|local class="card" class:bg-light={todo.completed}>
  <div class="card-body d-flex justify-content-between align-items-center">
    <div class="flex-grow-1 d-flex align-items-center gap-2">
      <input class="form-check-input" type="checkbox" checked={todo.completed} on:change={toggle} />
      {#if mode === "edit"}
        <TodoEdit title={todo.title} on:submit={(e) => updateTitle(e.detail)} />
      {:else}
        <TodoPreview {todo} on:dblclick={() => (mode = "edit")} />
      {/if}
    </div>
    {#if mode === "preview"}
      <button type="button" class="btn-close" aria-label="Close" on:click={remove} />
    {/if}
  </div>
</div>
