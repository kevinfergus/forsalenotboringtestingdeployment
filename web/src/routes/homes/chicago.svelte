<script context="module">
  import HomepageCard from "../../components/HomepageCard.svelte";

export async function preload({ params  }) {
       try {
                     const res = await this.fetch('api/homes/all');
                            const { listings } = await res.json()
                                   return { listings };
                                        
       } catch (err) {
             this.error(500, err);
                 
       }
         
  };
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
<div class="row mt-3 mb-0">
  <div class="flex px-3 items-baseline justify-between">
    <span class="font-semibold text-lg">Chicago</span>
    <a href="/homes/"> <span class="text-sm"> View All </span> </a>
  </div>
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      {#each filteredList as listing}
        <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <a rel="prefetch" href="homes/{listing.slug.current}/">
            <HomepageCard data={listing} />
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>

