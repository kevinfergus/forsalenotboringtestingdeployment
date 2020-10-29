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
<div class="w-full mt-3">
  <h1 class="text-xl">{listing.address}</h1>
  <h3 class="text-md text-gray-darker">{listing.city}</h3>
   <h4>${listing.price}</h4>
</div>
<div
  class="flex w-full py-4 px-2 mb-2 justify-start flex-col sm:flex-row">
  <div class="w-full sm:w-1/2">
    <p><strong>{listing.beds}</strong> bed <strong>{listing.baths}</strong> bath</p>
  </div>
  <div class="w-full sm:w-1/2">
    <h4>{listing.dateAdded}</h4>
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
    <div class="my-3 mx-auto"><img class="mx-auto w-11/12" src={urlFor(galleryImg)} alt="alt" /></div>
  {/each}
</div>
