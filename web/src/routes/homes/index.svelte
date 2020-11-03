<script context="module">
  import { onMount } from 'svelte';
  import { slide  } from 'svelte/transition';
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
  let minPrices = [
  {id: "Min Price", value: 0}, 
  {id: "$100k", value: 100000},
  {id: "$200k", value: 200000},
  {id: "$300k", value: 300000},
  {id: "$400k", value: 400000},
  {id: "$500k", value: 500000},
  {id: "$600k", value: 600000},
  {id: "$700k", value: 700000},
  {id: "$800k", value: 800000},
  {id: "$900k", value: 900000},
  {id: "$1m", value: 1000000},
  ]
  let maxPrices = [
  {id: "Max Price", value: 0}, 
  {id: "$100k", value: 100000},
  {id: "$200k", value: 200000},
  {id: "$300k", value: 300000},
  {id: "$400k", value: 400000},
  {id: "$500k", value: 500000},
  {id: "$600k", value: 600000},
  {id: "$700k", value: 700000},
  {id: "$800k", value: 800000},
  {id: "$900k", value: 900000},
  {id: "$1m", value: 1000000},
  {id: "Max Price", value: 2000000},
  ];
function safariWorkaround(node) {
    if(navigator.appVersion.includes('Safari')) {
          node.style.overflow = 'hidden';
              
    }
}
</script>

<script>
  import { minPrice } from '../../stores.js';
  import { maxPrice } from '../../stores.js';
  export let listings;
  let showFilterBox = false;
  function toggleFilterBox() {
      showFilterBox = !showFilterBox;
      }
  let filteredListings = [];
  onMount(() => {
        filteredListings = listings.filter(listing => listing.price <= $maxPrice && listing.price >= $minPrice);
      })
  $: listingCount = filteredListings.length;
  function updatePrice() {
filteredListings = listings.filter(listing => listing.price <= $maxPrice && listing.price >= $minPrice);
    showFilterBox = !showFilterBox;
      }
function resetPrice() {
  maxPrice.set(2000000);
  minPrice.set(0);
    filteredListings = listings;
    showFilterBox = !showFilterBox;
      }

</script>

<style>
</style>

<svelte:head>
  <title>Homes</title>
</svelte:head>
<div class="row mt-3 mb-0">
  <div class="px-3 font-bold text-xl">
    <h1>All Listings</h1>
  </div>
  <div class="flex px-3 items-baseline justify-between">
    <span class="font-semibold text-lg"> Showing {listingCount} Homes </span>
    <button class="bg-secondary text-white text-sm md:text-md uppercase py-1 px-2 border border-secondary rounded" on:click={toggleFilterBox}>Filters</button>
    </div>
    {#if showFilterBox}
    <div transition:slide use:safariWorkaround class="bg-primary px-2 py-1">
      <select class="block mb-2 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" bind:value={$minPrice}>
        {#each minPrices as p}
                <option value={p.value}>
                {p.id}
                              </option>
                                  {/each}
                                    </select>
 <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" bind:value={$maxPrice}>
        {#each maxPrices as p}
                <option value={p.value}>
                {p.id}
                              </option>
                                  {/each}
                                    </select>
                                    <div>
                                    <button on:click={updatePrice} class="bg-secondary text-white text-sm md:text-md uppercase py-1 px-2 mt-2 border border-secondary rounded">Apply</button>

                                    <button on:click={resetPrice} class="bg-secondary text-white text-sm md:text-md uppercase py-1 px-2 mt-2 border border-secondary rounded">Reset</button>
                                    </div>

    </div>
    {/if}
  </div>

  <div class="container mx-auto">
    <div class="flex flex-wrap">
      {#each filteredListings as listing}
        <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <a rel="prefetch" href="homes/{listing.slug.current}/">
            <HomepageCard data={listing} />
          </a>
        </div>
      {/each}
    </div>
</div>
