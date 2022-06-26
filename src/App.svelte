<script lang="ts">
  import TodoControls from "./components/TodoControls.svelte";
  import TodoForm from "./components/TodoForm.svelte";
  import TodoList from "./components/TodoList.svelte";
</script>

<div class="p-4 app">
  <h2 class="display-2 text-center">todos</h2>
  <div class="d-flex flex-column gap-3">
    <TodoForm />
    <TodoControls />
    <TodoList />
  </div>
</div>
