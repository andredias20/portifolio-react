import type { Language } from "../content";
import { heading } from "../PageHeading";
import { articles } from "../articles";
export default function ArticlesPage({ language }: { language: Language }) {
  const t = (pt: string, en: string) => (language === "pt" ? pt : en);
  return (
    <>
      {heading(
        t("03 / DIÁRIO", "03 / LOGBOOK"),
        t("Notas de construção.", "Building notes."),
        t(
          "Código, descobertas e decisões compartilhadas.",
          "Code, discoveries and shared decisions.",
        ),
      )}
      {articles.map((article) => (
        <article className="technical-article" id={article.id} key={article.id}>
          <h2>{article.title[language]}</h2>
          <p className="section-intro">{article.introduction[language]}</p>
          {article.sections.map((section, index) => (
            <section key={index}>
              <h3>{section.title[language]}</h3>
              <p>{section.body[language]}</p>
            </section>
          ))}
        </article>
      ))}
    </>
  );
}
