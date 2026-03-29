<div align="center">

# DevFinder Pro 🔍

### Dashboard web para busca de perfis do GitHub • React + TypeScript

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## 📖 Sobre o Projeto

**DevFinder Pro** é um dashboard web que permite buscar qualquer perfil do GitHub e visualizar estatísticas detalhadas, gráfico de linguagens mais usadas e repositórios filtráveis — tudo em uma interface moderna e responsiva.

> Explore o universo de qualquer desenvolvedor com apenas um nome de usuário! 🚀

---

## ✨ Funcionalidades

- 🔎 **Busca de perfis** — encontre qualquer usuário pelo username do GitHub
- 📊 **Estatísticas do perfil** — seguidores, seguindo, repositórios públicos e mais
- 🥧 **Gráfico de linguagens** — visualização das linguagens mais utilizadas nos repositórios
- 📁 **Repositórios filtráveis** — filtre e navegue pelos projetos do usuário
- 📱 **Design responsivo** — adaptado para desktop e mobile

---

## 🛠 Tecnologias

- **React 19** — biblioteca para construção da interface
- **TypeScript** — tipagem estática e segurança no desenvolvimento
- **Vite** — build tool rápida e moderna
- **Tailwind CSS** — estilização utilitária
- **Recharts** — gráficos interativos de linguagens
- **TanStack Query** — gerenciamento de estado e cache de requisições
- **Axios** — requisições HTTP para a GitHub REST API
- **Zustand** — gerenciamento de estado global
- **React Router DOM** — navegação entre páginas

---

## 📁 Estrutura do Projeto

```
devfinder-pro/
├── public/
└── src/
    ├── api/
    │   ├── githubClient.ts     # instância axios + token
    │   ├── userApi.ts          # busca de perfil do usuário
    │   ├── reposApi.ts         # listagem de repositórios
    │   └── types.ts            # tipagens da API
    ├── components/
    │   ├── charts/             # gráfico de linguagens
    │   ├── profile/            # cards de perfil e estatísticas
    │   ├── repos/              # lista e filtros de repositórios
    │   └── ui/                 # componentes reutilizáveis
    ├── hooks/                  # custom hooks (react-query)
    ├── pages/
    │   ├── HomePage.tsx        # busca de usuário
    │   └── ProfilePage.tsx     # dashboard do perfil
    ├── store/                  # estado global (zustand)
    └── utils/                  # funções utilitárias
```

---

## 🚀 Como Executar

1. Clone este repositório

```bash
git clone https://github.com/GeozedequeGuimaraes/devfinder-pro.git
```

2. Instale as dependências

```bash
npm install
```

3. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

> Edite o arquivo `.env` e adicione seu token do GitHub:

```env
VITE_GITHUB_TOKEN=seu_token_aqui
```

4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

---

## 👤 Autor

<div align="center">

**Geozedeque Guimarães**

Estudante de Ciência da Computação — CIn-UFPE

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/GeozedequeGuimaraes)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/geozedeque-guimaraes)

</div>
