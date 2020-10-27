<script context="module">
  import client from "../sanityClient";
  import urlBuilder from "@sanity/image-url";
  import BlockContent from "@movingbrands/svelte-portable-text";
  const urlFor = (source) => urlBuilder(client).image(source);
</script>

<script>
  export let data;
</script>

           <div class="flex items-center justify-center">
                         <div class="max-w-sm w-full sm:w-full md:w-1/3 pb-4 pt-1 px-3">
                                          <div class="bg-white shadow-xl rounded-lg overflow-hidden">
                                                  <div class="bg-cover bg-center h-56 p-4" style="background-image: url({urlFor(data.mainImage)})">
                                                                                  </div>
                                                                                              <div class="p-4 bg-white">
                                                                                                      <p class="uppercase tracking-wide text-sm font-semibold text-gray-700">{data.city} • {data.beds}bd {data.baths}ba • ${data.price} </p>
                                                                                                      <p class="text-xl text-gray-900">
        <BlockContent blocks={data.excerpt} />
</p>                                                                                                                            <p class="text-gray-700">{data.address}</p>
                                                                                                                                                               </div>
                                                                                                                                                                                                                                                                                                               </div>
                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                 </div>
