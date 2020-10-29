<script context="module">
  import client from "../../sanityClient";
  import urlBuilder from "@sanity/image-url";
  import BlockContent from "@movingbrands/svelte-portable-text";
  const urlFor = (source) => urlBuilder(client).image(source);
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params;
    const filter = '*[_type == "listing" && slug.current == $slug][0]';
    const projection = `{
      ...,
      mainImage{
        ...,
        asset->
      },
      body[]{
        ...,
      }
    }`;
    const query = filter + projection;
    const listing = await client
      .fetch(query, { slug })
      .catch((err) => this.error(500, err));
    return { listing };
  }
</script>

<script>
  export let listing;
  export let images = listing.imageGallery;
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
  <title>{listing.address}</title>
</svelte:head>
<div class="container mx-auto">
  <div
    class="hero-image w-full mx-auto bg-cover bg-center rounded"
    style="background-image: url({urlFor(listing.mainImage)})"
    alt={listing.address} />
<div class="w-full md:w-11/12 mt-3">
  <div class="flex w-full justify-between">
    <div class="md-w-1/2">
  <h1 class="text-xl md:text-3xl font-semibold">{listing.address}</h1>
  <h3 class="text-md md:text-2xl text-gray-darker">{listing.city}</h3>
    </div>
    <div>
      <div class="bg-success rounded-lg px-2 py-1 md:px-3 md:py-2">
   <span class="tracking-wide font-medium md:text-right text-sm md:text-md text-black uppercase">Active</span>
      </div>
    </div>
  </div>
</div>
<div class="flex w-full py-4 mb-2 justify-start flex-row">
  <div class="flex flex-col text-center justify-center w-1/4 md:text-2xl sm:w-1/2">
    <span class="w-full"><strong>${listing.price}</strong></span>
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
  <span class="text-lg font-semibold">Highlights</span>
  <BlockContent blocks={listing.excerpt} />
</div>
<div class="w-full mt-3 mx-auto">
  <span class="text-lg font-semibold">Condensed Description</span>
  <BlockContent blocks={listing.body} />
</div>
<div class="w-full mt-3 mb-2 mx-auto">
  <span class="text-lg font-semibold">Listing Agent</span>
 <ul>
<li>John Wernecke</li>
<li>info@forsalenotboring.com</li>
<li>410-991-9814</li>
 </ul> 
</div>
  <span class="text-lg font-semibold">Best Photos</span>
  {#each images as galleryImg}
    <div class="my-3 mx-auto"><img class="mx-auto rounded md:w-11/12" src={urlFor(galleryImg)} alt="alt" /></div>
  {/each}
</div>
