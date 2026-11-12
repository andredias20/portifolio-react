import type { Language } from "./content";
import { courses } from "./career";
export function LearningSection({ language }: { language: Language }) {
  const t = (pt: string, en: string) => (language === "pt" ? pt : en);
  return (
    <section
      className="section learning-section"
      id="learning"
      aria-labelledby="learning-title"
    >
      <span className="eyebrow">
        {t("FORMAÇÃO & APRENDIZADO", "EDUCATION & LEARNING")}
      </span>
      <h2 id="learning-title">
        {t("Aprender faz parte da história.", "Learning is part of the story.")}
      </h2>
      <div className="learning-grid">
        <article>
          <h3>UTFPR</h3>
          <p>Universidade Tecnológica Federal do Paraná</p>
          <p>
            {t(
              "Curso Superior de Tecnologia · Tecnologia da Informação / Sistemas da Informação",
              "Undergraduate technology degree · Information Technology / Information Systems",
            )}
          </p>
          <span className="eyebrow">
            {t(
              "EM ANDAMENTO · PREVISÃO 2027/2",
              "IN PROGRESS · EXPECTED H2 2027",
            )}
          </span>
        </article>
        <article>
          <h3>{t("Inglês", "English")}</h3>
          <p>
            {t(
              "Proficiência profissional completa.",
              "Full professional proficiency.",
            )}
          </p>
          <p>Michigan Language Assessment</p>
        </article>
      </div>
      <h3 className="learning-subtitle">
        {t("Cursos e certificações", "Courses and certifications")}
      </h3>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id}>{course.title[language]}</li>
        ))}
      </ul>
    </section>
  );
}
