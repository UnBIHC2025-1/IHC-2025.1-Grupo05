# VerificaAAA

Ferramenta de verificação de acessibilidade desenvolvida para o projeto de IHC da Universidade de Brasília.

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação e Execução

1. **Clone o repositório e entre na pasta:**
   ```bash
   cd verificaAAA
   ```

2. **Instale as dependências:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Execute o projeto em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse o projeto:**
   - Abra [http://localhost:3000](http://localhost:3000) no seu navegador
   - O site estará disponível localmente

## 🔧 Como Fazer Modificações

### Estrutura do Projeto
```
verificaAAA/
├── app/                 # Páginas da aplicação (Next.js 13+ App Router)
│   ├── page.tsx         # Página inicial
│   ├── layout.tsx       # Layout principal
│   ├── projeto/         # Página do projeto
│   ├── equipe/          # Página da equipe
│   └── ...              # Outras páginas
├── components/          # Componentes React reutilizáveis
├── styles/             # Estilos globais
├── public/             # Arquivos públicos (imagens, etc.)
├── next.config.mjs     # Configuração do Next.js
└── package.json        # Dependências e scripts
```

### Fazendo Modificações

1. **Para modificar páginas:**
   - Edite os arquivos em `app/`
   - Cada pasta representa uma rota (ex: `app/projeto/page.tsx`)

2. **Para modificar componentes:**
   - Edite os arquivos em `components/`
   - Os componentes são reutilizáveis em várias páginas

3. **Para modificar estilos:**
   - O projeto usa Tailwind CSS
   - Edite as classes diretamente nos componentes
   - Para estilos globais, edite `styles/globals.css`

4. **Para adicionar imagens:**
   - Coloque as imagens em `public/`
   - Referencie como `/nome-da-imagem.png`

### Testando Modificações

1. **Em desenvolvimento:**
   ```bash
   npm run dev
   ```
   - As mudanças aparecem automaticamente (hot reload)

2. **Build local para testar produção:**
   ```bash
   npm run build
   npm start
   ```

## 📦 Deploy no GitHub Pages

### Deploy Automático (Recomendado)

```bash
npm run deploy
```

Este comando:
- Faz o build do projeto
- Cria o arquivo `.nojekyll` (importante!)
- Faz deploy para o branch `gh-pages`

### Deploy Manual (Se necessário)

Se o deploy automático não funcionar:

```bash
# 1. Build do projeto
npm run build

# 2. Criar arquivo .nojekyll
touch out/.nojekyll

# 3. Deploy manual
cd out
git init
git remote add origin https://github.com/unbihc2025-1/IHC-2025.1-Grupo05.git
git checkout -b gh-pages
git add .
git commit -m "Deploy manual"
git push -f origin gh-pages
```

### Configuração do GitHub Pages

1. Vá em **Settings > Pages** no repositório
2. **Source:** `gh-pages` branch
3. **Folder:** `/ (root)`
4. Salve as configurações

### Solução de Problemas de Deploy

#### Erro 404 nos assets (CSS, JS, fontes)

Se os recursos não carregarem (erro 404):

1. **Verifique se o arquivo `.nojekyll` existe:**
   ```bash
   curl "https://raw.githubusercontent.com/unbihc2025-1/IHC-2025.1-Grupo05/gh-pages/.nojekyll"
   ```

2. **Se não existir, faça deploy manual:**
   ```bash
   npm run deploy:clean
   ```

3. **Verifique a configuração do GitHub Pages:**
   - Source: `gh-pages` branch
   - Folder: `/ (root)`

#### Cache do navegador

- Use Ctrl+Shift+R (ou Cmd+Shift+R) para forçar reload
- Teste em aba anônima
- Aguarde alguns minutos após o deploy

## ⚙️ Configuração do Next.js

### next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Exportação estática
  basePath: '/IHC-2025.1-Grupo05', // Nome do repositório
  trailingSlash: true,
  assetPrefix: '/IHC-2025.1-Grupo05', // Prefixo para recursos estáticos
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

### Scripts Disponíveis

```json
{
  "scripts": {
    "dev": "next dev",                    // Desenvolvimento local
    "build": "next build",                // Build de produção
    "deploy": "npm run build && touch out/.nojekyll && gh-pages -d out",
    "deploy:clean": "npm run build && touch out/.nojekyll && echo 'Build timestamp: $(date)' > out/build-info.txt && gh-pages -d out"
  }
}
```

## 🛠️ Tecnologias Utilizadas

- **Next.js 15.2.4** - Framework React
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de CSS
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **gh-pages** - Deploy para GitHub Pages

## 📁 Estrutura Completa

```
verificaAAA/
├── app/                 # Páginas da aplicação
│   ├── page.tsx         # Página inicial
│   ├── layout.tsx       # Layout principal
│   ├── globals.css      # Estilos globais
│   ├── projeto/         # Página do projeto
│   ├── equipe/          # Página da equipe
│   ├── objetivos/       # Página de objetivos
│   ├── metodologia/     # Página de metodologia
│   ├── inovacao/        # Página de inovação
│   └── resultados/      # Página de resultados
├── components/          # Componentes React
├── styles/             # Estilos globais
├── public/             # Arquivos públicos
├── out/                # Build estático (gerado)
├── next.config.mjs     # Configuração do Next.js
├── package.json        # Dependências e scripts
├── tailwind.config.ts  # Configuração do Tailwind
└── tsconfig.json       # Configuração do TypeScript
```

## 🌐 URLs

- **Desenvolvimento:** [http://localhost:3000](http://localhost:3000)
- **Produção:** [https://unbihc2025-1.github.io/IHC-2025.1-Grupo05/](https://unbihc2025-1.github.io/IHC-2025.1-Grupo05/)

## 🤝 Contribuição

1. Faça suas modificações
2. Teste localmente com `npm run dev`
3. Faça o deploy com `npm run deploy`
4. Verifique se tudo está funcionando no GitHub Pages

## 📝 Notas Importantes

- **Sempre use `--legacy-peer-deps`** ao instalar dependências
- **O arquivo `.nojekyll` é essencial** para o GitHub Pages funcionar
- **Aguarde alguns minutos** após o deploy para as mudanças aparecerem
- **Teste em aba anônima** se houver problemas de cache 