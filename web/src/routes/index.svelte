<script context="module">
  import client from "../sanityClient";
  import urlBuilder from "@sanity/image-url";
  import Card from "../components/Card.svelte";
  import HomepageCard from "../components/HomepageCard.svelte";
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
    background-color: #e53e3eab;
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

  .menu-list li {
    display: inline-block;
    color: black;
    border-top: 1px solid #A7A7A7;
    border-bottom: 1px solid #A7A7A7;
    padding: 8px;
  }
  .menu-list li:first-of-type {
    border-bottom: none;
  }
  .menu-list li:last-of-type {
    border-top: none;
  }
  .menu-list a {
    text-decoration: none;
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
    <div class="card text-center py-2 shadow border rounded border-black">
      <p class="text-black">
        New to FSNB?
        <a class="text-secondary" href="/about">Learn More</a>
      </p>
    </div>
  </div>
</div>
<div class="row">
    {#each filteredList as listing}
      <a href="homes/{listing.slug.current}">
          <HomepageCard data={listing} />
      </a>
    {/each}
</div>
