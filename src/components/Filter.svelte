<script lang="ts">
  import FilterButton from "./FilterButton.svelte";

  export let options: { text: string; value: string }[];
  export let defaultIndex: number;
  export let value = options[defaultIndex].value;
</script>

<div class="d-flex gap-2">
  {#each options as option}
    <FilterButton text={option.text} active={option.value === value} on:click={() => (value = option.value)} />
  {/each}
</div>
