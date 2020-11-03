import client from '../../../sanityClient'
import urlBuilder from "@sanity/image-url";
const urlFor = (source) => urlBuilder(client).image(source);
 export async function get (req, res) {
          try {
                        const listings = await client.fetch('*[_type == "listing" && active == true && city == "Columbus" && defined(slug.current) && publishedAt < now()]')
                        res.end(JSON.stringify({ listings }));

          } catch (err) {
                   res.writeHead(500, {
                                   'Content-Type': 'application/json'

                   });

                   res.end(JSON.stringify({
                                   message: err.message

                   }));

          }

 };
