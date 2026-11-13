import { messages } from "../messages/projects";
import type { Language } from "../content";
import { heading } from "../PageHeading";
import { ProjectCards } from "../ProjectCards";
export default function ProjectsPage({ language }: { language: Language }) {
  return (
    <>
      {heading(
        messages.projects[language],
        messages.codeInPractice[language],
        messages.independentProjectsRoomForNewIdeas[language],
      )}
      <ProjectCards language={language} />
    </>
  );
}
