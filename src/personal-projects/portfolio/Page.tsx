import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Language } from "../../portfolio/content";
import architecture from "./architecture.svg";
import "./portfolio.css";

export default function PortfolioPage({ language }: { language: Language }) {
  const t = (pt: string, en: string) => (language === "pt" ? pt : en);
  const features = [
    [
      t("Dois idiomas", "Two languages"),
      t(
        "Conteúdo em português e inglês, com a preferência de idioma salva no navegador.",
        "Portuguese and English content, with the language preference saved in the browser.",
      ),
    ],
    [
      t("Cada assunto no seu lugar", "A place for each subject"),
      t(
        "Páginas próprias para apresentação, trajetória e formação, projetos, artigos, ambiente e interesses pessoais. A navegação no final de cada página conecta essas partes.",
        "Dedicated pages for an introduction, career and education, projects, articles, workspace and personal interests. Navigation at the end of each page connects these areas.",
      ),
    ],
    [
      t("Fotografias com contexto", "Photos in context"),
      t(
        "Fotos junto dos assuntos que ilustram, com enquadramento responsivo e ampliação para ver a imagem completa. No ambiente, uma composição em camadas permite alternar entre mesa, PC e servidor.",
        "Photos placed alongside the subjects they illustrate, with responsive framing and an expanded view of the full image. In the workspace, a layered composition lets visitors switch between desk, PC and server.",
      ),
    ],
    [
      t("Um lado pessoal", "A personal side"),
      t(
        "Espaço para bicicleta, violão, academia, ferramentas visuais e experimentos com IA, além de uma playlist incorporada do Spotify.",
        "Room for cycling, guitar, the gym, visual tools and AI experiments, alongside an embedded Spotify playlist.",
      ),
    ],
    [
      t("Pequenas descobertas", "Small discoveries"),
      t(
        "Um terminal interativo guarda respostas para comandos e uma surpresa para quem insiste demais. Detalhes de humor deixam a experiência com a minha cara.",
        "An interactive terminal hides command responses and a surprise for persistent visitors. Small touches of humor make the experience feel like me.",
      ),
    ],
  ];
  return (
    <div className="article-body portfolio-case-study">
      <section>
        <h2>
          {t("Um site para contar quem eu sou.", "A website to tell my story.")}
        </h2>
        <p>
          {t(
            "A proposta foi construir um lugar que reunisse o André profissional e o André fora do trabalho. Queria apresentar o que fiz, abrir espaço para novos projetos e mostrar os interesses que também fazem parte de mim, com textos objetivos e uma identidade própria.",
            "The idea was to build a place for both my professional and personal sides. I wanted to share my work, make room for new projects and show the interests that are also part of who I am, with concise writing and a distinct identity.",
          )}
        </p>
      </section>
      <section>
        <h2>{t("O que foi construído", "What I built")}</h2>
        <dl>
          {features.map(([title, description]) => (
            <div key={title}>
              <dt>
                <h3>{title}</h3>
              </dt>
              <dd style={{ margin: 0 }}>
                <p>{description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section>
        <h2>{t("Estrutura para crescer", "Room to grow")}</h2>
        <img
          className="architecture-diagram"
          src={architecture}
          alt={t(
            "Fluxo: metadados dos projetos alimentam a vitrine e o roteador carrega cada página sob demanda.",
            "Flow: project metadata feeds the showcase and the router loads each page on demand.",
          )}
        />
        <p>
          {t(
            "A aplicação usa React e TypeScript, com Vite para desenvolvimento e geração da versão de produção. O React Router organiza as rotas; componentes compartilhados cuidam da navegação, da trajetória, das fotos e da música. O visual combina fundo escuro, verde em destaque e referências a terminal, Linux e hardware.",
            "The application uses React and TypeScript, with Vite for development and production builds. React Router organizes routes; shared components handle navigation, the career timeline, photos and music. The design combines a dark background, green accents and references to terminals, Linux and hardware.",
          )}
        </p>
        <p>
          {t(
            "Cada projeto tem sua própria pasta em personal-projects, com descrição nos dois idiomas, tecnologias e página de detalhes. Um registro descobre esses módulos e monta os cartões e as rotas automaticamente. Isso permite adicionar projetos mais complexos, com componentes, estilos e recursos próprios.",
            "Each project has its own folder in personal-projects, containing a bilingual description, technologies and a detail page. A registry discovers these modules and generates cards and routes automatically. This makes room for more complex projects with their own components, styles and assets.",
          )}
        </p>
        <pre>{`src/personal-projects/\n  portfolio/\n    metadata.ts\n    Page.tsx\n    portfolio.css`}</pre>
        <p>
          {t(
            "Os dados da trajetória, os cursos e os interesses ficam separados da apresentação. A interface se adapta a diferentes telas e inclui navegação por teclado, descrições de imagens e respeito à preferência por movimento reduzido.",
            "Career data, courses and interests are kept separate from presentation. The interface adapts to different screen sizes and includes keyboard navigation, image descriptions and support for reduced-motion preferences.",
          )}
        </p>
      </section>
      <section>
        <h2>{t("Em evolução", "Still evolving")}</h2>
        <p>
          {t(
            "O portfólio já reúne a trajetória profissional, a formação e os interesses pessoais. A área de artigos reúne notas técnicas sobre a construção do site. A playlist do Spotify funciona pelo player oficial; a exibição da música atual fica para uma futura integração autenticada.",
            "The portfolio already brings together my career, education and personal interests. The articles area contains technical notes on how the site is built. The Spotify playlist uses the official player; a now-playing display is reserved for a future authenticated integration.",
          )}
        </p>
        <p>
          {t(
            "A validação inclui instalação limpa, compilação TypeScript, geração de produção com Vite, análise com ESLint e testes de comportamento com Playwright.",
            "Validation includes clean installation, TypeScript compilation, a Vite production build, ESLint checks and Playwright behavior tests.",
          )}
        </p>
      </section>
      <div className="actions">
        <Link className="text-link" to="/">
          {t("Explorar o portfólio", "Explore the portfolio")}
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}
