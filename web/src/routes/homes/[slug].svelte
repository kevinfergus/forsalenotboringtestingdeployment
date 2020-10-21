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
</script>

<style>
  .content {
    max-width: 960px;
    margin: 0 auto;
  }
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
    <div class="col-6">
      <h3>{listing.address}</h3>
    </div>
    <div class="col-6">
      <h4>${listing.price}</h4>
    </div>
  </div>
  <div class="row">
    <div class="col-8">
    <img src={urlFor(listing.mainImage)}  alt="The alt" />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h3>Highlights</h3>
    <BlockContent blocks={listing.excerpt} />
    <h3>Description</h3>
    <BlockContent blocks={listing.body} />
    <h3>Listing Agent</h3>
    <h4>John Wernecke</h4>
    <p>info@forsalenotboring.com</p>
    <p>410-991-9814</p>
    </div>
  </div>
</div>
