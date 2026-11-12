import { Link } from "react-router-dom";
import { Terminal, ArrowUpRight } from "lucide-react";
import { projects } from "./projects";
import type { Language } from "./content";
export function ProjectCards({ language }: { language: Language }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <Link
          className="project-card"
          to={`/projects/${project.slug}`}
          key={project.slug}
        >
          <div className="project-art">
            <Terminal size={48} />
            <span>~/personal-projects/{project.slug}</span>
            <div className="code-lines">
              {language === "pt"
                ? "// ideias tomando forma"
                : "const ideas = build();"}
              <br />
              {language === "pt"
                ? "// sempre em evolução_"
                : "// always in progress_"}
            </div>
          </div>
          <div className="card-content">
            <span className="eyebrow">{project.status[language]}</span>
            <h3>
              {project.title[language]}
              <ArrowUpRight size={22} />
            </h3>
            <p>{project.description[language]}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
