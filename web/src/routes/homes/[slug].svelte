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
</style>

<svelte:head>
  <title>{listing.address}</title>
</svelte:head>
<div class="container mx-auto">
<div class="w-full">
    <img class="w-full" src={urlFor(listing.mainImage)}  alt="The alt" />
    </div>
    <div class="w-full py-3">
      <h1 class="text-center font-semibold text-xl">{listing.address}</h1>
    </div>
    <div class="flex w-full justify-between flex-row text-center">
    <div class="w-1/3">
      <p>{listing.beds}bd {listing.baths}ba</p>
    </div>
    <div class="w-1/3">
      <h4>${listing.price}</h4>
</div>
<div class="w-1/3">
  <h4>{listing.city}</h4>
</div>
    </div>
</div>
        <div class="col">
      <h3>Highlights</h3>
    <BlockContent blocks={listing.excerpt} />
    <h3>Description</h3>
    <BlockContent blocks={listing.body} />
    <h3>Listing Agent</h3>
    <h4>John Wernecke</h4>
    <p>info@forsalenotboring.com</p>
    <p>410-991-9814</p>
    {#each images as galleryImg}
      <div class="galleryImg">
      <img src={urlFor(galleryImg)} alt="alt">
      </div>
    {/each}
    </div>
