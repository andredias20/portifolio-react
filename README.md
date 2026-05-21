# André Dias Portfolio

Portfolio pessoal/profissional com objetivo de apresentar experiência, stack técnica, projetos e interesses técnicos em uma interface limpa, responsiva e com aparência de produto.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- ESLint

## Requisitos

Este projeto usa versões recentes do Vite e Tailwind. Use Node.js compatível com o arquivo `.nvmrc`.

```bash
nvm use
```

Versão esperada atualmente:

```txt
v22.13.1
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois abra a URL exibida pelo Vite no terminal.

## Scripts

```bash
npm run dev
```

Inicia o servidor de desenvolvimento.

```bash
npm run build
```

Executa a checagem TypeScript e gera a versão de produção em `dist/`.

```bash
npm run preview
```

Serve localmente a build de produção.

```bash
npm run lint
```

Executa ESLint no projeto.

## Estrutura do projeto

```txt
src/
  assets/
  components/
    Header/
  styles/
  types/
  App.tsx
  main.tsx
```

Organização pretendida:

- `src/components`: componentes visuais da interface.
- `src/types`: contratos TypeScript usados pelos dados e componentes.
- `src/styles`: tokens e estilos globais.
- `src/assets`: imagens, logos e outros assets usados pela aplicação.

## Direção visual

O portfólio segue uma estética escura, limpa e técnica, inspirada em interfaces SaaS:

- fundo escuro neutro;
- cards e bordas discretas;
- azul como destaque principal;
- verde para apoio técnico;
- foco em legibilidade, responsividade e clareza visual.

## Status

Projeto em desenvolvimento.

Próximas etapas planejadas:

- finalizar o Header responsivo;
- criar Hero, Stack, Experience, Projects, Lab e Contact;
- mover conteúdo para arquivos em `src/data`;
- adicionar estados visuais e responsividade completa;
- preparar deploy público.

## Licença

Projeto pessoal. O conteúdo, identidade visual e dados profissionais pertencem a André de Carli Dias.
