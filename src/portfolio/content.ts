export type Language = "pt" | "en";
export type Localized = Record<Language, string>;
export const navigation = [
  ["/", "Início", "Home"],
  ["/about", "Sobre mim", "About"],
  ["/projects", "Projetos", "Projects"],
  ["/articles", "Artigos", "Articles"],
  ["/setup", "Ambiente", "Setup"],
  ["/life", "Além do código", "Life skills"],
];
interface LifeSkill {
  number: string;
  title: Localized;
  description: Localized;
}

export const skills: LifeSkill[] = [
  {
    number: "01",
    title: { pt: "Bicicleta", en: "Cycling" },
    description: {
      pt: "Ritmo, estrada e liberdade.",
      en: "Pace, roads and freedom.",
    },
  },
  {
    number: "02",
    title: { pt: "Violão", en: "Guitar" },
    description: {
      pt: "Uma pausa para encontrar outro ritmo.",
      en: "A pause to find a different rhythm.",
    },
  },
  {
    number: "03",
    title: { pt: "Hardware", en: "Hardware" },
    description: {
      pt: "Montagem e manutenção de PCs.",
      en: "PC building and maintenance.",
    },
  },
  {
    number: "04",
    title: { pt: "Design", en: "Design" },
    description: {
      pt: "CorelDraw, Photoshop e Illustrator.",
      en: "CorelDraw, Photoshop and Illustrator.",
    },
  },
  {
    number: "05",
    title: { pt: "Academia", en: "Gym" },
    description: {
      pt: "Consistência dentro e fora do código.",
      en: "Consistency inside and outside code.",
    },
  },
  {
    number: "06",
    title: { pt: "Orquestração de IA", en: "AI Orchestrator" },
    description: {
      pt: "Orquestrando IA nas horas vagas.",
      en: "Orchestrating AI in my spare time.",
    },
  },
];

export const professionalLinks = [
  { label: "GitHub", href: "https://www.github.com/andredias20" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andredias20" },
];
