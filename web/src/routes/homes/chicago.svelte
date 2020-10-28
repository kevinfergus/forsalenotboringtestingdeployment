<script context="module">
  import client from "../../sanityClient";
  import urlBuilder from "@sanity/image-url";
  import HomepageCard from "../../components/HomepageCard.svelte";
  const urlFor = (source) => urlBuilder(client).image(source);
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
  $: filteredList = listings.filter(
    (listing) => listing.city == 'Chicago' 
  );
</script>

<style>
</style>

<svelte:head>
  <title>Homes</title>
</svelte:head>
<div class="row">
  <div class="col">
    <div class="card text-center py-2 shadow border rounded border-black">
      <p class="text-black">
        New to FSNB?
        <a class="text-secondary" href="/about">Learn More</a>
      </p>
    </div>
  </div>
</div>
<div class="row">
    {#each filteredList as listing}
      <a href="homes/{listing.slug.current}">
          <HomepageCard data={listing} />
      </a>
    {/each}
</div>
