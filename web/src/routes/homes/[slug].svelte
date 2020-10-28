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
    class="hero-image w-full bg-cover bg-center"
    style="background-image: url({urlFor(listing.mainImage)})"
    alt={listing.address} />
<div class="w-full py-3">
  <h1 class="text-xl">{listing.address}</h1>
  <h3 class="text-md text-gray-darker">{listing.city}</h3>
</div>
<div
  class="flex w-full text-center py-4 px-2 mb-2 rounded-sm justify-start flex-row">
  <div class="w-1/3">
    <h4>${listing.price}</h4>
  </div>
  <div class="w-1/3">
    <p>{listing.beds}bed {listing.baths}bath</p>
  </div>
  <div class="w-1/3">
    <h4>{listing.dateAdded}</h4>
  </div>
</div>
<div class="w-full mx-auto">
  <span class="text-lg font-semibold">Highlights</span>
  <BlockContent blocks={listing.excerpt} />
</div>
<div class="w-full mt-2 mx-auto">
  <span class="text-lg font-semibold">Description</span>
  <BlockContent blocks={listing.body} />
</div>
<div class="w-full mt-2 mx-auto">
  <span class="text-lg font-semibold">Listing Agent</span>
 <ul>
<li>John Wernecke</li>
<li>info@forsalenotboring.com</li>
<li>410-991-9814</li>
 </ul> 
</div>
  {#each images as galleryImg}
    <div class="my-3 mx-auto"><img class="mx-auto w-11/12" src={urlFor(galleryImg)} alt="alt" /></div>
  {/each}
</div>
