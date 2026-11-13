import type { Localized } from "./content";

export const personalInterests: {
  id: string;
  title: Localized;
  paragraphs: Localized[];
  tools?: (string | Localized)[];
}[] = [
  {
    id: "bike",
    title: {
      pt: "Bicicleta, carros e movimento",
      en: "Cycling, cars and motion",
    },
    paragraphs: [
      {
        pt: "Andar de bicicleta é uma das coisas que gosto de fazer fora da tela. Carros e velocidade também fazem parte dos meus interesses — esse lado pessoal tem espaço aqui tanto quanto o código.",
        en: "Cycling is one of the things I enjoy away from the screen. Cars and speed are also among my interests — that personal side belongs here just as much as code.",
      },
    ],
  },
  {
    id: "guitar",
    title: { pt: "Violão", en: "Guitar" },
    paragraphs: [
      {
        pt: "Tocar violão faz parte da minha vida fora do trabalho. É outro jeito de aprender e experimentar, com espaço para a música entre as outras coisas que gosto de fazer.",
        en: "Playing guitar is part of my life outside work. It’s another way to learn and experiment, with room for music among the other things I enjoy.",
      },
    ],
  },
  {
    id: "hardware",
    title: { pt: "PCs, hardware e Linux", en: "PCs, hardware and Linux" },
    paragraphs: [
      {
        pt: "Gosto de montagem e manutenção de PCs, hardware e servidores. Minha curiosidade por tecnologia vai além do software: também gosto de entender a máquina que faz tudo rodar.",
        en: "I enjoy PC building and maintenance, hardware and servers. My curiosity about technology extends beyond software: I also like understanding the machine that runs it.",
      },
    ],
  },
  {
    id: "design",
    title: { pt: "Um lado visual", en: "A visual side" },
    paragraphs: [
      {
        pt: "CorelDraw, Photoshop e Illustrator também fazem parte das coisas com que já mexi. Esse lado visual complementa meu interesse por construir e experimentar.",
        en: "CorelDraw, Photoshop and Illustrator are also among the tools I’ve worked with. That visual side complements my interest in building and experimenting.",
      },
    ],
    tools: ["CorelDraw", "Photoshop", "Illustrator"],
  },
  {
    id: "gym",
    title: { pt: "Academia", en: "Gym" },
    paragraphs: [
      {
        pt: "Academia é mais uma parte da minha vida fora do computador. Quero que este espaço também mostre esses interesses, além das tecnologias e das experiências profissionais.",
        en: "The gym is another part of my life away from the computer. I want this space to show those interests alongside technologies and professional experience.",
      },
    ],
  },
  {
    id: "ai",
    title: {
      pt: "Orquestração de IA nas horas vagas",
      en: "AI Orchestrator in my spare time",
    },
    paragraphs: [
      {
        pt: "No tempo livre, experimento agentes de IA e MCP, conectando ferramentas e bases de conhecimento. É mais um lugar onde minha curiosidade vira pesquisa e prática.",
        en: "In my free time, I experiment with AI agents and MCP, connecting tools and knowledge bases. It’s another place where my curiosity turns into research and practice.",
      },
    ],
    tools: [{ pt: "Agentes de IA", en: "AI agents" }, "MCP", "Obsidian"],
  },
];
