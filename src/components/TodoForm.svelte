<script lang="ts">
  import { todos } from "../store";

  let title = "";

  const handleSubmit = () => {
    if (title === "") return;

    todos.addTodo(title);
    title = "";
  };
</script>

<form class="d-flex gap-2" on:submit|preventDefault={handleSubmit}>
  <input bind:value={title} type="text" class="form-control" placeholder="What needs to be done?" required />
  <button type="submit" class="btn btn-primary">
    <i class="bi bi-plus-lg" />
  </button>
</form>
