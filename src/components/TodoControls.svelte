<script lang="ts">
  import Filter from "./Filter.svelte";
  import { filter, remainingCount, completedTodos, todos } from "../stores/todos";

  let filters = [
    { text: "All", value: "all" },
    { text: "Active", value: "active" },
    { text: "Completed", value: "completed" },
  ];
</script>

<div class="d-flex justify-content-between align-items-center">
  <small class="text-muted">{$remainingCount} item(s) left</small>
  <Filter options={filters} defaultIndex={0} bind:value={$filter} />
  <small class="text-muted btn-clear" class:hidden={$completedTodos.length <= 0} on:click={todos.clearCompleted}
    >Clear completed</small
  >
</div>
