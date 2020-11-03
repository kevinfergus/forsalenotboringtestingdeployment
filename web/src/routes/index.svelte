<script context="module">
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
  $: addedToday = listings.filter((listing) => listing.dateAdded === today);
  $: addedYesterday = listings.filter(
    (listing) => listing.dateAdded === yesterday
  );
  // export let notFeatured = listings.filter(
  //   (listing) => listing.homepageFeatured === false
  // );
</script>

<style>
</style>

<svelte:head>
  <title>Homes</title>
</svelte:head>
<div class="row">
  <div class="card text-center py-2 shadow border-2 rounded border-black">
    <p class="font-semibold text-black">
      First time here?
      <a class="text-secondary font-semibold" href="/about">Learn More</a>
    </p>
  </div>
</div>
<div class="row mt-3 mb-0">
  {#if addedToday.length > 0}
    <div class="flex px-3 items-baseline justify-between">
      <span class="font-semibold text-lg"> Today </span>
      <a href="/homes/"> <span class="text-sm"> View All </span> </a>
    </div>
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        {#each addedToday as listing}
          <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <a rel="prefetch" href="homes/{listing.slug.current}/">
              <HomepageCard data={listing} />
            </a>
          </div>
        {/each}
      </div>
    </div>
  {/if}
  <div class="flex mt-1 px-3 items-baseline justify-between">
    <span class="font-semibold text-lg"> Yesterday </span>
    <a href="/homes/"> <span class="text-sm"> View All </span> </a>
  </div>
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      {#each addedYesterday as listing}
        <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <a rel="prefetch" href="homes/{listing.slug.current}/">
            <HomepageCard data={listing} />
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>
