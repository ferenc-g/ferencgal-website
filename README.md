# Ferenc Gal Website (Astro)

Personal website built with Astro for fast static site generation.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
fg-website-astro/
├── public/              # Static assets (images, CSS, robots.txt)
├── src/
│   ├── content/
│   │   └── blog/        # Blog posts as Markdown files
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Shared HTML structure
│   │   └── BlogPost.astro      # Blog post template
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   └── blog/
│   │       └── [...slug].astro # Dynamic blog routes
│   └── content.config.ts       # Content collection schema
├── astro.config.mjs
└── package.json
```

## Adding a New Blog Post

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter:
   ```markdown
   ---
   title: "Your Post Title"
   description: "A brief description"
   pubDate: 2026-01-15
   category: "Category Name"
   keywords: "optional, seo, keywords"
   ---

   Your content here...
   ```
3. The post will automatically appear on the homepage and at `/blog/your-post-slug`

## Deployment (Cloudflare Pages)

1. Push to GitHub
2. Connect repo to Cloudflare Pages
3. Set build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy triggers automatically on push

## Notes

- Blog posts are written in Markdown
- The sitemap is auto-generated at `/sitemap-index.xml`
- CSS is in `public/styles.css` (same as original site)
