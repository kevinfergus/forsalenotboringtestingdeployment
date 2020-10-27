<script context="module">
  import client from "../sanityClient";
  import urlBuilder from "@sanity/image-url";
  import BlockContent from "@movingbrands/svelte-portable-text";
  const urlFor = (source) => urlBuilder(client).image(source);
</script>

<script>
  export let data;
</script>

<style>
  .card-container {
    width: 100%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
  }
  .listing-card {
    margin: 0;
    height: 100%;
    width: 100%;
    flex: 1 1 auto;
    display: flex;
    padding: 1rem 2rem;
    border-radius: 4px;
  }

  .listing-card p:last-child {
    margin: 0;
  }

  .card-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    flex: 1 1 auto;
  }

  .card-body {
    width: 50%;
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

  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
    opacity: 1;
  }
  @media only screen and (max-device-width: 480px) {
.card-container {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
  }
  .listing-card {
    margin: 0;
    height: 100%;
    width: 100%;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
  }

  .listing-card p:last-child {
    margin: 0;
  }

  .card-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    flex: 1 1 auto;
  }

  .card-body {
    width: 100%;
    max-height: 100%;
    flex: 1 1 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    padding: 0;
  }

  .card-text {
    position: relative;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0;
  }
  .card-text h3 {
    font-weight: 500;
    margin-bottom: .2em;
  }
  .card-text h3,
  .card-text p {
    margin-top: 0;
  }

  .card-text p {
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

        
  }
</style>

<div class="card-container">
  <div class="listing-card bg-white">
    <a href="homes/{data.slug.current}">
      <div class="card-img">
        <img src={urlFor(data.mainImage)} width="1200" alt="The alt">
      </div>
    </a>
    <div class="card-body">
      <div class="card-text">
        <a href="homes/{data.slug.current}">
          <h3>{data.address}</h3>
        </a>
        <p>${data.price} | {data.City}</p>
        <BlockContent blocks={data.excerpt} />
      </div>
    </div>
  </div>
</div>
