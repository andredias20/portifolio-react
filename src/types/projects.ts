import type { ProjectStatus } from "./project-status";

export default interface Project {
  name: string;
  type: string;
  problemDescription: string;
  problemSolution: string;
  stack: string[];
  highlights: string[];
  status: ProjectStatus;
}
