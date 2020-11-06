<script context="module">
    export async function preload({ params }) {
        try {
               const res = await this.fetch(`api/homes/${params.slug}`);
                      const { listing } = await res.json();
                             return { listing };
                                  
        } catch (err) {
               this.error(500, err);
                    
        }
           };
</script>

<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../../components/serializers";
  import urlBuilder from "@sanity/image-url";
  import client from "../../sanityClient";
  const urlFor = (source) => urlBuilder(client).image(source);
  export let listing;
  export let images = listing.imageGallery;
  export let price = listing.price;
        function priceFormat(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          };
  export let formattedPrice = priceFormat(price);

</script>

<style>
  .hero-image {
    height: 70vh;
  }
  @media only screen and (max-width: 600px) {
    .hero-image {
          height: 270px;
    }
    
  }

</style>


<svelte:head>
  <title>{listing.address} | FSNB</title>
</svelte:head>
<div class="container mx-auto">
  <div
    class="hero-image w-full mx-auto bg-cover bg-center rounded"
    style="background-image: url({urlFor(listing.mainImage)})"
    alt={listing.address} />
<div class="mx-auto w-full mt-3">
  <div class="flex w-full justify-between">
    <div class="md-w-1/2">
  <h1 class="text-xl md:text-3xl font-semibold">{listing.address}</h1>
  <h3 class="text-md md:text-2xl text-gray-darker">{listing.city} {#if typeof listing.neighborhood !== 'undefined'}| {listing.neighborhood}{/if}</h3>
    </div>
    <div>
      {#if listing.active}
      <div class="bg-success rounded-lg px-2 py-1 md:px-3 md:py-2">
   <span class="tracking-wide font-semibold md:text-right text-sm md:text-md text-black uppercase">Active</span>
      </div>
      {:else}
      <div class="bg-danger rounded-lg px-2 py-1 md:px-3 md:py-2">
   <span class="tracking-wide font-semibold md:text-right text-sm md:text-md text-black uppercase">Inactive</span>
      </div>
      {/if}
    </div>
  </div>
</div>
<div class="flex w-full py-4 mb-2 justify-start flex-row">
  <div class="flex flex-col text-center justify-center w-1/4 md:text-2xl sm:w-1/2">
    <span class="w-full"><strong>${formattedPrice}</strong></span>
    <span class="w-full">price</span>
  </div>
  <div class="flex flex-col text-center justify-center w-1/4 md:text-2xl sm:w-1/2">
    <span class="w-full"><strong>{listing.beds}</strong></span>
    <span class="w-full">beds</span>
  </div>
  <div class="flex flex-col text-center justify-center w-1/4 md:text-2xl sm:w-1/2">
    <span class="w-full"><strong>{listing.baths}</strong></span>
    <span class="w-full">baths</span>
  </div>
  <div class="flex flex-col text-center justify-center w-1/4 md:text-2xl sm:w-1/2">
    {#if typeof listing.sqft !== 'undefined'}
    <span class="w-full"><strong>{listing.sqft}</strong></span>
    {:else}
    <span class="w-full"><strong>-</strong></span>
    {/if}
    <span class="w-full">sqft.</span>
  </div>
</div>
<div class="w-full mx-auto">
  <span class="text-xl md:text-2xl font-semibold">Highlights</span>
  <div class="md:text-lg">
  <BlockContent blocks={listing.excerpt} />
  </div>
</div>
<div class="w-full mt-3 ">
  <span class="text-xl md:text-2xl font-semibold">Condensed Description</span>
  <div class="md:text-xl">
  <BlockContent blocks={listing.body} />
  </div>
</div>
{#if typeof listing.agentName !== 'undefined'}
<div class="w-full mt-3 mb-2 mx-auto">
  <span class="text-xl md:text-2xl font-semibold">Listing Agent</span>
 <ul>
   <li>{listing.agentName}</li>
    {#if typeof listing.agentNumber !== 'undefined'}
   <li>{listing.agentNumber}</li>
    {/if}
    {#if typeof listing.agentEmail !== 'undefined'}
   <li>{listing.agentEmail}</li>
    {/if}
 </ul> 
</div>
{/if}
  <span class="text-xl md:text-2xl font-semibold">Selected Photos</span>
    {#each images as galleryImg}
          <div class="my-3 mx-auto"><img class="mx-auto rounded" src={urlFor(galleryImg)} alt="alt" /></div>
            {/each}
</div>
