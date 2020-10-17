<script context="module">
  import client from "../../sanityClient";
  import urlBuilder from "@sanity/image-url";
  import Image from "svelte-image";
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
</script>

<style>
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(img) {
    display: block;
    max-width: 100%;
  }

  .content :global(figure) {
    margin: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>{listing.address}</title>
</svelte:head>
<div class="content">
  <div class="row">
    <h1>{listing.address} | ${listing.price}</h1>
  </div>
  <div class="row">
    <Image src={urlFor(listing.mainImage)}  alt="The alt" />
  </div>
</div>