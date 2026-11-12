import type { PortfolioProject } from "../../portfolio/projects";
const project: PortfolioProject = {
  slug: "portfolio",
  title: { pt: "Portfólio pessoal", en: "Personal portfolio" },
  description: {
    pt: "Um espaço modular para código, ideias e tudo que acontece entre eles.",
    en: "A modular space for code, ideas and everything in between.",
  },
  tags: ["React", "TypeScript", "Vite"],
  status: { pt: "Em evolução", en: "Evolving" },
  Page: ({ language }) => (
    <div className="article-body">
      <h2>{language === "pt" ? "Feito para evoluir." : "Built to evolve."}</h2>
      <p>
        {language === "pt"
          ? "Páginas independentes, conteúdo bilíngue e projetos organizados por pasta. Este portfólio é o primeiro projeto da vitrine."
          : "Independent pages, bilingual content and projects organized by folder. This portfolio is the first project in the showcase."}
      </p>
      <h3>{language === "pt" ? "Estrutura" : "Structure"}</h3>
      <pre>src/personal-projects/portfolio/index.tsx</pre>
      <p>
        {language === "pt"
          ? "Cada projeto pode ter seus próprios componentes, estilos e recursos."
          : "Each project can have its own components, styles and assets."}
      </p>
    </div>
  ),
};
export default project;
