<script lang="ts">
  export let text: string;
  export let active: boolean;
</script>

<small class="btn-filter text-muted" class:fw-bold={active} on:click>
  {text}
</small>
