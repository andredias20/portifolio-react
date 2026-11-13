import type { Localized } from "./content";
export const articles: {
  id: string;
  title: Localized;
  introduction: Localized;
  sections: { title: Localized; body: Localized }[];
}[] = [
  {
    id: "portfolio-modular",
    title: {
      pt: "Como este portfólio foi organizado para crescer",
      en: "How this portfolio is organized to grow",
    },
    introduction: {
      pt: "Uma nota técnica sobre as decisões de estrutura deste site: páginas separadas por assunto, conteúdo em dois idiomas e projetos independentes.",
      en: "A technical note on this site’s structure: pages separated by subject, bilingual content and independent projects.",
    },
    sections: [
      {
        title: {
          pt: "Cada assunto tem um lugar",
          en: "A place for each subject",
        },
        body: {
          pt: "A inicial apresenta o André e aponta caminhos. A trajetória e a formação ficam na área profissional; música e hobbies, na pessoal. Essa divisão evita repetir a mesma informação e permite atualizar cada parte sem transformar a Home em uma página interminável.",
          en: "The home page introduces André and offers paths to explore. Career and education live in the professional area; music and hobbies in the personal area. This avoids repetition and lets each part evolve without turning the home page into an endless scroll.",
        },
      },
      {
        title: {
          pt: "Metadados leves, páginas sob demanda",
          en: "Light metadata, on-demand pages",
        },
        body: {
          pt: "Cada pasta em personal-projects tem um metadata.ts e um Page.tsx. Os metadados alimentam a vitrine; a página só é carregada ao abrir o projeto. Assim, adicionar um estudo de caso não exige incluir toda a sua implementação no carregamento inicial.",
          en: "Each personal-projects folder contains metadata.ts and Page.tsx. Metadata feeds the showcase; the page is loaded only when opening the project. Adding a case study therefore does not put its entire implementation into the initial download.",
        },
      },
      {
        title: {
          pt: "Conteúdo e estilos com limites claros",
          en: "Content and styles with clear boundaries",
        },
        body: {
          pt: "Os textos da interface são agrupados por domínio, com versões PT-BR e EN. Os estilos do portfólio usam classes próprias, enquanto cada projeto pode importar seu CSS local. Isso reduz o risco de uma regra genérica de navegação ou título alterar uma demonstração incorporada.",
          en: "Interface copy is grouped by domain, with PT-BR and EN versions. Portfolio styles use dedicated classes, while each project can import local CSS. This reduces the risk of a generic navigation or heading rule changing an embedded demo.",
        },
      },
      {
        title: {
          pt: "Pequenos testes para preservar os detalhes",
          en: "Small tests to preserve the details",
        },
        body: {
          pt: "A validação cobre instalação limpa, análise estática, build e fluxos no navegador. Os testes verificam navegação, idioma, fotos ampliadas e os limites dos easter eggs. A ideia é preservar o comportamento enquanto o conteúdo e a apresentação evoluem.",
          en: "Validation covers clean installation, static analysis, builds and browser flows. Tests check navigation, language, expanded photos and easter egg thresholds. The goal is to preserve behavior while the content and presentation evolve.",
        },
      },
    ],
  },
];
