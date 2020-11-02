<script context="module">
    export async function preload({ params }) {
        try {
               const res = await this.fetch(`api/blog/${params.slug}`);
                      const { post } = await res.json();
                             return { post };
                                  
        } catch (err) {
               this.error(500, err);
                    
        }
           };
</script>

<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../../components/serializers";
  import urlBuilder from "@sanity/image-url";
  import client from "../../sanityClient";
  const urlFor = (source) => urlBuilder(client).image(source);
  export let post;

</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>
<div class="container mx-auto">
          <img class="mx-auto rounded md:w-11/12" src={urlFor(post.mainImage)} alt="alt" />
	<h1 class="text-center text-2xl">{post.title}</h1>
	<div class="content">
		  <BlockContent blocks={post.body} {serializers} />
	</div>
</div>
