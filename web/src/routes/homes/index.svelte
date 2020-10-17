<script context="module">
  import client from "../../sanityClient";
  import Listings from '../../components/Listings.svelte';
  import urlBuilder from "@sanity/image-url";
  const urlFor = source => urlBuilder(client).image(source)
  export function preload({ params, query }) {
    return client
      .fetch(
        '*[_type == "listing" && defined(slug.current) && publishedAt < now()]'
      )
      .then((listings) => {
        return { listings };
      })
      .catch((err) => this.error(500, err));
  }
</script>

<script>
  export let listings;

  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
</script>

<style>

</style>

<svelte:head>
  <title>Homes</title>
</svelte:head>

<h1>All Homes</h1>
<Listings listings={listings}/>