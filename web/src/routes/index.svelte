<script context="module">
  import client from "../sanityClient";
  import urlBuilder from "@sanity/image-url";
  import Card from "../components/Card.svelte";
  import HomepageCard from "../components/HomepageCard.svelte";
  import Image from "svelte-image";
  import Carousel from "@beyonk/svelte-carousel";
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
    (listing) => listing.homepageFeatured === true
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
<div class="row mt-3 mb-0">
  <div class="flex px-3 items-baseline justify-between">
  <span class="font-semibold text-lg">
    Today
  </span>
  <a href="/homes">
    <span class="text-sm">
      View All
    </span>
  </a>
  </div>
    {#each filteredList as listing}
      <a href="homes/{listing.slug.current}">
          <HomepageCard data={listing} />
      </a>
    {/each}
</div>
