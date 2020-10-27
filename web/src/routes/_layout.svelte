<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 65em;
		padding: 1em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav/>

<main> 
	<slot></slot>
</main>
