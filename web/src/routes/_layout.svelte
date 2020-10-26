<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 65em;
		padding: 2em;
		margin: 2em auto 0;
		box-sizing: border-box;
	}
</style>

<Nav/>

<main> 
	<slot></slot>
</main>
