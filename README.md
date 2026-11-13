# André Dias Portfolio

Portfolio pessoal/profissional com objetivo de apresentar experiência, stack técnica, projetos e interesses técnicos em uma interface limpa, responsiva e com aparência de produto.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- ESLint

## Requisitos

Este projeto usa versões recentes do Vite e Tailwind. Use Node.js compatível com o arquivo `.nvmrc`.

```bash
nvm use
```

Versão esperada atualmente:

```txt
v22.13.1
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois abra a URL exibida pelo Vite no terminal.

## Scripts

```bash
npm run dev
```

Inicia o servidor de desenvolvimento.

```bash
npm run build
```

Executa a checagem TypeScript e gera a versão de produção em `dist/`.

```bash
npm run preview
```

Serve localmente a build de produção.

```bash
npm run lint
```

Executa ESLint no projeto.

## Estrutura do projeto

```txt
src/
  assets/
  components/
    Header/
  styles/
  types/
  App.tsx
  main.tsx
```

Organização pretendida:

- `src/components`: componentes visuais da interface.
- `src/types`: contratos TypeScript usados pelos dados e componentes.
- `src/styles`: tokens e estilos globais.
- `src/assets`: imagens, logos e outros assets usados pela aplicação.

## Direção visual

O portfólio segue uma estética escura, limpa e técnica, inspirada em interfaces SaaS:

- fundo escuro neutro;
- cards e bordas discretas;
- azul como destaque principal;
- verde para apoio técnico;
- foco em legibilidade, responsividade e clareza visual.

## Status

Projeto em desenvolvimento.

Próximas etapas planejadas:

- finalizar o Header responsivo;
- criar Hero, Stack, Experience, Projects, Lab e Contact;
- mover conteúdo para arquivos em `src/data`;
- adicionar estados visuais e responsividade completa;
- preparar deploy público.

## Licença

Projeto pessoal. O conteúdo, identidade visual e dados profissionais pertencem a André de Carli Dias.

## Portfolio architecture

- `src/portfolio/content.ts`: navigation, shared bilingual content and life skills.
- `src/portfolio/projects.ts`: typed automatic project discovery.
- `src/personal-projects/`: independent project folders and detail pages; see its README.
- `src/portfolio/portfolio.css`: responsive visual system.
- `src/App.tsx`: application shell, language preference and page routes.
- `src/portfolio/pages/`: six independent page modules.
- `src/portfolio/ProjectCards.tsx` and `PageHeading.tsx`: shared presentation components.

Routes: `/`, `/about`, `/projects`, `/projects/:slug`, `/articles`, `/setup`, `/life`.
The language switch persists locally. Articles and hardware specifications await real content.
For production hosting, configure an SPA fallback to `index.html` so direct page URLs work.

Run `npm install`, `npm run dev`; validate with `npm run build` and `npm run lint`.

### Personal profile content

- `src/portfolio/career.ts`: seven work experiences, bilingual descriptions, dates, technologies and courses, curated from the supplied profile JSONs.
- `src/portfolio/CareerSection.tsx`: professional timeline on About.
- `src/portfolio/LearningSection.tsx`: education, English and courses. Graduation is in progress, expected H2 2027; no CEFR equivalence is inferred.
- `src/portfolio/interests.ts`: bilingual personal stories, expanded independently from professional experience.

Add future courses to `courses` with a stable ID and PT/EN title. The supplied files do not specify a computing course, its institution or dates; add that entry once the details are available. Certificate issuers, dates and credential URLs are not inferred. The Sicredi automation count describes an existing portfolio, not sole authorship. Career achievement figures retain the approximate, self-reported scope of the supplied records.

### Music demo

`src/portfolio/MusicSection.tsx` embeds the supplied Spotify playlist on Life, with a direct-link fallback. The now-playing panel is explicitly a demo; it makes no authenticated API calls and does not claim any track is currently playing. A live integration will require server-side authorization/token storage. The playlist ID can be changed in this shared component.

The site favicon lives in `public/favicon.svg` and follows the dark/green visual identity.

Content ownership: Home introduces André and links to each area; About owns career and education; Projects owns the showcase; Life owns music and hobbies; Setup owns the desk, hardware photos and machine specifications. Avoid duplicating these sections across pages.
