# Anna Luiza Odontologia — Landing Page

Página única, estática, mobile-first. Objetivo: marcar consulta pelo WhatsApp.
Next.js + TypeScript + Tailwind, `output: 'export'` (HTML/CSS/JS puro em `./out`).

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera ./out estático
```

## Onde mexer

- **Conteúdo:** `content/site.ts` — fonte de verdade única e versionada.
  Todo dado da cliente está como `pending('rótulo')`. Enquanto pending, ele
  aparece como **marcador âmbar VISÍVEL na tela** (não some no build). Para
  preencher, troque `pending('...')` pelo valor real.
- **Paleta e contraste:** `docs/design/paleta-contraste.md` — fonte de verdade
  de cor. Nenhuma cor nova sem uma linha na tabela. Resumo: petróleo é texto e
  ação; ciano é acento (só toca texto com petróleo do outro lado); foco e
  bordas funcionais são petróleo.
- **Seções:** `components/sections/*` — cascas na ordem do plano aprovado.

## Regras que não mudam

- Sem antes/depois. Sem promessa de resultado. (CFO / Código de Ética)
- Sem depoimento com nome ou foto sem autorização escrita.
- Sem dado de paciente. Sem formulário — a ação é o WhatsApp.
- CRO + responsável técnica em destaque na seção Sobre, além do rodapé.
- CTA de WhatsApp destaca por forma e peso, nunca por ciano.

## Status: scaffold

Estrutura, tokens e tipografia montados. Conteúdo pendente aguarda respostas
da cliente (itens listados em `content/site.ts`).
