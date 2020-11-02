import client from '../../../sanityClient'

 export async function get (req, res) {
     try {
              const { slug  } = req.params;
              const filter = '*[_type == "post" && slug.current == $slug][0]';
              const projection = `{
                     ...,
                            mainImage{
                                     ...,
                                              asset->

                            },
                                   body[]{
                                            ...,

                                   }

    }`;
              const query = filter + projection;
              const post = await client.fetch(query, { slug  })
              res.end(JSON.stringify({ post }));

     } catch (err) {
         res.writeHead(500, {
                    'Content-Type': 'application/json'

         });

         res.end(JSON.stringify({
                    message: err.message

         }));

     }

 };
