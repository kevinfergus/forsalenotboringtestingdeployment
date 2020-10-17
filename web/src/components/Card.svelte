<script context="module">
  import client from "../sanityClient";
  import urlBuilder from "@sanity/image-url";
  import BlockContent from "@movingbrands/svelte-portable-text";
  const urlFor = (source) => urlBuilder(client).image(source);
  import Image from "svelte-image";
</script>

<script>
  export let data;
</script>

<style>
  .card-container {
    /* min-height: 100vh; */
    width: 100%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
  }
  .listing-card {
    margin: 0;
    height: 20em;
    width: 45em;
    flex: 1 1 auto;
    display: flex;
    background-color: white;
    padding: 1rem 2rem;
    border-radius: 4px;
  }

  .listing-card p:last-child {
    margin: 0;
  }

  .card-img {
    height: 100%;
    width: 28em;
    object-fit: cover;
    flex: 1 1 auto;
  }

  .card-body {
    background-color: #fff;
    width: 12em;
    max-height: 100%;
    flex: 1 1 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    padding: 1.8em 1.8em 0;
  }

  .card-text {
    position: relative;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 0 0.8em 0;
    padding: 0;
  }
  .card-text h3 {
    font-weight: 500;
  }
  .card-text h3,
  .card-text p {
    margin-top: 0;
  }
  .card-text h3:after,
  .card-text p:after {
    position: absolute;
    bottom: 0;
    content: "";
    width: 100%;
    height: 2.8em;
    background: linear-gradient(rgba(255, 255, 255, 0), white);
  }

  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>

<div class="card-container">
  <div class="listing-card bg-primary">
    <a href="homes/{data.slug.current}">
      <div class="card-img">
        <Image src={urlFor(data.mainImage)} width="1200" alt="The alt" />
      </div>
    </a>
    <div class="card-body">
      <div class="card-text">
        <a href="homes/{data.slug.current}">
          <h3>{data.address}</h3>
        </a>
        <p>${data.price}</p>
        <BlockContent blocks={data.excerpt} />
      </div>
    </div>
  </div>
</div>
