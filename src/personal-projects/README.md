# Personal projects

Create one folder per project: `src/personal-projects/my-project/`.
Export a default `PortfolioProject` object from `index.tsx` (see `portfolio/index.tsx`).
The registry discovers these modules automatically and creates both showcase cards and `/projects/:slug` routes. Use a unique URL-safe slug.

Each folder can contain its own components, CSS, assets and submodules. The `Page` component receives `language` (`pt` or `en`). Provide both translations for descriptions, status and page content. Keep identifiers in English.

Only publish real projects; do not use invented metrics or client work.
