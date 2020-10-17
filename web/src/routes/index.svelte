<script context="module">
  import client from "../sanityClient";
  import urlBuilder from "@sanity/image-url";
  import Card from "../components/Card.svelte";
  import Image from "svelte-image";
  import Carousel from "@beyonk/svelte-carousel";
  const urlFor = (source) => urlBuilder(client).image(source);
  export function preload({ params, query }) {
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
  $: filteredList = listings.filter(
    (listing) => listing.homepageFeatured === true
  );
  export let notFeatured = listings.filter(
    (listing) => listing.homepageFeatured === false
  );
  export let mostRecent = notFeatured[0];
  export let hoverImageSrc = urlFor(mostRecent.mainImage);
  function updateHoverImg(src) {
    hoverImageSrc = src;
  }
</script>

<style>
  .hoverable:hover {
    background-color: yellow;
  }
  .text-secondary {
    color: #e53e3e;
  }
  .slide-content {
    max-height: 450px;
    width: 100%;
  }
  .menu-image-holder {
    float: right;
    margin-left: 25px;
    max-width: 45vw;
  }

  .menu-list {
    margin: 0;
    padding: 0;
    max-width: 50vw;
    list-style: none;
    padding-top: 20px;
  }

  .menu-list a {
    color: black;
    margin-bottom: 20px;
    text-decoration: none;
    display: inline-block;
  }

  .parent {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-content: center;
    justify-content: space-between;
    flex-direction: row;
  }
  .child {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
  }
</style>

<svelte:head>
  <title>Homes</title>
</svelte:head>
<div class="row">
  <div class="col">
    <div class="card text-center">
      <p>
        First time on FSNB?
        <a class="text-secondary" href="/about">Learn More</a>
      </p>
    </div>
  </div>
</div>
<div class="row">
  <Carousel perPage="1" autoplay="5500">
    {#each filteredList as listing}
      <a href="homes/{listing.slug.current}">
        <div class="slide-content">
          <Card data={listing} />
        </div></a>
    {/each}
  </Carousel>
</div>
<a href="/homes">
  <h3>Latest Homes</h3>
</a>
<div class="parent">
  <div class="child">
    <ul class="menu-list">
      {#each notFeatured as listing}
        <li class="hoverable">
          <a
            on:mouseover={() => updateHoverImg(urlFor(listing.mainImage))}
            href="/homes/{listing.slug.current}"
            data-src={urlFor(listing.mainImage)}>{listing.address} | ${listing.price}</a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="child menu-image-holder">
    <Image class="hoverImage" src={hoverImageSrc} alt="The alt" />
  </div>
</div>
