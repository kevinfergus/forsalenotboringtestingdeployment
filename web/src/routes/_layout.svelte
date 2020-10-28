<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte'
</script>

<style>
	main {
		position: relative;
		max-width: 65em;
		padding: .5em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav/>

<main> 
	<slot></slot>
</main>

<Footer/>
