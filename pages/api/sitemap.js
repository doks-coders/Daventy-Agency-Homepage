import { formatHeadingLink } from "../../config";
import fetchAll from "../../MongoScripts/fetchAll";
export default async function  handler (req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
    





    const BASE_URL = 'https://osasart.vercel.app';


 
    let staticPaths = [`${BASE_URL}/`]
        staticPaths.push(`${BASE_URL}/blog`)

    
       // some remote API call maybe!
    
        const allPosts = await fetchAll()
    
    const dynamicPaths = allPosts.map( post => {
      
      return `${BASE_URL}/blog/${ formatHeadingLink(post.heading)}`
      
    })
    
    
    
    const allPaths =[ ...staticPaths , ...dynamicPaths ];
    
    
    console.log(allPaths)
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${allPaths
            .map((url) => {
              return `
                <url>
                  <loc>${url}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>1.0</priority>
                </url>
              `;
            })
            .join("")}
        </urlset>
    `;
    
    
        res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600');
      
        res.end(sitemap);




      
      // Instructing the Vercel edge to cache the file
     
  

  }