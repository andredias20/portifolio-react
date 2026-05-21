export default interface Experience {
  company: string;
  role: string;
  description: string;
  period: {
    start: string;
    end: string | null;
  };
  technologies: string[];
  achievements: string[];
  current: boolean;
}
