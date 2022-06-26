<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import clickOutside from "../utils/clickOutside";

  const dispatch = createEventDispatcher();

  export let title: string;
  let input: HTMLInputElement;

  onMount(() => input.focus());

  const handleSubmit = () => {
    if (input.value === "") return input.focus();
    dispatch("submit", input.value);
  };
</script>

<input
  bind:this={input}
  type="text"
  class="form-control form-control-sm"
  value={title}
  on:keydown={(e) => ["Enter", "Escape"].includes(e.key) && handleSubmit()}
  use:clickOutside
  on:outclick={handleSubmit}
/>
