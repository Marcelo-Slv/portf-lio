# Marcelo Expedito · Portfólio

> Estudante de Desenvolvimento de Sistemas na ETEC Horácio Augusto da Silveira, apaixonado por tecnologia e focado em **Desenvolvimento Web**, **Banco de Dados** e **Análise de Sistemas**. Objetivo: carreira como **Desenvolvedor Full Stack**.

## 🔗 Acesse o site

### **[marcelo-slv.github.io/portf-lio](https://marcelo-slv.github.io/portf-lio/)**

## ✨ Sobre o projeto

Portfólio pessoal desenvolvido com **Angular 21** (standalone components), com visual dark, responsivo e acessível. O site é **pré-renderizado (SSG)** no build — cada rota vira um HTML estático com o conteúdo renderizado no servidor e **hidratado** no navegador. Conta com as seções:

- 🏠 **Início** — apresentação, disponibilidade e destaques
- 👤 **Sobre** — um pouco da minha trajetória e objetivos
- 🛠️ **Habilidades** — tecnologias e ferramentas que uso no dia a dia
- 🎓 **Formação** — formação técnica e próximos passos na carreira
- 📂 **Projetos** — projetos em desenvolvimento
- 📬 **Contato** — GitHub, LinkedIn e Instagram

## 📂 Projetos

### [SmartMarket Audit](https://github.com/Marcelo-Slv/smartmarket-audit) — *em desenvolvimento*

Sistema web para conferência de compras em mercados de autoatendimento: compara os produtos do banco de dados com os itens do fiscal, aponta divergências e gera relatórios com exportação em PDF.

- 🛠️ **PHP · MySQL · Relatórios em PDF**

## 🛠️ Tecnologias

- **Angular 21** com standalone components, signals e View Transitions
- **TypeScript**
- **HTML5 / CSS3** — tema dark com CSS custom properties e design responsivo
- **Pré-renderização (SSG)** com `outputMode: static` e hidratação via `provideClientHydration`
- **SEO** — título e canonical por rota, sitemap.xml, robots.txt, Open Graph/Twitter cards e structured data (JSON-LD)
- **Vitest** — testes unitários
- **GitHub Pages** — deploy via `angular-cli-ghpages` + **GitHub Actions** (CI com build, testes e publicação automática)

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

O build gera o site estático em `dist/apresentacao/browser` (uma pasta por rota, `index.csr.html` como fallback e `404.html` para URLs não encontradas).

## 🌐 Publicando no GitHub Pages

```bash
ng deploy
```

O deploy faz o build com o `baseHref` correto e publica na branch `gh-pages`. Para publicar em outro repositório, ajuste o `baseHref` no alvo `deploy` em `angular.json`.

> **Automação:** um push para a branch `main` dispara o workflow `.github/workflows/deploy.yml`, que roda os testes e publica automaticamente. O `ng deploy` manual continua funcionando para deploys fora do fluxo.

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
│   ├── app.config.ts      # Configuração (router, view transitions, hidratação)
│   ├── app.routes.ts      # Rotas (lazy loading + título por rota)
│   ├── app.ts             # Componente raiz (canonical por rota no SSR)
│   ├── main.server.ts     # Bootstrap do SSR/SSG
│   ├── server.ts          # Entry do SSR (AngularAppEngine)
│   └── reveal.directive.ts# Animação de scroll reveal
├── public/
│   ├── 404.html           # Página de erro do GitHub Pages
│   ├── sitemap.xml        # Sitemap para indexação
│   ├── robots.txt         # Diretivas para crawlers
│   └── og-image.png       # Imagem para compartilhamento social
└── styles.css             # Tema global
```

---

Feito com 💛 por [Marcelo Expedito](https://github.com/Marcelo-Slv).
