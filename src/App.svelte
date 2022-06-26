<script lang="ts">
  import TodoControls from "./components/TodoControls.svelte";
  import TodoForm from "./components/TodoForm.svelte";
  import TodoList from "./components/TodoList.svelte";
  import { todos } from "./store";
</script>

<div class="p-4 app">
  <h2 class="display-2 text-center">todos</h2>
  <div class="mt-4 d-flex flex-column gap-4">
    <TodoForm />
    {#if $todos.length > 0}
      <TodoControls />
      <TodoList />
      <small class="d-block text-muted text-center">Double-click to edit a todo</small>
    {/if}
  </div>
</div>

<small class="footer m-0 text-muted">Built with Svelte and Bootstrap</small>
