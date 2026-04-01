<div align="center">

# DevFinder Pro

Dashboard web para busca de perfis do GitHub

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## Demo

<div align="center">
<img src="screenshots/demo.gif" alt="Demo" width="700">
</div>

---

## Sobre o projeto

DevFinder Pro busca qualquer perfil do GitHub e exibe estatísticas detalhadas: repositórios, seguidores, seguindo, stars totais, gráfico de linguagens mais usadas e repositórios filtráveis por linguagem, ordenação e forks. O histórico de buscas fica salvo no localStorage. Há dark/light mode e o design é responsivo para desktop e mobile.

---

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Recharts para gráficos interativos de linguagens
- TanStack Query para gerenciamento de estado e cache
- Axios para requisições à GitHub REST API
- Zustand para estado global
- React Router DOM para navegação

---

## Estrutura

```
devfinder-pro/
├── public/
└── src/
    ├── api/
    │   ├── githubClient.ts
    │   ├── userApi.ts
    │   ├── reposApi.ts
    │   └── types.ts
    ├── components/
    │   ├── charts/
    │   ├── profile/
    │   ├── repos/
    │   └── ui/
    ├── hooks/
    ├── pages/
    │   ├── HomePage.tsx
    │   └── ProfilePage.tsx
    ├── store/
    └── utils/
```

---

## Como executar

1. Clone o repositório:

```bash
git clone https://github.com/GeozedequeGuimaraes/devfinder-pro.git
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o `.env` e adicione seu token do GitHub:

```env
VITE_GITHUB_TOKEN=seu_token_aqui
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

---

## Screenshots

<div align="center">
<img src="screenshots/01-home-desktop.png" alt="Home" width="700">
</div>

<div align="center">
<img src="screenshots/02-profile-top-desktop.png" alt="Perfil" width="700">
</div>

<div align="center">
<img src="screenshots/03-profile-charts-desktop.png" alt="Charts" width="700">
</div>

<div align="center">
<img src="screenshots/04-profile-repos-desktop.png" alt="Repos" width="700">
</div>

<p align="center">
<img src="screenshots/05-home-mobile.png" width="280" alt="Home Mobile">
&nbsp;&nbsp;&nbsp;
<img src="screenshots/06-profile-mobile.png" width="280" alt="Profile Mobile">
</p>

---

## Autor

<div align="center">

Geozedeque Guimarães — Estudante de Ciência da Computação, CIn-UFPE

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/GeozedequeGuimaraes)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/geozedeque-guimaraes)

</div>
