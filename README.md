# Marcelo Expedito · Portfólio

> Estudante de Desenvolvimento de Sistemas na ETEC Horácio Augusto da Silveira, apaixonado por tecnologia e focado em **Desenvolvimento Web**, **Banco de Dados** e **Análise de Sistemas**. Objetivo: carreira como **Desenvolvedor Full Stack**.

## 🔗 Acesse o site

### **[marcelo-slv.github.io/portf-lio](https://marcelo-slv.github.io/portf-lio/)**

## ✨ Sobre o projeto

Portfólio pessoal desenvolvido com **Angular 21** (standalone components), com visual dark, responsivo e acessível. Conta com as seções:

- 🏠 **Início** — apresentação, disponibilidade e destaques
- 👤 **Sobre** — um pouco da minha trajetória e objetivos
- 🛠️ **Habilidades** — tecnologias e ferramentas que uso no dia a dia
- 🎓 **Formação** — formação técnica e próximos passos na carreira
- 📂 **Projetos** — projetos em desenvolvimento
- 📬 **Contato** — GitHub, LinkedIn e Instagram

## 🛠️ Tecnologias

- **Angular 21** com standalone components, signals e View Transitions
- **TypeScript**
- **HTML5 / CSS3** — tema dark com CSS custom properties e design responsivo
- **Vitest** — testes unitários
- **GitHub Pages** — deploy via `angular-cli-ghpages`

## 🚀 Rodando localmente

Pré-requisito: **Node.js** e **npm**.

```bash
# instala as dependências
npm install

# sobe o servidor de desenvolvimento
npm start
# ou
ng serve
```

Abra o navegador em `http://localhost:4200/`.

## 📦 Build de produção

```bash
ng build
```

O build é gerado em `dist/apresentacao/browser`.

## 🌐 Publicando no GitHub Pages

```bash
ng deploy
```

O deploy faz o build com o `baseHref` correto e publica na branch `gh-pages`. Para publicar em outro repositório, ajuste o `baseHref` no alvo `deploy` em `angular.json`.

## 🧪 Testes

```bash
ng test
```

## 📁 Estrutura

```
src/
├── app/
│   ├── pages/
│   │   ├── home/          # Início
│   │   ├── sobre/         # Sobre mim
│   │   ├── habilidades/   # Habilidades
│   │   ├── formacao/      # Formação
│   │   ├── projetos/      # Projetos
│   │   └── contato/       # Contato
│   ├── app.config.ts      # Configuração (router, view transitions)
│   ├── app.routes.ts      # Rotas
│   ├── app.ts             # Componente raiz
│   └── reveal.directive.ts# Animação de scroll reveal
└── styles.css             # Tema global
```

---

Feito com 💛 por [Marcelo Expedito](https://github.com/Marcelo-Slv).
