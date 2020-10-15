<script context="module">
  import client from "../../sanityClient";
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
{#each listings as listing}
<img src={urlFor(listing.mainImage)}
/>  
{#each listings as listing}
    <!-- we're using the non-standard `rel=prefetch` attribute to
                  tell Sapper to load the data for the page as soon as
                  the user hovers over the link or taps it, instead of
                  waiting for the 'click' event -->
    <li><a rel='prefetch' href='listing/{listing.slug.current}'>{listing.address}</a> ({formatDate(listing.publishedAt)})</li>
  {/each}
</ul>
