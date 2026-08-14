# Paleta aplicada — Anna Luiza Odontologia

Referência de cor e contraste do projeto. **Fonte de verdade para
qualquer decisão de cor.** Antes de usar uma cor como texto, borda,
ícone ou fundo, confira aqui. Se a combinação não está na lista de
permitidas, não use.

Contrastes calculados pela fórmula WCAG 2.1 (luminância relativa
sRGB, razão `(L1+0.05)/(L2+0.05)`). Limiares:

- **Texto normal:** AA ≥ 4.5:1 · AAA ≥ 7:1
- **Texto grande** (≥ 24px, ou ≥ 19px bold): AA ≥ 3:1 · AAA ≥ 4.5:1
- **Não-textual** (bordas funcionais, ícones informativos, foco):
  ≥ 3:1 (WCAG 1.4.11)

---

## Tokens

| Token            | Hex       | Papel                                              |
|------------------|-----------|----------------------------------------------------|
| `petroleo`       | `#002F4A` | Cor de texto e de ação. Primária.                  |
| `ciano`          | `#00C9D1` | **Acento apenas.** Nunca texto sobre branco.       |
| `branco`         | `#FFFFFF` | Fundo base.                                        |
| `petroleo-muted` | `#4D6D80` | Texto secundário sobre branco (petróleo ~70%).     |

`petroleo-muted` é um sólido derivado do petróleo a ~70% sobre branco,
fixado como cor cheia para não depender de opacidade (opacidade sobre
fundo variável quebra o contraste).

---

## Luminância relativa (referência de cálculo)

| Cor        | L relativa |
|------------|-----------|
| `#FFFFFF`  | 1.000     |
| `#00C9D1`  | 0.4638    |
| `#4D6D80`  | 0.1915    |
| `#002F4A`  | 0.0253    |

---

## Combinações PERMITIDAS

| Frente (texto/ícone) | Fundo      | Razão   | Veredito                          |
|----------------------|------------|---------|-----------------------------------|
| `petroleo` #002F4A   | branco     | 13.9:1  | ✅ AAA — texto de corpo e títulos |
| branco #FFFFFF       | `petroleo` | 13.9:1  | ✅ AAA — texto sobre bloco escuro |
| `petroleo` #002F4A   | `ciano`    | 6.8:1   | ✅ AA normal · AAA grande         |
| `ciano` #00C9D1      | `petroleo` | 6.8:1   | ✅ AA normal — acento sobre escuro|
| `petroleo-muted`     | branco     | 5.5:1   | ✅ AA normal — texto secundário   |

Regra que sai daqui: **ciano só toca texto quando um dos dois lados é
petróleo.** É esse o único jeito de o ciano aparecer perto de conteúdo
legível.

---

## Combinações PROIBIDAS

| Frente             | Fundo   | Razão  | Por quê                                     |
|--------------------|---------|--------|---------------------------------------------|
| `ciano` #00C9D1    | branco  | 2.0:1  | ❌ Reprova AA, AAA e até o mínimo grande.    |
| branco #FFFFFF     | `ciano` | 2.0:1  | ❌ Reprova tudo. Texto branco some no ciano. |
| `ciano` texto      | qualquer fundo claro | <3:1 | ❌ Ciano nunca é cor de texto em fundo claro.|

---

## Onde o ciano PODE aparecer

- **Fundo de bloco/faixa cheia, com texto petróleo por cima** (6.8:1).
  Este é o uso nobre do ciano — inclusive a faixa do pattern.
- **Ícone ou detalhe sobre fundo petróleo** (6.8:1).
- **Preenchimento do pattern do monograma** (branco / ciano / petróleo
  alternados) — decorativo, não carrega texto.
- **Borda/detalhe decorativo QUANDO adjacente a um elemento petróleo**
  que já garante a leitura da forma. O ciano acompanha, não sustenta.
- **Realce em número grande / display** apenas se o número for petróleo
  e o ciano for fundo ou sublinhado — nunca o número em ciano sobre
  branco.

## Onde o ciano NÃO PODE aparecer

- **Como cor de texto sobre branco** — em qualquer tamanho. 2.0:1.
- **Como cor de texto sobre qualquer fundo claro.**
- **Texto branco sobre fundo ciano.** Use petróleo.
- **Borda funcional que seja o ÚNICO indicador** sobre branco (ex.:
  contorno de input, sozinho): 2.0:1 reprova o mínimo não-textual de
  3:1. Se o ciano precisar delimitar algo funcional sobre branco,
  dobre com petróleo (contorno petróleo + preenchimento/realce ciano).
- **Anel de foco (`:focus-visible`) em ciano sobre branco** — 2.0:1
  reprova os 3:1 de indicador não-textual. **Foco = anel petróleo.**
  Se quiser ciano no foco, ele vai sobre trilho petróleo ou dobrado
  com petróleo.

---

## Decisões de aplicação que derivam desta tabela

1. **Corpo de texto:** `petroleo` sobre branco. Secundário:
   `petroleo-muted`. Nunca ciano.
2. **Botão de ação (WhatsApp):** fundo `petroleo`, texto branco
   (13.9:1). Ciano fica para hover/detalhe, nunca como fundo do botão
   com texto branco.
3. **Faixa de pilares / pattern:** ciano entra como fundo de bloco,
   texto sempre petróleo.
4. **Foco e bordas de formulário:** petróleo. (Lembrando: o plano não
   prevê formulário — vale para qualquer campo eventual, ex. links de
   navegação com foco de teclado.)
5. **Comfortaa** (display) só em marca, títulos e números grandes;
   corpo e rótulos em sans neutra. Isto é regra tipográfica, não de
   cor, mas mora aqui para a referência ficar completa.

---

_Recalcular e atualizar esta tabela se qualquer hex da identidade
mudar. Nenhuma cor nova entra em produção sem uma linha aqui._
