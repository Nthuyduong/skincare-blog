const { default: axios } = require('axios');
const fs = require('fs');
const path = require('path');

function getFoldersRecursive(filePath) {
  const folders = [];

  function shouldIgnoreFolder(folderName) {
    const ignoredPrefixes = ['[', '(', '_', '-'];
    return ignoredPrefixes.some((prefix) => folderName.startsWith(prefix));
  }

  function traverse(currentPath) {
    const files = fs.readdirSync(currentPath, { withFileTypes: true });

    files.forEach((file) => {
      if (file.isDirectory()) {
        const folderName = file.name;
        if (!shouldIgnoreFolder(folderName)) {
          folders.push(folderName);
          traverse(path.join(currentPath, folderName));
        }
      }
    });
  }

  traverse(filePath);
  return folders;
}

// Usage example
const targetPath = 'C:/Users/Giang Nguyen/Documents/code/skincare-blog/src/pages';
// const folderNames = getFoldersRecursive(targetPath);
// console.log(folderNames);

const createJson=(post) => {
    return {
        url: `https://radiance-aura.blog/article/${post.slug}`,
        lastModified: new Date(post.updated_at), // Replace 'updated_at' with the actual field name containing the last modified date for the post
    }
}

async function getAllPostSlugs() {
    try {
        const response = await axios.get('https://app.radiance-aura.blog/api/blogs?limit=100');
        const posts = response.data.data.results;
        return posts.map((post) => createJson(post));
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        return [];
    }
}
getAllPostSlugs().then((posts) => {

    const routers = getFoldersRecursive(targetPath);
    const sitemap1 = routers.map((router) => {
        return `
            <url>
                <loc>https://radiance-aura.blog/${router}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.8</priority>
            </url>
            `;
    });

    const sitemap2 = posts.map((post) => {
        return `
            <url>
                <loc>${post.url}</loc>
                <lastmod>${post.lastModified.toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.8</priority>
            </url>
        `;
    });

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${sitemap1.join('')}
            ${sitemap2.join('')}
        </urlset>`;

    fs.writeFileSync('public/sitemap.xml', sitemapContent);
    console.log('Sitemap generated successfully!');
});
