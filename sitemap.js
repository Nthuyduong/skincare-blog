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

const createCategoryJson=(category) => {
    if (category.parent_id) {
        return {
            url: `https://radiance-aura.blog/categories/${category?.parent?.slug}/${category.slug}`,
            lastModified: new Date(category.updated_at), // Replace 'updated_at' with the actual field name containing the last modified date for the post
        }
    } else {
        return {
            url: `https://radiance-aura.blog/categories/${category.slug}`,
            lastModified: new Date(category.updated_at), // Replace 'updated_at' with the actual field name containing the last modified date for the post
        }
    }
}

const createIngredientJson=(ingredient) => {
    return {
        url: `https://radiance-aura.blog/ingredients/${ingredient.slug}`,
        lastModified: new Date(ingredient.updated_at), // Replace 'updated_at' with the actual field name containing the last modified date for the post
    }
}

async function getAllPostSlugs() {
    try {
        const response = await axios.get('https://api.radiance-aura.blog/api/blogs?limit=100');
        const posts = response.data.data.results;
        return posts.map((post) => createJson(post));
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        return [];
    }
}

async function getCategories() {
    try {
        const response = await axios.get('https://api.radiance-aura.blog/api/categories?limit=100');
        const categories = response.data.data.results;
        return categories.map((category) => createCategoryJson(category));
    } catch (error) {
        console.error('Error fetching categories:', error.message);
        return [];
    }

}

async function getIngredients() {
    try {
        const response = await axios.get('https://api.radiance-aura.blog/api/ingredients?limit=100');
        const ingredients = response.data.data.results;
        return ingredients.map((ingredient) => createIngredientJson(ingredient));
    } catch (error) {
        console.error('Error fetching ingredients:', error.message);
        return [];
    }
}

Promise.all([getAllPostSlugs(), getCategories(), getIngredients()]).then(([posts, categories, ingredients]) => {
    const routers = getFoldersRecursive(targetPath);
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://radiance-aura.blog</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://radiance-aura.blog/skintype</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://radiance-aura.blog/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>\n    ${posts.map((post) => `<url>
        <loc>${post.url}</loc>
        <lastmod>${post.lastModified.toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>`).join('\n    ')}
    ${categories.map((category) => `<url>
        <loc>${category.url}</loc>
        <lastmod>${category.lastModified.toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    `).join('\n    ')}
    ${ingredients.map((ingredient) => `<url>
        <loc>${ingredient.url}</loc>
        <lastmod>${ingredient.lastModified.toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>`).join('\n    ')}
    ${routers.map((router) => `<url>
        <loc>https://radiance-aura.blog/${router}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>`).join('\n    ')}
</urlset>
    `;
    fs.writeFileSync('public/sitemap.xml', sitemapContent);
    console.log('Sitemap generated successfully!');
});
