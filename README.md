# Astro Sass Blog
> Custom blog setup with Sass installed. Customize as required.

## App Features
Custom features installed into this starter template.
- RSS feed
- Sitmap
- Collections usage
- Pagination
- Custom 404 page
- Sass folders based on 7 - 1 Architecture

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   ├── comopnents/
│   ├── content/
│   │   └── config.ts
│   ├── layout/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── posts/
│   │   └── index.astro
│   ├── styles/
│   │   ├── abstracts/
│   │   ├── base/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── pages/
│   │   └── global.scss
│   └── util/
│       └── dateForma.ts
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

