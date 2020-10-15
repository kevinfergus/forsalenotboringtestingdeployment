<script context="module">
  import client from "../sanityClient";
  import urlBuilder from "@sanity/image-url";
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

  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
  .slide-content {
	  max-height: 450px;
  }
</style>

<svelte:head>
  <title>Homes</title>
</svelte:head>
<div class="row">
  <div class="col">
    <div class="card text-center">
		<p>First time on FSNB? <a href=/about>Learn More</a></p>
    </div>
  </div>
</div>
<div class="row">
  <Carousel perPage="1" autoplay="5500">
	{#each listings as listing}
      <a href="listing/{listing.slug.current}">
        <div class="slide-content">
          <Image src="{urlFor(listing.mainImage)}" width=1000 alt="The alt" />
	  </a>
    {/each}
  </Carousel>
</div>
<h1>Newest Homes</h1>
<ul>
  {#each listings as listing}
    <!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
    <li><a class='text-dark' rel='prefetch' href='listing/{listing.slug.current}'>{listing.address}</a> - ${listing.price}</li>
  {/each}
</ul>
