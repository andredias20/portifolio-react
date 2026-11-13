# Portfólio de André Dias

Site pessoal bilíngue (PT-BR/EN) com trajetória profissional, projetos, artigos, ambiente e interesses pessoais. Visual escuro com verde, referências a terminal, Linux e hardware.

## Desenvolvimento

Use Node **22.13.1**, definido em `.nvmrc` (npm acompanha a instalação do Node):

```sh
nvm use
npm ci
npm run dev
```

Use `npm ci` em checkouts limpos. Alterações intencionais de dependências devem atualizar e versionar `package.json` e `package-lock.json` juntos.

## Verificação

```sh
npm run lint
npm run build
npx playwright install chromium
npm test
```

O CI em `.github/workflows/ci.yml` usa o Node do `.nvmrc`, instala com `npm ci`, executa lint/build e os testes Chromium. As verificações cobrem navegação, idioma persistido, menu mobile, diálogo de fotos e foco, comandos, sexta-feira no fuso de São Paulo e limite de 11 interações compartilhadas. As sete rotas são verificadas em PT/EN nas larguras 320, 390, 768 e 1440 px.

Os testes isolam serviços externos: não validam reprodução Spotify nem entrega real ao GA4. Os artefatos ficam em `test-results/`, ignorado pelo Git. Para servir o build local: `npm run preview`.

## Estrutura atual

```text
src/
  analytics/                # Eventos GA4 e observação das interações
  assets/                   # Fotos WebP e retrato
  personal-projects/        # Uma pasta independente por projeto
    portfolio/
      metadata.ts           # Título, descrição, tags e prévia
      Page.tsx              # Página carregada sob demanda
      portfolio.css         # Estilos locais
      architecture.svg      # Diagrama da implementação
  portfolio/
    pages/                  # Seis páginas principais
    messages/               # Textos PT/EN por domínio
    styles/                 # Tokens e estilos por área/componente
    career.ts               # Experiências e cursos
    articles.ts             # Notas técnicas bilíngues
    interests.ts            # Interesses pessoais
    content.ts              # Idiomas, navegação e links profissionais
    projects.ts             # Registro de metadados e carregamento das páginas
    portfolio.css           # Entrada dos estilos
  App.tsx                   # Layout, rotas e preferência de idioma
  main.tsx
public/favicon.svg
```

A interface antiga foi removida. Use a estrutura acima ao acrescentar conteúdo.

## Páginas e conteúdo

- `/`: apresentação curta e caminhos para as áreas do site.
- `/about`: atuação profissional, contribuições, experiência e formação.
- `/projects` e `/projects/:slug`: vitrine e estudos de caso.
- `/articles`: notas técnicas; a primeira descreve a estrutura deste site.
- `/setup`: ferramentas, equipamentos, fotos em camadas e terminal.
- `/life`: interesses pessoais, fotos e playlist Spotify.

Cada assunto tem uma página responsável. Não duplique música, trajetória ou fotos em outras áreas para preencher espaço. A navegação de rodapé conecta as partes.

O tema usa tokens em `styles/tokens.css`. Os seletores estruturais usam classes `site-*`; a tipografia das páginas principais é limitada a `.portfolio-page`. Cada projeto deve usar estilos locais com classes próprias ou CSS Modules. Resets básicos e tokens são compartilhados.

Para adicionar um projeto, consulte [src/personal-projects/README.md](src/personal-projects/README.md). Os metadados são carregados na vitrine; o código e CSS da página de detalhes entram sob demanda.

## Dados e limites

A trajetória foi organizada a partir dos JSONs e do Profile.pdf fornecidos. A graduação continua em andamento com previsão para **2027/2**. O término na Grownt é **outubro de 2026**, conforme o PDF mais recente. A quantidade de automações no Sicredi descreve um conjunto existente, não autoria integral. Resultados Docker/PostgreSQL são aproximados e autodeclarados; não representam medição independente.

O nome oficial do curso e os detalhes do exame Michigan ainda precisam de confirmação. Não preencher datas, credenciais, resultados ou instituições ausentes por inferência.

A playlist usa o player oficial do Spotify. A exibição da música atual depende de futura integração autenticada e não é anunciada como disponível.

Os contatos profissionais disponíveis são GitHub e LinkedIn, inclusive no rodapé. Nenhum telefone ou e-mail foi publicado a partir dos documentos sem definição explícita de contato público.

Analytics e configuração do painel: [docs/analytics.md](docs/analytics.md). Eventos personalizados são enviados ao GA4 em produção; visualizações de página também usam Vercel Web Analytics. Serviços externos podem ser bloqueados pelo navegador.

## Publicação

O build estático fica em `dist/`. A hospedagem deve fornecer fallback para `index.html` nas rotas da SPA. `vercel.json` contém essa regra para a Vercel, seguindo a [documentação oficial para Vite](https://vercel.com/docs/frameworks/frontend/vite).

## Licença

Projeto pessoal. Conteúdo, fotos, identidade visual e dados profissionais pertencem a André de Carli Dias.
