# Checklist pré-publicação

O que ainda impede a landing page de ir ao ar. Nada além disto deve restar.

| # | Item | Onde aparece | Tipo |
|---|------|--------------|------|
| 1 | **Foto profissional autorizada** | Sobre — **único selo âmbar na tela** | Conteúdo |
| 2 | **Nome profissional completo** | Sobre + Herói + Rodapé (exibe interino "Anna Luiza", sem selo) | Conteúdo |
| 3 | **Conferir o número do WhatsApp dígito a dígito** — `(98) 97001-2369` → `wa.me/5598970012369` | CTAs já ativos; conferência é QA | Verificação |
| 4 | **Verificação de especialidades no CRO** | Nenhuma especialidade exibida até confirmar | Verificação |
| — | ~~Vetor do monograma~~ | Resolvido: pattern usa reconstrução fiel (~1,5%); vetor original faz swap quando chegar (`public/marca/README.md`) | — |

Na tela, o **único selo âmbar** restante é a **foto** (item 1). Os demais são
gates de verificação pré-publicação, não lacunas visíveis.

## Regras de redação já aplicadas
- Sempre "realiza" / "atende"; nunca "especialista em".
- Sem promessa de resultado. Sem antes/depois.

## SEO / GEO / AEO

Implementado (em `app/layout.tsx`, `components/JsonLd.tsx`, rotas de metadata e
`public/llms.txt`): metadata completa (canonical, Open Graph, Twitter, robots,
theme-color), `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, favicon
(`icon.svg`) + `apple-icon`, imagem de compartilhamento (`opengraph-image`),
JSON-LD em `@graph` (Dentist + WebSite + WebPage + FAQPage + Person) e `llms.txt`.

Pendências que dependem da cliente / do ambiente:

| # | Item | Onde entra | Tipo |
|---|------|-----------|------|
| 5 | **Domínio de produção** — confirmado `www.annaluizaodontologia.com.br` (canônico COM www em `site.url`); falta apenas apontar o DNS/hospedagem | canonical, OG, sitemap, robots, JSON-LD | Verificação |
| — | ~~Link do Perfil da Empresa no Google~~ | Resolvido: `location.googleMapsUrl` (Place ID) → `sameAs` + `hasMap` | — |
| — | ~~Coordenadas (lat/long)~~ | Resolvido: `location.geo` (-2.5635838, -44.3323919) → `geo` | — |

Ações off-site (não são código, mas fazem o SEO acontecer):
- Criar/otimizar o **Perfil da Empresa no Google** (maior fator de SEO local).
- Registrar o site no **Google Search Console** e enviar o `sitemap.xml`.
- Após publicar, validar o rich result da FAQ e do Dentist no teste de
  resultados aprimorados do Google.

## Fora do site por decisão (não são pendências)
- **Google (nota/avaliações):** bloco removido até haver volume de avaliações
  que ajude, em vez de pesar. Reintroduzir só com contagem confirmada.
- **Região atendida / imagem de mapa:** dispensados — o endereço fixo já
  resolve "consigo chegar?", e o link "Ver rota no mapa" cobre a navegação.
