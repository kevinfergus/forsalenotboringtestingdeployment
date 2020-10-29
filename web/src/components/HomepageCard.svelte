<script context="module">
  import client from "../sanityClient";
  import urlBuilder from "@sanity/image-url";
  import BlockContent from "@movingbrands/svelte-portable-text";
  const urlFor = (source) => urlBuilder(client).image(source);
</script>

<script>
  export let data;
  export let price = data.price;
        function priceFormat(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          };
  export let formattedPrice = priceFormat(price);

</script>
<style>
  img {
    height: 260px;
  }

  @media only screen and (max-width: 600px) {
    img {
      height: 230px;
    }
  }
</style>

<div class="bg-white shadow-xl rounded-lg overflow-hidden">
  <img
    alt={data.address}
    class="block w-full object-cover"
    src={urlFor(data.mainImage)} />
  <div class="py-2 px-4 bg-white">
    <p class="text-gray-600 text-sm font-normal">{data.address}</p>
    <p class="uppercase tracking-wide text-sm font-normal text-gray-600">
      {data.city}
      •
      {data.beds}bd
      {data.baths}ba • ${formattedPrice}
    </p>
    <p class="text-lg text-gray-900">
      <BlockContent blocks={data.excerpt} />
    </p>
  </div>
</div>
