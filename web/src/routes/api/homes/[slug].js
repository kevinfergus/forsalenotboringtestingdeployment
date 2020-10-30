import client from '../../../sanityClient'

 export async function get (req, res) {
     try {
              const { slug  } = req.params;
              const filter = '*[_type == "listing" && slug.current == $slug][0]';
         const projection = `{
                ...,
                       body[]{
                                ...,
                                         children[]{
                                                    ...,
                                                               }

                                         }

                       }

              }`;

              const query = filter + projection;
              const listing = await client.fetch(query, { slug  })
              res.end(JSON.stringify({ listing }));

     } catch (err) {
         res.writeHead(500, {
                    'Content-Type': 'application/json'

         });

         res.end(JSON.stringify({
                    message: err.message

         }));

     }

 };
