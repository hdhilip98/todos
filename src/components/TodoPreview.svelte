<script lang="ts">
  import type { Todo } from "../types";
  export let todo: Todo;
</script>

<div class="flex-grow-1" class:completed={todo.completed} on:dblclick>
  {todo.title}
</div>
