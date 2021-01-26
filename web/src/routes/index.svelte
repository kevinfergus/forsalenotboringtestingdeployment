<script context="module">
  // import { fade } from "svelte/transition";
  import client from "../sanityClient";
  import urlBuilder from "@sanity/image-url";
  import HomepageCard from "../components/HomepageCard.svelte";
  const urlFor = (source) => urlBuilder(client).image(source);
  export async function preload({ params }) {
    try {
      const res = await this.fetch("api/homes/all");
      const { listings } = await res.json();
      return { listings };
    } catch (err) {
      this.error(500, err);
    }
  }
</script>

<script>
  export let listings;
  let today = new Date();
  let yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const td = String(today.getDate()).padStart(2, "0");
  const yd = String(yesterday.getDate()).padStart(2, "0");
  const tm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const ym = String(yesterday.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  today = yyyy + "-" + tm + "-" + td;
  yesterday = yyyy + "-" + ym + "-" + yd;

  console.log(today);
  $: activeListings = listings.filter((listing) => listing.active === true);
  $: addedToday = activeListings.filter(
    (listing) => listing.dateAdded === today
  );
  $: addedYesterday = activeListings.filter(
    (listing) => listing.dateAdded === yesterday
  );
  $: recentListings = activeListings.slice(0, 9);
</script>

<svelte:head>
  <title>For Sale Not Boring | Curated Real Estate Listings</title>
  <meta
    name="description"
    content="For Sale Not Boring is the fastest way to find a cool home in Chicago and Columbus."
  />
</svelte:head>
<div class="row">
  <div
    class="card text-center py-2 lg:mx-3 shadow border-1 rounded border-black bg-gray-lightest"
  >
    <p class="font-semibold text-black">
      First time here?
      <a class="hover:text-opacity-75 text-secondary font-semibold" href="/about">Learn More</a>
    </p>
  </div>
</div>
<div class="row mt-3 mb-0">
  {#if addedToday.length < 1 || addedYesterday.length < 1}
    <div class="flex mt-1 items-baseline justify-between lg:px-3">
      <span class="font-semibold text-xl"> Recently Added </span>
      <a class="hover:text-opacity-75 text-secondary" href="/homes/"> <span class="p-2 font-semibold text-sm lg:text-base"> View All </span> </a>
    </div>
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-between">
        {#each recentListings as listing}
          <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:w-1/3 lg:px-3">
            <a sapper:prefetch href="homes/{listing.slug.current}/">
              <HomepageCard data={listing} />
            </a>
          </div>
        {/each}
      </div>
    </div>
  {:else}
    <div class="flex mt-1 items-baseline justify-between lg:px-3">
      <span class="font-semibold text-lg"> Today </span>
      <a class="hover:text-opacity-75 text-secondary" href="/homes/"> <span class="p-2 font-semibold text-sm lg:text-base"> View All </span> </a>
    </div>
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-between">
        {#each addedToday as listing}
          <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:w-1/3 lg:px-3">
            <a sapper:prefetch href="homes/{listing.slug.current}/">
              <HomepageCard data={listing} />
            </a>
          </div>
        {/each}
      </div>
    </div>
    <div class="flex mt-1 items-baseline justify-between lg:px-3">
      <span class="font-semibold text-lg"> Yesterday </span>
      <a class="hover:text-opacity-75 text-black" href="/homes/"> <span class="p-2 font-semibold text-sm lg:text-base"> View All </span> </a>
    </div>
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-between">
        {#each addedYesterday as listing}
          <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:w-1/3 lg:px-3">
            <a sapper:prefetch href="homes/{listing.slug.current}/">
              <HomepageCard data={listing} />
            </a>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
<div class="hidden">
  {#each listings as listing}<a href="homes/{listing.slug.current}/" />{/each}
  <a href="/homes/chicago" />
  <a href="/homes/columbus" />
  <a href="/about" />
  <a href="/signup" />
  <a href="/newsletter" />
</div>
