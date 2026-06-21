# Heleno Lisboa — Portfólio (React)

## ✅ Funcionalidades

### Projects
- Cards de projeto com imagem de capa
- Nome, descrição e tecnologias utilizadas
- Link de demonstração
- Link do repositório no GitHub
- Suporte para vídeo e PPT (quando disponível)

### Videos
- Cards de vídeo com:
  - Título
  - Descrição
  - Player do YouTube incorporado
  - Data de publicação

### Experience
- Seção de experiências profissionais

### Certificates
- Filtros
- Ordenação
- Lightbox para visualização

### Contact
- Área de contato

### Recursos Gerais
- Tema claro/escuro
- Idiomas PT-BR e EN
- Preferências salvas no LocalStorage
- Layout responsivo (Bento Grid)
- Navegação por abas
- Feedback visual (hover, foco de teclado e estados desabilitados)

---

## 🚀 Como Rodar Localmente

### Instalar dependências

```bash
npm install
```

### Iniciar ambiente de desenvolvimento

```bash
npm run dev
```

Abra:

```text
http://localhost:5173
```

### Build de produção

```bash
npm run build
```

---

## 📁 Estrutura

```text
src/
├── components/
│   ├── componentes reutilizáveis
│   ├── abas
│   ├── cards
│   ├── botões
│   └── lightbox
│
├── contexts/
│   ├── idioma (PT/EN)
│   └── tema (claro/escuro)
│
├── data/
│   ├── projetos
│   ├── vídeos
│   ├── experiências
│   └── certificados
│
├── hooks/
│   └── hooks customizados
│
├── pages/
│   └── Home
│
├── utils/
│   └── funções auxiliares
│
└── styles/
    └── estilos do projeto
```

---

## 🏗️ Padrões de Organização

### Context API

Cada Context é dividido em três arquivos:

```text
createContext (XContext.js)
Provider (XContext.jsx)
Hook de consumo (useX.js)
```

Isso evita misturar componentes e valores não-componentes no mesmo módulo.

### Componentes Reutilizáveis

Componentes como:

- SectionHeader
- LinkButton
- Tabs
- Cards

são reutilizados em várias áreas da aplicação para evitar duplicação de código.

### Dados Centralizados

Textos, links, datas e demais conteúdos ficam em:

```text
src/data/
```

Evitando conteúdo hardcoded dentro dos componentes JSX.

---

## 🛠️ Stack

- React 19
- Vite
- React Router DOM
- CSS Puro
- Space Grotesk
- JetBrains Mono
- ESLint
  - react-hooks
  - react-refresh

---

## 🎓 Projeto Acadêmico

Portfólio desenvolvido por Heleno Lisboa para o trabalho da faculdade.
