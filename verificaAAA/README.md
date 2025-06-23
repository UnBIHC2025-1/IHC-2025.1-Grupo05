# VerificaAAA

Ferramenta de verificação de acessibilidade desenvolvida para o projeto de IHC da Universidade de Brasília.

## Configuração para GitHub Pages

Este projeto está configurado para ser hospedado no GitHub Pages. Para garantir que funcione corretamente, as seguintes configurações foram aplicadas:

### next.config.mjs

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Exportação estática
  basePath: '/IHC-2025.1-Grupo05', // Nome do repositório
  trailingSlash: true,
  assetPrefix: '/IHC-2025.1-Grupo05/', // Prefixo para recursos estáticos
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

### Configurações Importantes

1. **output: 'export'** - Gera arquivos estáticos
2. **basePath** - Define o caminho base do repositório
3. **assetPrefix** - Garante que recursos estáticos (CSS, JS, fontes) sejam carregados corretamente
4. **trailingSlash: true** - Adiciona barra no final das URLs
5. **images: { unoptimized: true }** - Necessário para exportação estática

### Scripts de Deploy

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "deploy": "npm run build && touch out/.nojekyll && gh-pages -d out"
  }
}
```

### Como Fazer Deploy

1. Certifique-se de que o `gh-pages` está instalado:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Execute o deploy:
   ```bash
   npm run deploy
   ```

3. O arquivo `.nojekyll` é criado automaticamente para evitar que o GitHub Pages processe o site com Jekyll.

### Solução para Problemas de Recursos Estáticos

Se você encontrar erros 404 para arquivos CSS, JS ou fontes, verifique se:

1. O `assetPrefix` está configurado corretamente no `next.config.mjs`
2. O `basePath` corresponde ao nome do seu repositório
3. O arquivo `.nojekyll` existe na pasta `out/`

### Estrutura do Projeto

```
verificaAAA/
├── app/                 # Páginas da aplicação
├── components/          # Componentes React
├── styles/             # Estilos globais
├── public/             # Arquivos públicos
├── out/                # Build estático (gerado)
├── next.config.mjs     # Configuração do Next.js
└── package.json        # Dependências e scripts
```

### Tecnologias Utilizadas

- Next.js 15.2.4
- React 19
- TypeScript
- Tailwind CSS
- Radix UI
- Lucide React

### Desenvolvimento Local

```bash
npm install
npm run dev
```

O site estará disponível em `http://localhost:3000`

### Deploy

```bash
npm run deploy
```

O site será publicado em `https://unbihc2025-1.github.io/IHC-2025.1-Grupo05/` 