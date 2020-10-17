<script>
    import Card from './Card.svelte';
    export let listings;
</script>

<div>
    {#each listings as listing}
        <Card data={ listing } />
    {/each}
</div>