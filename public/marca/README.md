# Assets de marca

## monograma.svg
Monograma "nn" (olhos + curva do sorriso). `viewBox 0 0 204 190`, três paths,
`stroke="currentColor"`, rotação de 10° — decisão de design medida no original,
não artefato.

**Reconstrução.** Vetorizado a partir do PNG da cliente, fiel dentro de ~1,5%
em espessura de traço e profundidade do sorriso. Quando o vetor **original** da
cliente chegar, ele substitui este arquivo — e o glifo inline em
`components/MonogramaGlifo.tsx`, que deve ser mantido em sincronia com o SVG.

Uso decorativo no pattern: `components/PatternFaixa.tsx` (herda a cor por
currentColor, conforme `docs/design/paleta-contraste.md`).
