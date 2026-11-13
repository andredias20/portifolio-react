# Personal projects

Create a folder per project, such as `src/personal-projects/my-project/`:

- `metadata.ts`: default export satisfying `ProjectMetadata` from `src/portfolio/projects.ts`. Supply a unique URL-safe `slug`, localized `title`, `description`, `status`, `tags`, and optional `preview` asset.
- `Page.tsx`: default React component accepting `{ language: Language }`. Keep PT/EN content inside this module or its local resources.
- Additional components, assets and local styles as needed. Use a unique class prefix or CSS Modules.

The registry eagerly loads only metadata to construct the showcase and routes. React.lazy loads `Page.tsx` and its imports when its route is visited. A missing page produces a descriptive registry error.

See `portfolio/metadata.ts` and `portfolio/Page.tsx` for a working example. Do not import Page.tsx from metadata.ts, since that would defeat lazy loading. Use type-only imports for contracts.

The shell provides navigation, a title/description and a next-page link. Project pages own their internal typography; shared reset styles and design tokens remain available. Test an independent layout before assuming portfolio page styles apply.

Publish only verified work. For professional case studies, distinguish your contribution from team outcomes; do not invent technical decisions, expose private code or add company materials without permission.
