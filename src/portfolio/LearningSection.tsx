import { messages } from "./messages/learningSection";
import type { Language } from "./content";
import { courses } from "./career";
export function LearningSection({ language }: { language: Language }) {
  return (
    <section
      className="section learning-section"
      id="learning"
      aria-labelledby="learning-title"
    >
      <span className="eyebrow">{messages.educationLearning[language]}</span>
      <h2 id="learning-title">{messages.learningIsPartOfTheStory[language]}</h2>
      <div className="learning-grid">
        <article>
          <h3>UTFPR</h3>
          <p>Universidade Tecnológica Federal do Paraná</p>
          <p>
            {
              messages
                .undergraduateTechnologyDegreeInformationTechnologyInformation[
                language
              ]
            }
          </p>
          <span className="eyebrow">
            {messages.inProgressExpectedH[language]}
          </span>
        </article>
        <article>
          <h3>{messages.english[language]}</h3>
          <p>{messages.fullProfessionalProficiency[language]}</p>
        </article>
      </div>
      <h3 className="learning-subtitle">
        {messages.coursesAndCertifications[language]}
      </h3>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id}>{course.title[language]}</li>
        ))}
      </ul>
    </section>
  );
}
