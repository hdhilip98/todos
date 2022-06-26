<script lang="ts">
  import TodoCard from "./TodoCard.svelte";
  import { filter, todos, activeTodos, completedTodos } from "../stores/todos";
</script>

{#if $filter === "completed"}
  {#each $completedTodos as todo}
    <TodoCard {todo} />
  {/each}
{:else if $filter === "active"}
  {#each $activeTodos as todo}
    <TodoCard {todo} />
  {/each}
{:else}
  {#each $todos as todo}
    <TodoCard {todo} />
  {/each}
{/if}
