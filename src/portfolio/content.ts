export type Language = "pt" | "en";
export type Localized = Record<Language, string>;
export const pagePaths = {
  home: "/",
  about: "/about",
  projects: "/projects",
  articles: "/articles",
  setup: "/setup",
  life: "/life",
} as const;
export const navigation = [
  ["/", "Início", "Home"],
  ["/about", "Sobre mim", "About"],
  [pagePaths.projects, "Projetos", "Projects"],
  ["/articles", "Artigos", "Articles"],
  ["/setup", "Ambiente", "Setup"],
  ["/life", "Além do código", "Life skills"],
];
export const professionalLinks = [
  { label: "GitHub", href: "https://www.github.com/andredias20" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andredias20" },
];
