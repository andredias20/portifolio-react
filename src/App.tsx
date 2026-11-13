import { trackEvent } from "./analytics/events";
import { PageFlow } from "./portfolio/PageFlow";
import { heading } from "./portfolio/PageHeading";
import HomePage from "./portfolio/pages/HomePage";
import AboutPage from "./portfolio/pages/AboutPage";
import ProjectsPage from "./portfolio/pages/ProjectsPage";
import ArticlesPage from "./portfolio/pages/ArticlesPage";
import SetupPage from "./portfolio/pages/SetupPage";
import LifePage from "./portfolio/pages/LifePage";
import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { navigation, type Language } from "./portfolio/content";
import { projects } from "./portfolio/projects";
import "./portfolio/portfolio.css";

export default function App() {
  const [language, setLanguage] = useState<Language>(() =>
    localStorage.getItem("portfolio-language") === "en" ? "en" : "pt",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const t = (pt: string, en: string) => (language === "pt" ? pt : en);
  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title =
      language === "pt"
        ? "André Dias | Desenvolvedor"
        : "André Dias | Developer";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        language === "pt"
          ? "Portfólio pessoal de André de Carli Dias: trajetória, projetos e interesses."
          : "André de Carli Dias’s personal portfolio: experience, projects and interests.",
      );
    localStorage.setItem("portfolio-language", language);
  }, [language]);
  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  return (
    <>
      <a className="skip-link" href="#main">
        {t("Ir para conteúdo", "Skip to content")}
      </a>
      <header>
        <Link to="/" className="brand">
          <span className="brand-mark">
            a<span>.</span>
          </span>
          <span>
            ANDRÉ DIAS
            <span className="brand-caption">
              {t("PESSOA / DESENVOLVEDOR", "PERSON / DEVELOPER")}
            </span>
          </span>
        </Link>
        <button
          className="menu-button"
          aria-label={t("Alternar menu", "Toggle menu")}
          aria-expanded={menuOpen}
          onClick={() => {
            trackEvent("menu_toggle", { expanded: !menuOpen });
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "open" : ""}>
          {navigation.map(([path, pt, en]) => (
            <NavLink
              end
              to={path}
              key={path}
              onClick={() => setMenuOpen(false)}
            >
              {t(pt, en)}
            </NavLink>
          ))}
        </nav>
        <button
          className="language"
          onClick={() => {
            const nextLanguage = language === "pt" ? "en" : "pt";
            trackEvent("language_change", { selected_language: nextLanguage });
            setLanguage(nextLanguage);
          }}
          aria-label={t("Mudar para inglês", "Switch to Portuguese")}
        >
          {language === "pt" ? (
            <>
              <b>PT</b> / EN
            </>
          ) : (
            <>
              PT / <b>EN</b>
            </>
          )}
        </button>
      </header>
      <main id="main" key={location.pathname}>
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/about" element={<AboutPage language={language} />} />
          <Route
            path="/projects"
            element={<ProjectsPage language={language} />}
          />
          {projects.map((project) => (
            <Route
              key={project.slug}
              path={`/projects/${project.slug}`}
              element={
                <>
                  <Link className="text-link" to="/projects">
                    ← {t("Projetos", "Projects")}
                  </Link>
                  {heading(
                    t("PROJETO / ", "PROJECT / ") + project.slug.toUpperCase(),
                    project.title[language],
                    project.description[language],
                  )}
                  <project.Page language={language} />
                </>
              }
            />
          ))}
          <Route
            path="/articles"
            element={<ArticlesPage language={language} />}
          />
          <Route path="/setup" element={<SetupPage language={language} />} />
          <Route path="/life" element={<LifePage language={language} />} />
          <Route
            path="/curriculum"
            element={<Navigate to="/about" replace />}
          />
          <Route
            path="*"
            element={
              <>
                {heading(
                  t("404 / NÃO ENCONTRADO", "404 / NOT FOUND"),
                  t("Rota não encontrada.", "Route not found."),
                  t("Vamos voltar ao início.", "Let’s return home."),
                )}
                <Link className="button primary" to="/">
                  {t("Voltar ao início", "Back to home")} <ArrowRight />
                </Link>
              </>
            }
          />
        </Routes>
        <PageFlow language={language} />
      </main>
      <footer>
        <Link className="brand" to="/">
          andré<span className="accent">.dias</span>
        </Link>
        <span>
          {t(
            "Feito com intenção. Sempre em evolução.",
            "Built with intention. Always evolving.",
          )}
        </span>
        <span>
          © {new Date().getFullYear()} / {t("FIM DO ARQUIVO_", "END OF FILE_")}
        </span>
      </footer>
    </>
  );
}
