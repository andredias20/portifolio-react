import type { Localized } from "../content";
export const messages = {
  about: {
    pt: "01 / SOBRE MIM",
    en: "01 / ABOUT",
  },
  greeting: {
    pt: "Prazer, André.",
    en: "Hey, I’m André.",
  },
  curiosityAsAStartingPoint: {
    pt: "Curiosidade como ponto de partida.",
    en: "Curiosity as a starting point.",
  },
  specialty: {
    pt: "Desenvolvimento de aplicações e sistemas",
    en: "Full Stack / Backend",
  },
  professionalSummary: {
    pt: "Trabalho com sistemas corporativos, microsserviços, integrações e automação. Minha experiência passa por Java, C#, Python e Go, conectando aplicações, dados e regras de negócio. Hoje sou Analista de Desenvolvimento no Sicredi.",
    en: "I work with corporate systems, microservices, integrations and automation. My experience spans Java, C#, Python and Go, connecting applications, data and business rules. Today I’m a Development Analyst at Sicredi.",
  },
  supportPerspective: {
    pt: "Ter começado em suporte e infraestrutura me aproximou dos problemas de quem usa o sistema. Levo essa perspectiva para o desenvolvimento: entender a necessidade, conversar com as outras áreas e acompanhar a solução além da implementação.",
    en: "Starting in support and infrastructure brought me closer to the problems faced by the people using the system. I bring that perspective to development: understanding the need, talking with other teams and following a solution beyond implementation.",
  },
  curiosityAtWork: {
    pt: "Várias das ideias que levei para as empresas e que deram mais certo começaram com uma pesquisa no meu tempo livre. Gosto de investigar uma possibilidade, entender como funciona e aplicar quando ela resolve um problema real.",
    en: "Several of the ideas I brought to companies that worked best started with research in my free time. I like investigating a possibility, understanding how it works and applying it when it solves a real problem.",
  },
} satisfies Record<string, Localized>;
