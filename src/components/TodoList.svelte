<script lang="ts">
  import TodoCard from "./TodoCard.svelte";
  import { filter, todos, activeTodos, completedTodos } from "../store";
</script>

<div class="d-flex flex-column gap-2">
  {#if $filter === "completed"}
    {#each $completedTodos as todo (todo.id)}
      <TodoCard {todo} />
    {/each}
  {:else if $filter === "active"}
    {#each $activeTodos as todo (todo.id)}
      <TodoCard {todo} />
    {/each}
  {:else}
    {#each $todos as todo (todo.id)}
      <TodoCard {todo} />
    {/each}
  {/if}
</div>
