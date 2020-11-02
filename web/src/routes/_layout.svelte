<GoogleAnalytics {stores} id={ga_measurment_id}/>
<script context="module">
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
    import GoogleAnalytics from "sapper-google-analytics/GoogleAnalytics.svelte"
    import { stores } from "@sapper/app"
    let ga_measurment_id = "G-MLLNG9V13W"  // your analytics id
</script>

<style>
	main {
		position: relative;
		max-width: 65em;
		padding: .5em;
		box-sizing: border-box;
	}
</style>
<header class="w-full h-12 fixed sm:relative top-0 right-0 left-0 z-50">
<Nav/>
</header>
<main class="block mx-auto mt-12 sm:mt-0"> 
	<slot></slot>
</main>

<Footer/>
