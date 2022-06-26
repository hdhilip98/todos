<script lang="ts">
  import TodoControls from "./components/TodoControls.svelte";
  import TodoForm from "./components/TodoForm.svelte";
  import TodoList from "./components/TodoList.svelte";
  import { todos } from "./stores/todos";

  $: localStorage.setItem("todos", JSON.stringify($todos));
</script>

<div class="p-4 d-flex flex-column align-items-center gap-3">
  <h2 class="display-2">todos</h2>
  <div class="w-25 d-flex flex-column gap-3">
    <TodoForm />
    <TodoControls />
    <TodoList />
  </div>
</div>
