import type { Localized } from "./content";

export interface CareerExperience {
  id: string;
  company: string;
  title: Localized;
  start: string;
  end: string | null;
  description: Localized;
  highlight: Localized;
  tags: (string | Localized)[];
}

export const experiences: CareerExperience[] = [
  {
    id: "sicredi",
    highlight: {
      pt: "Atuação em um conjunto existente de cerca de 90 automações em Python, com orquestração via Prefect.",
      en: "Work on an existing set of around 90 Python automations, orchestrated with Prefect.",
    },
    company: "Sicredi",
    title: {
      pt: "Analista de Desenvolvimento",
      en: "Development Analyst",
    },
    start: "2026-09",
    end: null,
    description: {
      pt: "Atuação em um conjunto existente de cerca de 90 automações em Python, com abordagens distintas: automação de navegador com Playwright ou Selenium e rotinas sem interface visual que consultam visões extraídas de bases do Denodo e APIs. Orquestração com Prefect e processos de execução em máquinas virtuais Windows.",
      en: "I work with an existing set of around 90 Python automations, including browser automation with Playwright or Selenium and background routines querying views extracted from Denodo databases and APIs. Prefect orchestrates workers on Windows VMs.",
    },
    tags: [
      "Python",
      "Playwright",
      "Selenium",
      "Prefect",
      "Denodo",
      { pt: "Máquinas virtuais Windows", en: "Windows VMs" },
    ],
  },
  {
    id: "grownt",
    highlight: {
      pt: "Evolução de um sistema corporativo: regras de negócio, APIs, consultas e relatórios com C# e ASP.NET Core.",
      en: "Evolving a corporate system: business rules, APIs, queries and reports with C# and ASP.NET Core.",
    },
    company: "Grownt",
    title: {
      pt: "Desenvolvedor de aplicações e sistemas",
      en: "Full Stack Developer",
    },
    start: "2025-09",
    end: "2026-10",
    description: {
      pt: "Atuei no desenvolvimento e na manutenção evolutiva de um sistema web corporativo com C#, ASP.NET Core, Entity Framework Core e Oracle Database. Desenvolvi funcionalidades entre interfaces Razor, APIs REST e persistência, em arquitetura em camadas. Trabalhei na evolução de regras de negócio e modelos de dados, na otimização de consultas e na implementação de filtros e relatórios consistentes, preservando contratos legados e regras de acesso. Também desenvolvi relatórios em Excel e PDF e realizei a manutenção de processos em segundo plano com Hangfire. Usei IA para acelerar entregas mais triviais e padronizar implementações.",
      en: "I developed and maintained a corporate web system with C#, ASP.NET Core, Entity Framework Core and Oracle. My work covered Razor interfaces, REST APIs, business rules, data models and query optimization while preserving legacy contracts and access rules. I built Excel/PDF reports and maintained background jobs with Hangfire. I also used AI to speed up simpler deliveries and standardize implementations.",
    },
    tags: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "Oracle",
      "Razor",
      "Hangfire",
    ],
  },
  {
    id: "giro-tech",
    highlight: {
      pt: "Imagens Docker de cerca de 1 GB para 200 MB com compilação em múltiplas etapas.",
      en: "Docker images reduced from about 1 GB to 200 MB with multi-stage builds.",
    },
    company: "Giro.Tech",
    title: {
      pt: "Desenvolvedor de aplicações e sistemas",
      en: "Full Stack Developer",
    },
    start: "2024-05",
    end: "2025-07",
    description: {
      pt: "Atuei em microsserviços para o ecossistema de crédito com Java, Spring, JUnit, Python e Go. Trabalhei em integrações orientadas a eventos com Kafka e Amazon SQS, persistência com MongoDB/DocumentDB e monitoramento em ambiente de homologação. Otimizei imagens Docker com compilação em múltiplas etapas, de cerca de 1 GB para 200 MB, e refatorei serviços Python com arquitetura limpa e SOLID.",
      en: "I developed microservices for the credit ecosystem with Java, Spring, JUnit, Python and Go. I worked on integrations using Kafka and Amazon SQS, persistence with MongoDB/DocumentDB and staging metrics. I optimized Docker images with multi-stage builds, from about 1 GB to 200 MB, and refactored Python services using Clean Architecture and SOLID.",
    },
    tags: [
      "Java",
      "Spring",
      "Python",
      "Go",
      "Kafka",
      "Amazon SQS",
      "MongoDB / DocumentDB",
      "Docker",
    ],
  },
  {
    id: "maker",
    highlight: {
      pt: "Consulta crítica de cerca de cinco minutos para cinco segundos com índices compostos em PostgreSQL.",
      en: "A critical query reduced from about five minutes to five seconds with composite PostgreSQL indexes.",
    },
    company: "Maker Soluções Tecnológicas",
    title: {
      pt: "Desenvolvedor de software",
      en: "Software Developer",
    },
    start: "2023-08",
    end: "2024-02",
    description: {
      pt: "Atualizei, corrigi e desenvolvi integrações no HorizonHub entre ERPs, e-commerce e marketplaces. Desenvolvi conectores ETL com Java, Spring Integration, Groovy e JOLT, usando PostgreSQL, SQL Server e APIs REST. Contribuí com índices compostos em PostgreSQL que reduziram uma consulta crítica de cerca de cinco minutos para cinco segundos.",
      en: "I maintained and developed integrations in HorizonHub, connecting ERPs, e-commerce platforms and marketplaces. I built ETL connectors with Java, Spring Integration, Groovy and JOLT, using PostgreSQL, SQL Server and REST APIs. I contributed composite PostgreSQL indexes that reduced a critical query from about five minutes to five seconds.",
    },
    tags: [
      "Java",
      "Spring Integration",
      "Groovy",
      "JOLT",
      "PostgreSQL",
      "SQL Server",
      "ETL",
    ],
  },
  {
    id: "inside-infra",
    highlight: {
      pt: "Instalações em Windows Server e SQL Server, com automações em Python e Batch.",
      en: "Windows Server and SQL Server deployments, with Python and Batch automation.",
    },
    company: "Inside Sistemas",
    title: {
      pt: "Assistente de infraestrutura",
      en: "Infrastructure Assistant",
    },
    start: "2022-11",
    end: "2023-08",
    description: {
      pt: "Configurei e mantive instalações de aplicações em Windows Server com SQL Server, apoiando clientes e a equipe de suporte e reportando erros críticos ao desenvolvimento. Trabalhei com redes, APIs REST, automações em Python e Batch e monitoramento dos fluxos de integração junto ao time de desenvolvimento.",
      en: "I configured and maintained application installations on Windows Server with SQL Server, supporting customers and the support team and reporting critical application issues to developers. I worked with networks, REST APIs, Python and Batch automation, and pipeline monitoring in collaboration with the development team.",
    },
    tags: [
      "Windows Server",
      "SQL Server",
      "Python",
      "Batch",
      "REST APIs",
      { pt: "Redes", en: "Networks" },
    ],
  },
  {
    id: "inside-helpdesk",
    highlight: {
      pt: "Suporte a ERP, auditoria com SQL e documentação para clientes e equipe.",
      en: "ERP support, SQL audits and documentation for customers and teammates.",
    },
    company: "Inside Sistemas",
    title: {
      pt: "Analista de suporte técnico",
      en: "Helpdesk Analyst",
    },
    start: "2022-03",
    end: "2022-11",
    description: {
      pt: "Atuei no suporte de um ERP para empresas de segurança eletrônica, atendendo demandas do sistema e questões técnicas. Realizei consultas SQL Server para auditoria, documentei processos e manuais para clientes e registrei atendimentos para análise e melhoria contínua.",
      en: "I supported an ERP for electronic security companies, handling application and technical requests. I ran SQL Server queries for audits, documented support processes and customer manuals, and recorded service actions to support follow-up analysis and improvements.",
    },
    tags: [
      "ERP",
      "SQL Server",
      { pt: "Suporte técnico", en: "Technical support" },
      { pt: "Documentação", en: "Documentation" },
    ],
  },
  {
    id: "german-tech",
    highlight: {
      pt: "Resolução de problemas técnicos e levantamento de requisitos junto aos clientes.",
      en: "Technical troubleshooting and requirements gathering with customers.",
    },
    company: "German Tech Sistemas",
    title: {
      pt: "Analista de suporte técnico",
      en: "Technical Support Analyst",
    },
    start: "2021-01",
    end: "2022-03",
    description: {
      pt: "Atuei no suporte ao cliente e na resolução de problemas técnicos. Também participei do levantamento de requisitos de novas funcionalidades: fazia o primeiro contato e organizava informações para detalhamento com o time de análise.",
      en: "I provided customer support, solved technical issues and helped gather requirements for new system features. I handled initial customer contact and prepared information for the analysis team to refine and discuss.",
    },
    tags: [
      { pt: "Suporte técnico", en: "Technical support" },
      { pt: "Levantamento de requisitos", en: "Requirements gathering" },
    ],
  },
];

export const courses: { id: string; title: Localized }[] = [
  {
    id: "0",
    title: {
      pt: ".NET 6: criando uma web API",
      en: ".NET 6: building a web API",
    },
  },
  {
    id: "1",
    title: {
      pt: "Michigan Language Assessment",
      en: "Michigan Language Assessment",
    },
  },
  {
    id: "2",
    title: {
      pt: "C#: explorando a linguagem",
      en: "C#: exploring the language",
    },
  },
  {
    id: "3",
    title: {
      pt: "PostgreSQL",
      en: "PostgreSQL",
    },
  },
  {
    id: "4",
    title: {
      pt: "Java COMPLETO Programação Orientada a Objetos + Projetos",
      en: "Complete Java: Object-Oriented Programming + Projects",
    },
  },
];
