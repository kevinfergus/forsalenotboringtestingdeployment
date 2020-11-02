<script>
  import { getContext  } from 'svelte'
    const minPrice = getContext('minPrice');
</script>
<div class="flex">
<input type=number bind:value={$minPrice} min=0 max=100000000>
</div>
