<script context="module">
  import client from "../../sanityClient";
  import urlBuilder from "@sanity/image-url";
  const urlFor = source => urlBuilder(client).image(source)
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
</style>

<svelte:head>
  <title>Homes</title>
</svelte:head>

<h1>All Homes</h1>
<ul>
{#each listings as listing}

    <!-- we're using the non-standard `rel=prefetch` attribute to
                  tell Sapper to load the data for the page as soon as
                  the user hovers over the link or taps it, instead of
                  waiting for the 'click' event -->
    <li><a class='text-primary' rel='prefetch' href='listing/{listing.slug.current}'>{listing.address}</a> - ${listing.price}</li>
  {/each}
</ul>