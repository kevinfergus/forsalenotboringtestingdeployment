<script context="module">
  import client from "../sanityClient";
  import urlBuilder from "@sanity/image-url";
  import HomepageCard from "../components/HomepageCard.svelte";
  const urlFor = (source) => urlBuilder(client).image(source);
  export function preload() {
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
  let today = new Date();
  let yesterday = new Date();
  const td = String(today.getDate()).padStart(2, "0");
  const yd = String(today.getDate()-1).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + td;
  yesterday = yyyy + "-" + mm + "-" + yd;

  console.log(today);
  export let addedToday = listings.filter(
    (listing) => listing.dateAdded === today
  );
  export let addedYesterday = listings.filter(
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
